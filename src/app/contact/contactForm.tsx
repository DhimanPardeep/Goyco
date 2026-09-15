"use client";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
import { FormEvent, useState } from "react";
export default function ContactFrom() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (form: HTMLFormElement): string | null => {
    const companyName = (
      form.elements.namedItem("COBJ21CF3") as HTMLInputElement
    )?.value.trim();
    const contactNo = (
      form.elements.namedItem("COBJ21CF1") as HTMLInputElement
    )?.value.trim();
    const message = (
      form.elements.namedItem("COBJ21CF2") as HTMLTextAreaElement
    )?.value.trim();
    const email = (
      form.elements.namedItem("Email") as HTMLInputElement
    )?.value.trim();

    if (!companyName) return "Company Name cannot be empty.";
    if (!contactNo) return "Contact No cannot be empty.";
    if (!message) return "Message cannot be empty.";

    if (email) {
      const atPos = email.indexOf("@");
      const dotPos = email.lastIndexOf(".");
      if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
        return "Please enter a valid email address.";
      }
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validationError = validate(form);
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    const formData = new FormData(form);

    try {
      const response = await fetch("https://crm.zoho.in/crm/WebForm", {
        method: "POST",
        body: formData,
        cache: "no-cache",
      });
      const contentType = response.headers.get("Content-Type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      if (typeof data === "object" && data?.actionsubmit) {
        if (
          data.actionsubmit === "error_msg" ||
          data.actionsubmit === "captcha_error"
        ) {
          setErrorMsg(data.message || "Submission failed.");
          setStatus("error");
          return;
        }
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Zoho submission error:", err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };
  return (
    <>
      <div className="contact-form-self">
        <h2 className="fw-bold mb-4">Send Us A Query</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Required Zoho hidden fields — do not change these values */}
          <input
            type="hidden"
            name="xnQsjsdp"
            value="6294ab7cc4892172b04d7c079fbfbd85e9c882581b723f5e73fa9e8452270b36"
          />
          <input type="hidden" name="zc_gad" value="" />
          <input
            type="hidden"
            name="xmIwtLD"
            value="c67571c786e500dec4a6bbdf93f557797dccd2eaf825a697d027a01355a9f936971ab16ff59205ed949e6947177c0076"
          />
          <input type="hidden" name="actionType" value="Q3VzdG9tTW9kdWxlMjE=" />
          <input type="hidden" name="returnURL" value="null" />
          {/* Honeypot field — must stay hidden and empty */}
          <input
            type="text"
            name="aG9uZXlwb3Q"
            value=""
            style={{ display: "none" }}
            readOnly
          />
          <div className="mb-3">
            <input
              name="COBJ21CF3"
              type="text"
              className="form-control form-control-self"
              placeholder="Company Name *"
              aria-label="Company Name (required)"
              maxLength={255}
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="COBJ21CF4"
              type="text"
              className="form-control form-control-self"
              placeholder="First Name"
              aria-label="First Name"
              maxLength={255}
            />
          </div>
          <div className="mb-3">
            <input
              name="COBJ21CF5"
              type="text"
              className="form-control form-control-self"
              placeholder="Last Name"
              aria-label="Last Name"
              maxLength={255}
            />
          </div>
          <div className="mb-3">
            <input
              name="COBJ21CF1"
              type="tel"
              className="form-control form-control-self"
              placeholder="Contact No *"
              aria-label="Contact No (required)"
              maxLength={30}
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="Email"
              type="email"
              className="form-control form-control-self"
              placeholder="Email"
              aria-label="Email"
              maxLength={100}
            />
          </div>
          <div className="mb-3">
            <input
              name="Secondary Email"
              type="email"
              className="form-control form-control-self"
              placeholder="Secondary Email"
              aria-label="Secondary Email"
              maxLength={100}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="COBJ21CF2"
              rows={5}
              className="form-control form-control-self"
              placeholder="Message *"
              aria-label="Message (required)"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg px-5 text-white"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
          {status === "success" && (
            <p className="text-success mt-3">
              Thank you! Your message has been submitted.
            </p>
          )}
          {status === "error" && errorMsg && (
            <p className="text-danger mt-3">{errorMsg}</p>
          )}
        </form>
      </div>
    </>
  );
}
