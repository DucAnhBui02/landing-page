"use client";
import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section className="bg-section pb-5">
        <div className="bg-opacity-2 pb-5">
          <div className="chatgpt container position-relative">
            <div className="row align-items-center">
              <div className="col-lg-6 col-xs-6 order-md-1 order-2">
                <Image
                  src="/ChatGPT_image.png"
                  className="img-fluid"
                  alt="ChatGPT"
                  width={546}
                  height={386}
                />
              </div>
              <div className="col-lg-6 col-xs-6 order-md-2 order-1">
                <h1 className="text-title font-700 text-46">
                  Chat GPT nói gì về <br /> chúng tôi?
                </h1>
                <p className="text-18 text-neutral-2 mt-3 mb-4">
                  ChatGPT, một trong những từ khóa “Hot” nhất cộng đồng công
                  nghệ thế giới hiện nay nói gì về các dịch vụ cung cấp của
                  VnSocial
                </p>
                <a className="text-18 text-primary text-decoration-none font-700">
                  Tìm hiểu ngay
                  <Image
                    src="/right-up.svg"
                    className="img-fluid"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
