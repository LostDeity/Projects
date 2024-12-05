import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";

const ContactUs = () => {
  const formRef = useRef();
  const serviceId = "service_ufid0o5";
  const templateId = "template_oivo0p6";
  const publickKeyId = "GRLAhoVrvOzDBzApI";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, formData, publickKeyId).then(
      (response) => {
        alert("We will be in touch!");
        console.log(response);
        formRef.current.reset();
      },
      (error) => {
        alert("An error occured please try again later");
        console.log(error);
      }
    );

    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={"contact1"}>
      <img
        className={"clayPurple00471Icon2"}
        alt=""
        src="/images/clay-purple-00471.png"
      />
      <img
        className={"clayPurple00323Icon"}
        alt=""
        src="/images/clay-purple-00323.png"
      />
      <img className={"icon3"} alt="" src="/images/background.png" />
      <div className={"homeChild"} />
      <div className={"contactInner"}>
        <div className={"groupWrapper3"}>
          <div className={"groupWrapper3"}>
            <div className={"groupWrapper3"}>
              <b className={"b"}>07</b>
            </div>
          </div>
        </div>
      </div>
      <div className={"contactInner1"}>
        <div className={"groupItem"} />
      </div>
      <div className={"column"}>
        <div className={"heading"}>
          <div className={"wedLoveToContainer"}>
            <span className={"span"}>{`We’d love to hear `}</span>
            <span className={"fromYou"}>from you</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={"form"}>
          <div className={"fullName"}>
            <div className={"textfield"}>
              <div className={"fullName1"}>FULL NAME</div>
              <div className={"textfield1"}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  name="name"
                  className={"yourName"}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={"select"} />
          </div>
          <div className={"fullName"}>
            <div className={"textfield"}>
              <div className={"fullName1"}>EMAIL ADDRESS</div>
              <div className={"textfield1"}>
                <input
                  className={"yourName"}
                  type="email"
                  required
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={"select"} />
          </div>
          <div className={"heading"}>
            <div className={"textarea"}>
              <div className={"fullName1"}>MESSAGE</div>
              <div className={"textfield5"}>
                <textarea
                  placeholder="Send us a message"
                  rows={8}
                  name="message"
                  className={"yourNameTextArea"}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className={"button5"}>
            <b className={"latestProjects"}>SUBMIT</b>
          </button>
        </form>
      </div>
      <div className={"column1"} />
      <div className={"getInTouch"}>
        <div className={"heading1"}>
          <div className={"getInTouch1"}>Get in touch</div>
          <div className={"emailUs"}>Email us</div>
        </div>
        <div className={"forProjectInquiriesContainer"}>
          <p className={"atSsstaffingWe"}>
            <b>For project inquiries :</b>
          </p>
          <p className={"atSsstaffingWe"}>moosag@ssstaffing.co.za</p>
          <p className={"atSsstaffingWe"}>raabia@ssstaffing.co.za</p>
        </div>
        <div className={"forProjectInquiriesContainer"}>
          <p className={"atSsstaffingWe"}>
            <b>Drop by our office:</b>
          </p>
          <p className={"atSsstaffingWe"}>3 Alice Lane, Sandton, 2196</p>
        </div>
      </div>
      <div className={"contactParent"}>
        <div className={"contact2"}>{`CONTACT `}</div>
        <div className={"border"}>
          <div className={"fill"} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
