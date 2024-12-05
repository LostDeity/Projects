import "./Footer.scss";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footerChild"} />
      <div className={"bottom"}>
        <div className={"social"}>
          <a href="https://www.instagram.com/_moos92?igsh=eDdjaTVpNmVtam9w&utm_source=qr">
            <img
              className={"instagramNegative"}
              alt=""
              src="/images/instagram-negative.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/moosa-g-648062157?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <img
              className={"linkedinNegative"}
              alt=""
              src="/images/linked-in-negative.svg"
            />
          </a>
        </div>
        <div className={"ssstaffingAll"}>
          © 2024 SSSTAFFING | All rights reserved.
        </div>
      </div>
      <div className={"line"} />
      <div className={"menu8"}>
        <a href={"#Home"} className={"home2"}>
          Home
        </a>
        <a href={"#About"} className={"home2"}>
          About us
        </a>
        <a href={"#Projects"} className={"home2"}>
          Projects
        </a>
        <a href={"#Services"} className={"home2"}>
          services
        </a>
        <a href={"#Our Team"} className={"home2"}>
          Our Team
        </a>
        <a href={"#Clients"} className={"home2"}>
          Clients
        </a>
        <a href={"#Contact"} className={"contactUs1"}>
          <span className={"contact3"}>{`Contact`}</span> us
        </a>
      </div>
    </div>
  );
};

export default Footer;
