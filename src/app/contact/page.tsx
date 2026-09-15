import type { Metadata } from "next";
import Slider from "../components/Home/Slider";
export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Slider></Slider>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="contact-card-self">
                <i className="bi bi-telephone-fill"></i>

                <h5>Call Us</h5>

                <p>+91-9115758151</p>
                <p>+91-7347359109</p>
                <p>
                  <i className="bi bi-whatsapp"></i> +91-9115758151
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-card-self">
                <i className="bi bi-envelope-fill"></i>

                <h5>Email</h5>

                <p>hemant@goyco.org</p>
                <p>cc: query@goyco.org</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-card-self">
                <i className="bi bi-geo-alt-fill"></i>

                <h5>Office</h5>

                <p>Chandigarh (India)</p>
                <p>
                  H.O Plot No, Business & Indrustrial Park, Phase-2, Chandigarh
                  (160002), India.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-card-self">
                <i className="bi bi-clock-fill"></i>

                <h5>Business Hours</h5>

                <p>
                  Mon - Fri
                  <br />
                  8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="contact-form-self">
                <h2 className="fw-bold mb-4">Send Us A Query</h2>

                <form>
                  <div className="mb-3">
                    <input
                      className="form-control form-control-self"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-self"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control form-control-self"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control form-control-self"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      rows={5}
                      className="form-control form-control-self"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button className="btn btn-primary btn-lg px-5 text-white">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="map-box-self">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7118533825746!2d76.78484519999999!3d30.6983824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed88fb694d21%3A0x189921f83d55a91a!2sGOYCO%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1786085713141!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
