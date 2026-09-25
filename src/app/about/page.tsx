import type { Metadata } from "next";
import Slider from "../components/Home/Slider";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <Slider></Slider>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5  align-items-stretch">
            <div className="col-lg-6">
              <div className="about-image mt-5">
                <img
                  src={`${basePath}/images/about/Goyco.JPG`}
                  className="img-fluid rounded-4 "
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-title "> ABOUT US </span>

              <p className="mt-3">
                Goyco is built on a simple belief- India has unique challenges
                and those challenges deserve unique solutions. It started with a
                simple thought - to serve our country by building things that
                make a difference. We believe that serving the nation is not
                limited to one field or one way. We are a group of people who
                are willing to think beyond the conventional, identify what can
                be done better and most importantly act upon those ideas. Our
                aim is to create practical, innovative and sustainable solutions
                that are relevant to India and its people. Each initiative may
                belong to a different category but the thought remains the same
                - &quot;identify a need, build a solutions and make it
                happen&quot;. Goyco is therefore not limited to one industry ,
                one idea or one kind of business. Over time, this thought has
                grown into a growing network across India. We have built and
                developed multiple solutions across different categories.
                Through our work, we have also build a strong and growing
                clientele across India. For us, it is not just building
                bussiness,it is about building solutions with a purpose.
              </p>

              <div className="row mt-5">
                <div className="col-6">
                  <div className="counter-card">
                    <h3>2</h3>

                    <p>Ventures</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="counter-card">
                    <h3>4+</h3>

                    <p>Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mission & Vision</h2>

            <p className="text-muted">Building Unique Solutions for India.</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card h-100">
                <div className="d-flex align-items-center">
                  <div className="icon-circle">
                    <i className="bi bi-bullseye"></i>
                  </div>

                  <h3 className="ps-3">Our Mission</h3>
                </div>

                <div className="mt-2 d-flex">
                  <div
                    className="icon-circle"
                    style={{ background: "transparent" }}
                  ></div>
                  <div className="ps-3">
                    Build Unique Solutions for India which are really required.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mission-card h-100">
                <div className="d-flex align-items-center">
                  <div className="icon-circle">
                    <i className="bi bi-stars"></i>
                  </div>

                  <h3 className="ps-3">Our Vision</h3>
                </div>
                <div className="mt-2  d-flex">
                  <div
                    className="icon-circle"
                    style={{ background: "transparent" }}
                  ></div>
                  <div className="ps-3">
                    Play our role in Development of our Country.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Our Team</span>
            <h2 className="fw-bold mt-2">Meet Our Leadership</h2>
            <p className="text-muted">
              Experienced professionals committed to innovation, excellence, and
              delivering exceptional value.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 offset-3 col-md-6">
              <div className="team-card">
                <div className="team-image">
                  <Image
                    height={90}
                    width={90}
                    src={`${basePath}/images/ceo.jpg`}
                    alt=""
                  ></Image>
                </div>

                <div className="team-content">
                  <h4>John Anderson</h4>

                  <span className="designation"> Chief Executive Officer </span>

                  <p>
                    Visionary leader driving innovation, strategy and long-term
                    business growth.
                  </p>

                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-image">
                  <Image
                    height={90}
                    width={90}
                    src={`${basePath}/images/ceo.jpg`}
                    alt=""
                  ></Image>
                </div>

                <div className="team-content">
                  <h4>John Anderson</h4>

                  <span className="designation"> Chief Executive Officer </span>

                  <p>
                    Visionary leader driving innovation, strategy and long-term
                    business growth.
                  </p>

                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
