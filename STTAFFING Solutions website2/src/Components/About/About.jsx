import "./About.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  return (
    <div className={"about1"}>
      <div className={"groupParent"}>
        <div className={"groupParent"}>
          <div className={"about2"}>
            <img
              className={"clayPurple00471Icon"}
              alt=""
              src="/images/clay-purple-00471.png"
            />
            <img
              className={"clayPurple00381Icon"}
              alt=""
              src="/images/clay-purple-00381.png"
            />
            <img
              className={"clayPurple00401Icon"}
              alt=""
              src="/images/clay-purple-00401.png"
            />
            <div className={"homeChild"} />
            <div className={"headerText4"}>
              With a focus on integrity and innovation, we strive to make every
              recruitment process seamless and effective. Whether you’re seeking
              your next career move or looking to hire exceptional talent, we’re
              here to help you achieve your goals.
            </div>
            <div className={"header1"}>
              <p className={"atSsstaffingWe"}>
                <span>{`Empowering careers, one `}</span>
                <span className={"connection"}>connection</span>
                <span className={"at"}>{` at `}</span>
              </p>
              <p className={"atSsstaffingWe"}>a time</p>
            </div>
            <div className={"pageNumberContainer"}>
              <div className={"pageNumberChild"}>
                <div className={"pageNumberChild"}>
                  <div className={"pageNumberChild"}>
                    <b className={"b"}>02</b>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={"corinneKutzTmi2R5nfoUnsplIcon"}
              alt=""
              src="/images/corinne-kutz-tMI2_-r5Nfo-unsplash.png"
            />
          </div>
        </div>
        <div className={"aboutUsParent"}>
          <div className={"aboutUs"}>ABOUT US</div>
          <div className={"border"}>
            <div className={"fill"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
