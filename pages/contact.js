import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <div className="bg-contact">
      <section className="contact">
        <div className="container" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <h1 className="text-48 text-title font-700">
                Liên hệ <br /> với chúng tôi
              </h1>
              <p
                className="text-neutral-2 text-16 font-500 mt-3"
                style={{ maxWidth: "440px" }}
              >
                Chúng tôi có thể trả lời bất kỳ câu hỏi nào của bạn, cung cấp
                các bản demo sản phẩm và tìm ra gói sản phẩm hoàn hảo cho bạn.
              </p>
              <div className="mt-5">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z"
                      fill="#5219CD"
                    ></path>
                  </svg>
                  <span
                    className="text-title text-16 font-500"
                    style={{ marginLeft: "4px" }}
                  >
                    Tầng 5, 71-73, Trần Thái Tông, Cầu Giấy, Hà Nội
                  </span>
                </div>
                <div className="my-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4401 13.0004C19.2201 13.0004 18.9901 12.9304 18.7701 12.8804C18.3246 12.7822 17.8868 12.6518 17.4601 12.4904C16.9962 12.3216 16.4862 12.3304 16.0284 12.515C15.5706 12.6996 15.1972 13.047 14.9801 13.4904L14.7601 13.9404C13.7861 13.3985 12.8911 12.7256 12.1001 11.9404C11.3149 11.1494 10.6419 10.2544 10.1001 9.28036L10.5201 9.00036C10.9635 8.78327 11.3109 8.40989 11.4955 7.95205C11.6801 7.49421 11.6889 6.98427 11.5201 6.52036C11.3613 6.09278 11.231 5.65515 11.1301 5.21036C11.0801 4.99036 11.0401 4.76036 11.0101 4.53036C10.8887 3.82598 10.5197 3.1881 9.96972 2.7316C9.41972 2.27509 8.7248 2.02997 8.0101 2.04036H5.0101C4.57913 2.03631 4.15235 2.12517 3.75881 2.30089C3.36527 2.4766 3.01421 2.73505 2.72953 3.05864C2.44485 3.38222 2.23324 3.76335 2.10909 4.17607C1.98494 4.58879 1.95118 5.02342 2.0101 5.45036C2.54284 9.63974 4.45613 13.5322 7.44775 16.513C10.4394 19.4938 14.3388 21.3929 18.5301 21.9104H18.9101C19.6475 21.9114 20.3595 21.6409 20.9101 21.1504C21.2265 20.8674 21.4792 20.5205 21.6516 20.1327C21.8239 19.7448 21.9121 19.3248 21.9101 18.9004V15.9004C21.8979 15.2057 21.6449 14.5369 21.1944 14.008C20.744 13.4791 20.1239 13.123 19.4401 13.0004ZM19.9401 19.0004C19.9399 19.1423 19.9095 19.2827 19.8509 19.412C19.7923 19.5413 19.7068 19.6566 19.6001 19.7504C19.4887 19.8474 19.3581 19.9198 19.2168 19.9629C19.0755 20.0059 18.9267 20.0187 18.7801 20.0004C15.035 19.5202 11.5563 17.8068 8.89282 15.1306C6.2293 12.4545 4.53251 8.96769 4.0701 5.22036C4.05419 5.07387 4.06813 4.92569 4.1111 4.78475C4.15407 4.64381 4.22517 4.51304 4.3201 4.40036C4.41381 4.29369 4.52916 4.2082 4.65848 4.14957C4.7878 4.09095 4.92812 4.06054 5.0701 4.06036H8.0701C8.30265 4.05518 8.52972 4.13124 8.71224 4.27543C8.89476 4.41962 9.02131 4.62293 9.0701 4.85036C9.1101 5.12369 9.1601 5.39369 9.2201 5.66036C9.33562 6.1875 9.48936 6.70554 9.6801 7.21036L8.2801 7.86036C8.1604 7.91528 8.05272 7.9933 7.96326 8.08995C7.87379 8.1866 7.8043 8.29997 7.75877 8.42355C7.71324 8.54713 7.69257 8.67849 7.69795 8.81008C7.70332 8.94167 7.73464 9.0709 7.7901 9.19036C9.2293 12.2731 11.7073 14.7512 14.7901 16.1904C15.0336 16.2904 15.3066 16.2904 15.5501 16.1904C15.6748 16.1457 15.7894 16.0768 15.8873 15.9875C15.9851 15.8983 16.0643 15.7905 16.1201 15.6704L16.7401 14.2704C17.2571 14.4552 17.7847 14.6088 18.3201 14.7304C18.5868 14.7904 18.8568 14.8404 19.1301 14.8804C19.3575 14.9291 19.5608 15.0557 19.705 15.2382C19.8492 15.4207 19.9253 15.6478 19.9201 15.8804L19.9401 19.0004Z"
                      fill="#5219CD"
                    ></path>
                  </svg>
                  <a
                    href="tel:0973.999.804"
                    className="text-title text-16 font-500 text-decoration-none"
                    style={{ marginLeft: "4px" }}
                  >
                    0973.999.804 (Mr.Sơn)
                  </a>
                </div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z"
                      fill="#5219CD"
                    ></path>
                  </svg>
                  <a
                    className="text-title text-16 font-500 text-decoration-none"
                    href="mailto:sales@mhdigital.vn"
                    style={{ marginLeft: "4px" }}
                  >
                    sales@mhdigital.vn
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-contact">
                <form
                  id="formContact"
                  name="formData"
                  data-toggle="validator"
                  action="https://vnsocial.vnpt.vn/send_message"
                  className="book_schedule p-4"
                  method="POST"
                  noValidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="_token"
                    id="_token"
                    value="BOTz5EObsYnIdKN6myqk8Kv5gpeXlKmLFoNlB3kf"
                  />

                  <div className="form-group">
                    <label className="text-14 text-title font-700">
                      Họ tên
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập họ tên"
                        value=""
                        name="fullname"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="text-14 text-title font-700">Email</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập email"
                        name="email"
                        autoComplete="off"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="text-14 text-title font-700">
                      Số điện thoại
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Nhập số điện thoại"
                        name="phone"
                        autoComplete="off"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="text-14 text-title font-700">
                      Công ty
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên công ty"
                        name="company"
                        autoComplete="off"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="text-14 text-title font-700">
                      Chọn lĩnh vực
                    </label>
                    <div className="mt-1 position-relative">
                      <select className="form-select" name="field" value="">
                        <option value="" selected="">
                          Chọn lĩnh vực
                        </option>
                        <option value="government">Chính phủ</option>
                        <option value="education">Giáo dục</option>
                        <option value="medical">Y tế sức khỏe</option>
                        <option value="bank">Ngân hàng</option>
                        <option value="insurance">Tài chính bảo hiểm</option>
                        <option value="tourism">Du lịch</option>
                        <option value="carriage">Vận tải</option>
                        <option value="realEstate">Bất động sản</option>
                        <option value="retail">Bán buôn bán lẻ</option>
                        <option value="ecommerce">Thương mại điện tử</option>
                        <option value="agriculture">Nông lâm ngư nghiệp</option>
                        <option value="informationTech">
                          Công nghệ thông tin
                        </option>
                        <option value="informationCom">
                          Thông tin truyền thông
                        </option>
                        <option value="medicine">Dược phẩm</option>
                        <option value="food">Thực phẩm &amp; đồ uống</option>
                        <option value="build">Xây dựng</option>
                        <option value="law">Luật</option>
                        <option value="entertainment">Giải trí</option>
                        <option value="cosmetic">Mỹ phẩm, làm đẹp</option>
                        <option value="energy">Năng lượng và môi trường</option>
                        <option value="security">An ninh quốc phòng</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="text-14 text-title font-700">
                      Nội dung
                    </label>
                    <div className="mt-1">
                      <textarea
                        className="form-control"
                        autoComplete="off"
                        rows="4"
                        placeholder="Nhập lời nhắn..."
                        name="content"
                        value=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div id="g-recaptcha"></div>
                  </div>
                  <div className="form-group mt-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        checked=""
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        style={{ accentColor: "#6338ce" }}
                      />
                      <label
                        className="form-check-label text-14 text-title "
                        htmlFor="agreeTerms"
                      >
                        Tôi đồng ý với{" "}
                        <a
                          className="text-14 font-500 text-decoration-none text-primary font-700"
                          href="https://vnsocial.vnpt.vn/term-of-use?vi"
                        >
                          Điều khoản sử dụng
                        </a>
                        và{" "}
                        <a
                          className="text-14 font-500 text-decoration-none text-primary font-700"
                          href="https://vnsocial.vnpt.vn/policy?vi"
                        >
                          Chính sách bảo mật
                        </a>{" "}
                        của VNPT
                      </label>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      id="start_send_message"
                      className="btn w-100 bg-primary text-14 font-700 text-white rounded"
                    >
                      Gửi lời nhắn
                    </button>
                  </div>
                  <input
                    type="hidden"
                    name="g-recaptcha-response"
                    value="03AFcWeA6D9DKrdceGjbNCz-S5Oaf_sqbaYPWFMoIFfKT1est6DN3XrMRx3mUZELZ8yUSmy40Mc-stwCJbRZWaiwSwCwwdETxY3C-danR5vcxIthQCzYARhcYkOmfYUaDfZugrZ27URMF5c0DHrJmz3uhlkEyo2AvxuPO6M1n-LixIi6J7l6tUp6vg-c_dRwaN0j0gmYXm8lKKSgU-0tj1A6Nl72MfLaaTCZoU_FhoQZpYuMqhURLL_wMGe1kSwiCTfREWGMQU9jfxDCjxakhDSlDIE9QuGYvhpT66NHH1SAtJYeRc4mr-UiE1nO71gy5wWgtaDw7Yoi3nmyBNJnt_3tbt0vXieV2sCp5TKPWAtqzATYNWuCmtGeeWjN76Ynxn2d9Kj_NvMHK36nm8VWQZ6_avT0NbUzYrHfnmPpCZy-6r3OgS7yPRp2fN5L7Hn-xMjzYH14quP3S8yKUlY1zT9KhzvJzlL8Umn03GH4LGErhMMS2IRJ_YVh7xbqTxqCdnSzMpHbWLAN5M_5VW5x4clQqE9YJYKMibgQERs6jKW41bMpzazAYVI-AfAVG5F5dG1KwmiO3hxrAY"
                  />
                  <input type="hidden" name="proengsoft_jsvalidation" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
