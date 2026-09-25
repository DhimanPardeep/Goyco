import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Ventures() {
  return (
    <section className="py-3">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Ventures</h2>
        </div>

        <div className="row g-4">
          <div className="offset-lg-2 col-lg-4 col-md-6">
            <div className="venture-card h-100">
              <div className="venture-logo">
                <Image
                  src={`${basePath}/images/logo/Goyco1.png`}
                  className="img-fluid"
                  alt=""
                  width={200}
                  height={120}
                ></Image>
              </div>

              <h4 className="mt-4 fw-semibold">Goyco Services Pvt Ltd.</h4>

              <p>
                Building Unique real estate as an service solutions for the
                Indian Economy
              </p>

              <a
                href="https://services.goyco.org"
                target="_blank"
                className="btn btn-primary rounded-pill mt-auto"
              >
                <i className="bi bi-globe me-2"></i>
                Visit Website
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="venture-card h-100">
              <div className="venture-logo">
                <Image
                  src={`${basePath}/images/logo/Goyco1.png`}
                  className="img-fluid"
                  width={200}
                  height={120}
                  alt=""
                ></Image>
              </div>

              <h4 className="mt-4 fw-semibold">
                Goyco Business Solutions Pvt Ltd.
              </h4>

              <p>
                Building Uniquebusiness solutions required by any business for
                the Indian economy
              </p>

              <a
                href="https://bs.goyco.org"
                target="_blank"
                className="btn btn-primary rounded-pill mt-auto"
              >
                <i className="bi bi-globe me-2"></i>
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
