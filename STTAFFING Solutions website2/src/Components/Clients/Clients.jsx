import { useState } from "react";
import "./Clients.scss";

const starArray = [
  { id: 1, src: "/images/star.svg", title: "Star 1" },
  { id: 2, src: "/images/star.svg", title: "Star 1" },
  { id: 3, src: "/images/star.svg", title: "Star 1" },
  { id: 4, src: "/images/star.svg", title: "Star 1" },
  { id: 5, src: "/images/star.svg", title: "Star 1" },
];

const stars = ({ count }) => {
  const displayedItems = starArray.slice(0, count);
  return (
    <ul className={"vectorParent"}>
      {displayedItems.map((item) => (
        <li key={item.id}>
          <img className={"vectorIcon10"} alt={item.title} src={item.src} />
          <p>Test</p>
        </li>
      ))}
    </ul>
  );
};

const Clients = () => {
  const clientInformation = [
    {
      clientName: "",
      clientPosition: "",
      clientExperience:
        "Unofficially placed and participated in the successful permanent employment of many individuals hence the absence inspiration to formalise the process",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientInformation.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + clientInformation.length) % clientInformation.length
    );
  };

  return (
    <div className={"clients1"}>
      <img
        className={"clayPurple00381Icon4"}
        alt=""
        src="/images/clay-purple-00381.png"
      />
      <img
        className={"clayPurple00382Icon1"}
        alt=""
        src="/images/clay-purple-00382.png"
      />
      <img
        className={"clayPurple00401Icon3"}
        alt=""
        src="/images/clay-purple-00401.png"
      />
      <img className={"icon3"} alt="" src="/images/background.png" />
      <div className={"homeChild"} />
      <div className={"pageNumber3"}>
        <div className={"pageNumberInner1"}>
          <div className={"pageNumberInner1"}>
            <div className={"pageNumberInner1"}>
              <b className={"b"}>06</b>
            </div>
          </div>
        </div>
      </div>
      <div className={"clientsInner"}>
        {clientInformation.map((client, index) => (
          <div className={"groupParent1"}>
            <div className={"rectangleWrapper"}>
              <div className={"groupChild"} />
            </div>
            <button onClick={prevSlide} className={"vectorContainer"}>
              <img className={"vectorIcon9"} alt="" src="/images/Vector.svg" />
            </button>
            <div className={"jimDoeParent"}>
              <b className={"jimDoe"}>{client.clientName}</b>
              <div className={"managingDirector4"}>{client.clientPosition}</div>
            </div>
            {/* <div className={"ellipseParent"}>
            <div className={"frameChild"} />
            <div className={"frameItem"} />
            <div className={"frameChild"} />
          </div> */}
            <stars count={client.rating} />
            <div className={"ourExperienceWith"}>{client.clientExperience}</div>
            <button onClick={nextSlide} className={"vectorFrame"}>
              <img className={"vectorIcon"} alt="" src="/images/Vector.svg" />
            </button>
          </div>
        ))}
      </div>
      <div className={"haeder2"}>
        <span className={"span"}>{`What `}</span>
        <span className={"ourClients"}>our clients</span>
        <span className={"span"}>
          <span> say</span>
          <span className={"span1"}>{` `}</span>
        </span>
      </div>
      <div className={"clientsParent"}>
        <div className={"aboutUs"}>CLIENTS</div>
        <div className={"border"}>
          <div className={"fill"} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
