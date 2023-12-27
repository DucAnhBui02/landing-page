"use client";
import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <section>
        <div className="bg-opacity-1">
          <div className="container">
            <div id="slide-banner" className="slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: "1326px",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    className="row mb-4 mx-0 slick-slide slick-current slick-active"
                    data-slick-index="0"
                    aria-hidden="false"
                    style={{ width: "1326px" }}
                    tabIndex="0"
                  >
                    <div className="col-lg-6 col-xs-6 mt-5">
                      <div className="d-flex">
                        <span className="text-14 me-2">
                          Một sản phẩm của hệ sinh thái
                        </span>
                        <Image
                          src="/MH-digital-logo.png"
                          width="86"
                          height="22"
                          className="Image-fluid"
                          alt="MH-digital-logo"
                        />
                      </div>
                      <div className="mt-4 mb-4">
                        <img src="/Alert.png" alt="Alert" height={140} />

                        <h1 className="text-title text-50 font-700 lh-62">
                          Nền tảng lắng nghe - theo dõi - giám sát mạng xã hội
                        </h1>
                      </div>
                      <div>
                        <p className="text-18 text-neutral-2">
                          Giải pháp công nghệ ứng dụng sự tích hợp mạnh mẽ giữa
                          Social Listening và Social Tracking để khai thác Dữ
                          liệu lớn trên các kênh truyền thông và mạng xã hội.
                        </p>
                      </div>
                      <div className="mt-5">
                        <a
                          className="btn text-white bg-primary rounded px-5 box-shadow-primary text-18 font-700 trial position-relative"
                          href="https://alert.vn/signin"
                          target="_self"
                          style={{ lineHeight: "56px", padding: "0px" }}
                          tabIndex="0"
                        >
                          <span>Trải nghiệm ngay</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xs-6">
                      <Image
                        src="/banner.png"
                        width={532.96}
                        height={600}
                        style={{ maxHeight: "600px" }}
                        className="Image-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="doitac position-relative pb-5">
            <div className="text-center mt-5">
              <div className="text-20 text-neutral-2 font-500 mb-4 text-center">
                Khách hàng của chúng tôi
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center marquee-content">
                <div className="marquee-item">
                  <img src="/p-vnpt.png" alt="VNPT" />
                </div>
                <div className="marquee-item">
                  <img src="/p-vnpost.png" alt="VIET NAM POST" />
                </div>
                <div className="marquee-item">
                  <img src="/p-lsn.png" alt="Lạng Sơn" />
                </div>
                <div className="marquee-item">
                  <img src="/p-lci.png" alt="Lào Cai" />
                </div>
                <div className="marquee-item">
                  <img src="/p-pto.png" alt="Phú Thọ" />
                </div>
                <div className="marquee-item">
                  <img src="/p-tttt.png" alt="Bộ thông tin và truyền thông" />
                </div>
                <div className="marquee-item">
                  <img src="/p-boquocphong.png" alt="Quân đội nhân dân" />
                </div>
                <div className="marquee-item">
                  <img src="/p-bocongan.png" alt="Công an nhân dân" />
                </div>
                <div className="marquee-item">
                  <img src="/p-vnpt.png" alt="VNPT" />
                </div>
                <div className="marquee-item">
                  <img src="/p-vnpost.png" alt="VIET NAM POST" />
                </div>
                <div className="marquee-item">
                  <img src="/p-lsn.png" alt="Lạng Sơn" />
                </div>
                <div className="marquee-item">
                  <img src="/p-lci.png" alt="Lào Cai" />
                </div>
                <div className="marquee-item">
                  <img src="/p-pto.png" alt="Phú Thọ" />
                </div>
                <div className="marquee-item">
                  <img src="/p-tttt.png" alt="Bộ thông tin và truyền thông" />
                </div>
                <div className="marquee-item">
                  <img src="/p-boquocphong.png" alt="Quân đội nhân dân" />
                </div>
                <div className="marquee-item">
                  <img src="/p-bocongan.png" alt="Công an nhân dân" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
