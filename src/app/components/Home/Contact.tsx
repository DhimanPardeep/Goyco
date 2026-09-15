"use client";
import { FormEvent, useState } from "react";

export default function ZohoContactForm() {
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
    <section className="contact-section py-5">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-0">
            <div
              className="col-lg-5"
              style={{
                backgroundImage: "url(/images/banner/common.jpg)",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "#06080D",
                  opacity: 0.31,
                  zIndex: 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
              ></div>
              <div
                className="contact-info"
                style={{ zIndex: 3, position: "relative" }}
              >
                <div className="section-heading">
                  <span>GET IN TOUCH</span>
                  <h2>Let&apos;s Build Something Great Together</h2>
                </div>

                <div className="office-card">
                  <div className="office-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <h6>Chandigarh (India)</h6>
                    <p>
                      H.O Plot No, Business & Indrustrial Park,
                      <br />, Phase-2, Chandigarh (160002), India
                    </p>
                  </div>
                </div>
                <div className="office-card">
                  <div className="office-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <div>
                    <p>
                      <a href="tel:+91-9115758151"> +91-9115758151 </a>
                    </p>
                    <p>
                      <a href="tel:+91-9115758151"> +91-7347359109 </a>
                    </p>
                  </div>
                </div>
                <div className="office-card">
                  <div className="office-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <p>
                      <a href="mailto:hemant@goyco.org?subject=Inquiry">
                        {" "}
                        hemant@goyco.org{" "}
                      </a>
                    </p>
                    <p>
                      <a href="mailto:query@goyco.org?subject=Inquiry">
                        {" "}
                        cc: query@goyco.org{" "}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="office-card">
                  <div className="office-icon">
                    <i className="bi bi-whatsapp"></i>
                  </div>

                  <div>
                    <p>
                      <a href="tel:+91-9115758151"> +91-9115758151 </a>
                    </p>
                  </div>
                </div>

                <div className="map-box">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7118533825746!2d76.78484519999999!3d30.6983824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed88fb694d21%3A0x189921f83d55a91a!2sGOYCO%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1786085713141!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form">
                <h3>Send Us a Message</h3>

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
                  <input
                    type="hidden"
                    name="actionType"
                    value="Q3VzdG9tTW9kdWxlMjE="
                  />
                  <input type="hidden" name="returnURL" value="null" />
                  {/* Honeypot field — must stay hidden and empty */}
                  <input
                    type="text"
                    name="aG9uZXlwb3Q"
                    value=""
                    style={{ display: "none" }}
                    readOnly
                  />
                  <div className="row g-4">
                    <div className="col-md-12">
                      <input
                        name="COBJ21CF3"
                        type="text"
                        className="form-control"
                        placeholder="Company Name *"
                        aria-label="Company Name (required)"
                        maxLength={255}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="COBJ21CF4"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        aria-label="First Name"
                        maxLength={255}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="COBJ21CF5"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        aria-label="Last Name"
                        maxLength={255}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="COBJ21CF1"
                        type="tel"
                        className="form-control"
                        placeholder="Contact No *"
                        aria-label="Contact No (required)"
                        maxLength={30}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="Email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        maxLength={100}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Secondary Email</label>
                      <input
                        name="Secondary Email"
                        type="email"
                        className="form-control"
                        placeholder="Secondary Email"
                        aria-label="Secondary Email"
                        maxLength={100}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="COBJ21CF2"
                        rows={5}
                        className="form-control"
                        placeholder="Message *"
                        aria-label="Message (required)"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-goco"
                        disabled={status === "submitting"}
                      >
                        {status === "submitting"
                          ? "Sending..."
                          : "Send Message"}
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
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
