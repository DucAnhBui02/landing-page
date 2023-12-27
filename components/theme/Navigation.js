import Link from "next/link";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const Navigation = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg nav-header"
      style={{ boxShadow: "0px 0px 25px rgba(73, 0, 229, 0.06)" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Image src="/hamburger.svg" alt="hamburger" width={24} height={24} />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="">
            <Image src="/logo-head.png" alt="logo" width="143" height={37.15} />
          </a>
          <ul
            className="navbar-nav menu-item align-items-md-center"
            style={{ marginLeft: "8px" }}
          >
            <li className="nav-item ">
              <Link href={"/"}>
                <a id="featureElement" className="nav-link" aria-current="page">
                  Trang chủ
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href={"/price"}>
                <a id="priceElement" className="nav-link">
                  Gói cước
                </a>
              </Link>
            </li>

            <li className="nav-item ">
              <Link href={"/contact"}>
                <a id="contactElement" className="nav-link">
                  Liên hệ
                </a>
              </Link>
            </li>

            <li className="nav-item ml-4"></li>
          </ul>
          <div className="dropdown ms-auto">
            <a
              id="signinElement"
              className="nav-link btn bg-primary-opacity text-primary fw-bold rounded hover-primary"
              href="https://alert.vn/signin"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
