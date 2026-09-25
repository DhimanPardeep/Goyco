import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Solutions() {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Solutions</h2>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/logo/workyard.png`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4>WORK YARD</h4>

              <p>Pocket friendly coworking spaces.</p>
              <a
                href="https://workyard.in"
                target="_blank"
                className="btn btn-visit"
              >
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/logo/NEEVSPACES.jpeg`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4>NEEVSPACES</h4>

              <p>Old School trading of Coworking Spaces Services</p>
              <a
                href="https://neevspaces.com/"
                target="_blank"
                className="btn btn-visit"
              >
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/logo/workyard.png`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4 className="text-uppercase">Golphoen Aggregations</h4>

              <p>Aggregation Services of Solutions required in Business</p>
              <a href="#" className="btn btn-visit">
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image" style={{ width: "200px" }}>
                <Image
                  className="img-fluid"
                  src={`${basePath}/images/logo/golphoenchd.jpg`}
                  alt=""
                  style={{ width: "200px" }}
                  height={150}
                  width={200}
                ></Image>
              </div>
              <h4 className="text-uppercase">Golphoen Chandigarh Edition</h4>

              <p>Required Ecosystem for Entrepreneurs in Chandigarh Tricity</p>
              <a href="#" className="btn btn-visit">
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
