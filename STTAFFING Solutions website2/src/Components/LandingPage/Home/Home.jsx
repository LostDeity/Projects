import React from "react";
import { motion, stagger } from "framer-motion";
import "./Home.scss";

const Home = (props) => {
  const textVariants = {
    initial: {
      x: 2000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    animateblock1: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 0,
      },
    },
    animatearrow1: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 1,
      },
    },
    animateblock2: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 2,
      },
    },
    animatearrow2: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 3,
      },
    },
    animateblock3: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 4,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    ballFloat: {
      y: ["0%", "-1.5%", "0%"],
      transition: {
        duration: 2, // Duration of the animation
        ease: "easeInOut", // Easing function
        repeat: Infinity, // Repeat indefinitely
        repeatType: "loop", // Loop the animation
      },
    },
  };

  return (
    <div className={"home"}>
      <div className={"homeChild"} />
      <motion.img
        className={"icon1"}
        alt=""
        src="/images/purpleball.png"
        variants={textVariants}
        animate="ballFloat"
      />
      <div className={"headerContentParent"}>
        <div className={"headerContent"}>
          <div className={"headerText"}>
            <p
              className={"atSsstaffingWeP"}
            >{`At SSStaffing, we match top talent with exceptional opportunities. `}</p>
            <p className={"atSsstaffingWeP"}>
              Whether you’re hiring or job hunting, our expert team delivers
            </p>
            <p className={"atSsstaffingWeP"}>the perfect fit, fast.</p>
          </div>
          <div className={"button"}>
            <a href="#Projects" className={"latestProjects"}>
              LATEST PROJECTS
            </a>
          </div>
        </div>
        <div className={"header"}>
          <div className={"staffingSolutionsMadeContainer"}>
            <p className={"atSsstaffingWe"}>
              <span className={"staffingSolutions1"}>
                <span className={"staffingSolutions2"}>Staffing solutions</span>
                <span className={"span"}>{` `}</span>
              </span>
            </p>
            <p className={"atSsstaffingWe"}>
              <span className={"span"}>
                <span>Made Simple.</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={"pageNumberWrapper"}>
        <div className={"pageNumber"}>
          <div className={"pageNumber"}>
            <div className={"pageNumber"}>
              <b className={"b"}>01</b>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={"bg"}
        variants={textVariants}
        initial="initial"
        animate="animateblock1"
      />
      <motion.div
        className={"bg1"}
        variants={textVariants}
        initial="initial"
        animate="animateblock2"
      />
      <motion.div
        className={"bg2"}
        variants={textVariants}
        initial="initial"
        animate="animateblock3"
      />
      <motion.div
        className={"headerText1"}
        variants={textVariants}
        initial="initial"
        animate="animateblock1"
      >
        <ul className={"defineAndSource"}>
          <li>Define and source</li>
        </ul>
      </motion.div>
      <motion.div
        className={"headerText2"}
        variants={textVariants}
        initial="initial"
        animate="animateblock2"
      >
        <ul className={"defineAndSource"}>
          <li key={2}>Evaluate and select</li>
        </ul>
      </motion.div>
      <motion.div
        className={"headerText3"}
        variants={textVariants}
        initial="initial"
        animate="animateblock3"
      >
        <ul className={"defineAndSource"}>
          <li key={3}>Offer and onboard</li>
        </ul>
      </motion.div>
      <motion.img
        className={"homeItem"}
        alt=""
        src="/images/vector-3.svg"
        variants={textVariants}
        initial="initial"
        animate="animatearrow1"
      />
      <motion.img
        className={"homeInner"}
        alt=""
        src="/images/vector-4.svg"
        variants={textVariants}
        initial="initial"
        animate="animatearrow2"
      />
      <a href="#About" className="aboutIcon">
        <motion.img
          className={"circleCarretDownIcon"}
          alt=""
          src="/images/circle-carret-down.svg"
          variants={textVariants}
          animate="scrollButton"
        />
      </a>
    </div>
  );
};

export default Home;
