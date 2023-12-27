import { useRouter } from "next/router";
import React from "react";
import PropTypes from "prop-types";

const Price = (props) => {
  const router = useRouter();
  const redirectToContact = () => {
    router.push("/contact");
  };
  return (
    <section className="prices">
      <div className="text-center">
        <h1 className="text-50 text-title font-700">Gói cước</h1>
      </div>
      <div className="option mt-5">
        <div className="d-flex justify-content-center">
          <div className="tab d-flex justify-content-center flex-md-row flex-column">
            <button className="mx-auto active" tab="first">
              Hạn mức
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row tab-content" id="first" style={{ display: "flex" }}>
          <div className="col mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">Basic</h6>
                <h3 className="text-30 text-price font-700"> 6.000.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content p-col">
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    Vô hiệu quá dữ liệu lịch sử
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    10,000 items được xuất
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    02 dự án cùng một lúc
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    10 bộ từ khóa được kết hợp
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    01 thiết bị cùng một lúc
                  </div>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick={() => {
                    window.location.href = "https://alert.vn/signin";
                  }}
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Nâng cấp/gia hạn
                </button>
              </div>
            </div>
          </div>
          <div className="col mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">Standard</h6>
                <h3 className="text-30 text-price font-700"> 9.000.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content p-col">
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    2 tài khoản (1 tài khoản chính và 1 tài khoản phụ)
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">20 chủ đề theo dõi</div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">40 từ khóa chính</div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    2000 tin bài/lần xuất báo cáo
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">15 chủ đề cảnh báo</div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    5 nguồn theo dõi/chủ đề
                  </div>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick={() => {
                    window.location.href = "https://alert.vn/signin";
                  }}
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Nâng cấp/gia hạn
                </button>
              </div>
            </div>
          </div>
          <div className="col mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">Premium</h6>
                <h3 className="text-30 text-price font-700"> 12.000.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content p-col">
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    12 tháng dữ liệu lịch sử
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    200,000 items được xuất
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    10 dự án cùng một lúc
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    20 bộ từ khóa được kết hợp
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    03 thiết bị cùng một lúc
                  </div>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick={() => {
                    window.location.href = "https://alert.vn/signin";
                  }}
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Nâng cấp/gia hạn
                </button>
              </div>
            </div>
          </div>
          <div className="col mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">Enterprise</h6>
                <h3 className="text-14 text-price font-700">Liên hệ</h3>
              </div>
              <div className="price-content p-col">
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    Tùy chọn số tài khoản
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    Tùy chọn chủ đề theo dõi
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    {" "}
                    Tùy chọn từ khóa chính/chủ đề
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    {" "}
                    Tùy chọn tin bài/lần xuất báo cáo
                  </div>
                </div>
                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    Tùy chọn chủ đề cảnh báo
                  </div>
                </div>

                <div className="mb-3 w-100 d-flex">
                  <div
                    className="me-1 mb-auto icon-svg"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                      <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                    </svg>
                  </div>
                  <div className="text-14 text-neutral">
                    {" "}
                    Tùy chọn nguồn theo dõi/chủ đề
                  </div>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick={redirectToContact}
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <ul className="disc">
                <li>
                  <span className="text-14 font-400 text-neutral">
                    Giá cước chưa bao gồm thuế VAT.
                  </span>
                </li>
                <li>
                  <span className="text-14 font-400 text-neutral">
                    Gói cước có thời hạn sử dụng trong 01 tháng, các tính năng
                    không dùng hết không được cộng dồn vào gói kế tiếp.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="row tab-content"
          id="second"
          style={{ display: "none" }}
        >
          <div className="col-lg-4 col-sm-6 col-12 mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">
                  Mở rộng theo dõi nguồn dữ liệu là tin rác
                </h6>
                <h3 className="text-30 text-price font-700">2.000.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content">
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">
                    Chỉ áp dụng cho gói Standard và Premium
                  </span>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick="window.open(`https://vnsocial.vnpt.vn/contact`, &#39;_self&#39;)"
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">
                  Mở chức năng chat trực tuyến
                </h6>
                <h3 className="text-30 text-price font-700">500.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content">
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">
                    <b>1.000</b> tin nhắn
                  </span>
                </div>
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">
                    Chỉ áp dụng cho gói Standard và Premium
                  </span>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick="window.open(`https://vnsocial.vnpt.vn/contact`, &#39;_self&#39;)"
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">
                  Mở chức năng auto seeding
                </h6>
                <h3 className="text-30 text-price font-700">500.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content">
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">
                    <b>1.000</b> lượt seeding (like, share, comment)
                  </span>
                </div>
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">
                    Chỉ áp dụng cho gói Standard và Premium
                  </span>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick="window.open(`https://vnsocial.vnpt.vn/contact`, &#39;_self&#39;)"
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">
                  Mua thêm gói chủ đề
                </h6>
                <h3 className="text-30 text-price font-700">1.500.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content">
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">10 chủ đề</span>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick="window.open(`https://vnsocial.vnpt.vn/contact`, &#39;_self&#39;)"
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">
                  Mua thêm gói chủ đề cảnh báo
                </h6>
                <h3 className="text-30 text-price font-700">1.000.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content">
                <div className="mb-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#EEE8FA"></circle>
                    <circle cx="6" cy="6" r="3" fill="#5219CD"></circle>
                  </svg>
                  <span className="text-14 text-neutral">10 chủ đề</span>
                </div>
              </div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick="window.open(`https://vnsocial.vnpt.vn/contact`, &#39;_self&#39;)"
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mt-3">
            <div className="card rounded p-3 h-100">
              <div className="price-header">
                <h6 className="text-16 text-title font-600">
                  Cảnh báo qua Zalo
                </h6>
                <h3 className="text-30 text-price font-700">550.000</h3>
                <p className="text-14 text-neutral-3">VNĐ/Tháng</p>
              </div>
              <div className="price-content"></div>
              <div className="price-footer h-100 d-flex align-items-end mt-5">
                <button
                  onClick="window.open(`https://vnsocial.vnpt.vn/contact`, &#39;_self&#39;)"
                  className="btn btn-price text-14 font-700 rounded w-100 py-2"
                >
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <ul className="disc">
                <li>
                  <span className="text-14 font-400 text-neutral">
                    Giá cước chưa bao gồm thuế VAT.
                  </span>
                </li>
                <li>
                  <span className="text-14 font-400 text-neutral">
                    Lượt request chỉ được sử dụng trong thời gian đã mua của gói
                    cước, sản lượng không dùng hết không được cộng dồn vào gói
                    kế tiếp.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Price.propTypes = {};

Price.defaultProps = {};

export default Price;
