import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-main d-flex">
        <div className="footer-area footer-padding w-100" style={{ zIndex: 3 }}>
          <div className="container">
            <div className="row justify-content-between pt-5">
              <div className="col-lg-5">
                <div>
                  <div className="my-2">
                    <span>Sản phẩm thuộc hệ sinh thái </span>
                  </div>
                  <a
                    href="https://mhdigital.vn/"
                    className="text-22 text-white text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MH Digital - Công nghệ & Giải pháp dữ liệu
                  </a>
                  <div className="mt-4">
                    <a
                      className="text-14 text-white text-decoration-none"
                      href="#"
                    >
                      <Image
                        src="/location.svg"
                        alt="location"
                        className="me-1"
                        width={24}
                        height={24}
                      />
                      Tầng 5, 71-73, Trần Thái Tông, Cầu Giấy, Hà Nội
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      className="text-14 text-white text-decoration-none"
                      href="tel:0973999804"
                    >
                      <Image
                        src="/phone.svg"
                        alt="phone"
                        className="me-1"
                        width={24}
                        height={24}
                      />
                      0973.999.804 (Mr.Sơn)
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      className="text-14 text-white text-decoration-none"
                      href="mailto:sales@mhdigital.vn"
                    >
                      <Image
                        src="/email.svg"
                        alt="email"
                        className="me-1"
                        width={24}
                        height={24}
                      />
                      sales@mhdigital.vn
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      className="text-14 text-white text-decoration-none"
                      href="https://alert.vn/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/internet.svg"
                        alt="internet"
                        className="me-1"
                        width={24}
                        height={24}
                      />
                      https://alert.vn/
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 mt-md-0 mt-4">
                <h5
                  className="text-16 font-700 text-white"
                  style={{ lineHeight: "35px" }}
                >
                  Chính sách
                </h5>
                <div className="mt-md-3 mt-2">
                  <a
                    className="text-14 font-500 text-decoration-none text-white"
                    href="#"
                  >
                    Hướng dẫn mua hàng
                  </a>
                </div>
                <div className="mt-md-3 mt-2">
                  <a
                    className="text-14 font-500 text-decoration-none text-white"
                    href="#"
                  >
                    Điều kiện giao dịch chung
                  </a>
                </div>
                <div className="mt-md-3 mt-2">
                  <a
                    className="text-14 font-500 text-decoration-none text-white"
                    href="#"
                  >
                    Điều khoản sử dụng
                  </a>
                </div>
                <div className="mt-md-3 mt-2">
                  <a
                    className="text-14 font-500 text-decoration-none text-white"
                    href="#"
                  >
                    Phương thức thanh toán
                  </a>
                </div>
                <div className="mt-md-3 mt-2">
                  <a
                    className="text-14 font-500 text-decoration-none text-white"
                    href="#"
                  >
                    Chính sách bảo mật
                  </a>
                </div>
                <div className="mt-md-3 mt-2">
                  <a
                    className="text-14 font-500 text-decoration-none text-white"
                    href="#"
                  >
                    Chính sách bảo vệ dữ liệu cá nhân
                  </a>
                </div>
              </div> */}
              <div className="col-lg-4 mt-md-0 mt-4">
                <h5
                  className="text-16 font-700 text-white"
                  style={{ lineHeight: "35px" }}
                >
                  Kênh truyền thông
                </h5>
                <div className="mt-4 d-flex">
                  <a
                    id="click-to-fanpage"
                    className="d-block my-auto"
                    href="https://www.facebook.com/mhdigitaljsc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/facebook-ico.svg"
                      alt="facebook"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-0" style={{ background: "#3D4B8F" }} />
          <div className="container" style={{ color: "#A1A5BA" }}>
            <div className="row d-flex align-items-center py-2">
              <div className="col-md-3 col-12 d-flex">
                <p className="text-12 my-auto">
                  © 2023 MH Digital. Đã đăng ký bản quyền.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
