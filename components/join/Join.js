import React from "react";

const Join = () => {
  return (
    <>
      <section className="bg-section">
        <div className="container bg-section">
          <div className="join-container container position-relative">
            <div className="row align-items-center pb-5 px-3">
              <div className="col-lg-6 col-xs-6">
                <h1 className="text-title font-700 text-46">
                  Tham gia cùng chúng tôi !
                </h1>
                <p className="text-18 text-neutral-2 mt-3 mb-4">
                  Chúng tôi cho phép các doanh nghiệp, tổ chức Theo dõi + Lắng
                  nghe + Thu thập + Cảnh báo về các thông tin trên không gian
                  mạng, thường là các thông tin liên quan đến Thương hiệu, Danh
                  tiếng, thị trường, và Vận hành trong nội bộ của doanh nghiệp,
                  tổ chức.
                </p>
                <div className="d-flex">
                  <a
                    href="https://alert.vn/signin"
                    target="_blank"
                    style={{ width: "100%", maxWidth: "216px" }}
                    className="btn bg-primary-opacity text-primary font-700 text-14 rounded px-5 py-2 hover-primary"
                    rel="noreferrer"
                  >
                    Chính phủ
                  </a>
                  <a
                    href="https://alert.vn/signin"
                    target="_blank"
                    style={{ width: "100%", maxWidth: "216px" }}
                    className="btn bg-primary-opacity text-primary font-700 text-14 rounded px-5 py-2 ms-md-4 ms-2 mt-md-0 mt-3 hover-primary"
                    rel="noreferrer"
                  >
                    Doanh nghiệp
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xs-6 mb-5">
                <img
                  src="/hoptac.png"
                  className="img-fluid"
                  alt=""
                  style={{ maxHeight: "539px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
