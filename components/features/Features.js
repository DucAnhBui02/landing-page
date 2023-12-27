import React from "react";

const Features = () => {
  return (
    <>
      <section id="section-2">
        <div className="text-center">
          <h1 className="text-title font-700 text-46">Tính năng nổi bật</h1>
          <p className="text-18 text-neutral-2 mt-4 mb-5">
            <a href="">Alert.vn</a> được phát triển dựa trên những công nghệ
            hiện đại
          </p>
        </div>
        <div className="position-relative container">
          <div className="slide-feature slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: "2210px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: "412px" }}
                  tabIndex="0"
                >
                  <div className="feature-item h-100 p-4">
                    <div className="card-image">
                      <img
                        src="/card-1.png"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                    <h4 className="text-title text-18 font-700 overflow-2-line mb-3">
                      Giám sát thông tin đa kênh
                    </h4>
                    <p className="text-14 text-neutral-2 overflow-2-line mb-3">
                      Alert tích hợp giữa Social Listening và Social Tracking,
                      cho phép nó khai thác và phân tích dữ liệu lớn từ các kênh
                      truyền thông và mạng xã hội.
                    </p>
                    <a
                      href="/feature"
                      target="_blank"
                      className="text-14 text-primary text-decoration-none font-600 d-flex align-items-center"
                      tabIndex="0"
                      rel="noreferrer"
                    >
                      Xem thêm
                      <img
                        src="/right-up.svg"
                        className="img-fluid ms-1"
                        alt=""
                        style={{ width: "16px" }}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  style={{ width: "412px" }}
                  tabIndex="0"
                >
                  <div className="feature-item h-100 p-4">
                    <div className="card-image">
                      <img
                        src="/card-2.png"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                    <h4 className="text-title text-18 font-700 overflow-2-line mb-3">
                      Phân tích dữ liệu chuyên sâu
                    </h4>
                    <p className="text-14 text-neutral-2 overflow-2-line mb-3">
                      Thu thập và phân tích dữ liệu với số lượng lớn để nắm bắt
                      xu hướng thông tin, nội dung các cuộc thảo luận trên
                      Internet theo từ khóa được thiết lập
                    </p>
                    <a
                      href="/feature"
                      target="_blank"
                      className="text-14 text-primary text-decoration-none font-600 d-flex align-items-center"
                      tabIndex="0"
                      rel="noreferrer"
                    >
                      Xem thêm
                      <img
                        src="/right-up.svg"
                        className="img-fluid ms-1"
                        alt=""
                        style={{ width: "16px" }}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  style={{ width: "412px" }}
                  tabIndex="0"
                >
                  <div className="feature-item h-100 p-4">
                    <div className="card-image">
                      <img
                        src="/card-3.png"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                    <h4 className="text-title text-18 font-700 overflow-2-line mb-3">
                      Cung Cấp Báo Cáo và Nghiên Cứu
                    </h4>
                    <p className="text-14 text-neutral-2 overflow-2-line mb-3">
                      Alert cung cấp báo cáo chi tiết và nghiên cứu chuyên sâu
                      dựa trên dữ liệu thu thập được, giúp người dùng có cái
                      nhìn sâu sắc hơn về hoạt động trên mạng xã hội.
                    </p>
                    <a
                      href="/feature"
                      target="_blank"
                      className="text-14 text-primary text-decoration-none font-600 d-flex align-items-center"
                      tabIndex="0"
                      rel="noreferrer"
                    >
                      Xem thêm
                      <img
                        src="/right-up.svg"
                        className="img-fluid ms-1"
                        alt=""
                        style={{ width: "16px" }}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  style={{ width: "412px" }}
                  tabIndex="-1"
                >
                  <div className="feature-item h-100 p-4">
                    <div className="card-image">
                      <img
                        src="/card-4.png"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </div>
                    <h4 className="text-title text-18 font-700 overflow-2-line mb-3">
                      Cảnh Báo Rủi Ro và Khủng Hoảng
                    </h4>
                    <p className="text-14 text-neutral-2 overflow-2-line mb-3">
                      Cảnh báo sớm về các rủi ro và tình huống khủng hoảng tiềm
                      ẩn, giúp người dùng chuẩn bị ứng phó kịp thời.
                    </p>
                    <a
                      href="/feature"
                      target="_blank"
                      className="text-14 text-primary text-decoration-none font-600 d-flex align-items-center"
                      tabIndex="-1"
                      rel="noreferrer"
                    >
                      Xem thêm
                      <img
                        src="/right-up.svg"
                        className="img-fluid ms-1"
                        alt=""
                        style={{ width: "16px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn-feature-pre border-0 bg-transparent position-absolute slick-arrow slick-disabled"
            aria-disabled="true"
            style={{ display: "inline-block" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="24"
                cy="24"
                rx="24"
                ry="24"
                transform="rotate(-180 24 24)"
                fill="black"
                fillOpacity="0.3"
              ></ellipse>
              <path
                d="M20.46 24.71L26.12 30.36C26.213 30.4537 26.3236 30.5281 26.4454 30.5789C26.5673 30.6297 26.698 30.6558 26.83 30.6558C26.962 30.6558 27.0927 30.6297 27.2146 30.5789C27.3365 30.5281 27.4471 30.4537 27.54 30.36C27.7263 30.1726 27.8308 29.9192 27.8308 29.655C27.8308 29.3908 27.7263 29.1374 27.54 28.95L22.59 23.95L27.54 19C27.7263 18.8126 27.8308 18.5592 27.8308 18.295C27.8308 18.0308 27.7263 17.7774 27.54 17.59C27.4474 17.4955 27.337 17.4203 27.2151 17.3688C27.0932 17.3173 26.9623 17.2905 26.83 17.29C26.6977 17.2905 26.5668 17.3173 26.445 17.3688C26.3231 17.4203 26.2126 17.4955 26.12 17.59L20.46 23.24C20.3585 23.3336 20.2775 23.4473 20.2221 23.5738C20.1667 23.7003 20.1381 23.8369 20.1381 23.975C20.1381 24.1131 20.1667 24.2497 20.2221 24.3762C20.2775 24.5027 20.3585 24.6164 20.46 24.71V24.71Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <button
            className="btn-feature-next border-0 bg-transparent position-absolute slick-arrow"
            aria-disabled="false"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="24"
                cy="24"
                rx="24"
                ry="24"
                fill="black"
                fillOpacity="0.3"
              ></ellipse>
              <path
                d="M27.54 23.29L21.88 17.64C21.787 17.5463 21.6764 17.4719 21.5546 17.4211C21.4327 17.3703 21.302 17.3442 21.17 17.3442C21.038 17.3442 20.9073 17.3703 20.7854 17.4211C20.6635 17.4719 20.5529 17.5463 20.46 17.64C20.2737 17.8274 20.1692 18.0808 20.1692 18.345C20.1692 18.6092 20.2737 18.8626 20.46 19.05L25.41 24.05L20.46 29C20.2737 29.1874 20.1692 29.4408 20.1692 29.705C20.1692 29.9692 20.2737 30.2226 20.46 30.41C20.5526 30.5045 20.663 30.5797 20.7849 30.6312C20.9068 30.6827 21.0377 30.7095 21.17 30.71C21.3023 30.7095 21.4332 30.6827 21.555 30.6312C21.6769 30.5797 21.7874 30.5045 21.88 30.41L27.54 24.76C27.6415 24.6664 27.7225 24.5527 27.7779 24.4262C27.8333 24.2997 27.8619 24.1631 27.8619 24.025C27.8619 23.8869 27.8333 23.7503 27.7779 23.6238C27.7225 23.4973 27.6415 23.3836 27.54 23.29Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;
