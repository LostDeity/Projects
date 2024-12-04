import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "500%"]
    );
    const yBg = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"]
    );


    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background: type === "Solutions"
                    ? "linear-gradient(180deg,  #3e3049, #13051e)"
                    : "linear-gradient(180deg,#13051e  ,#3e3049)"
            }}>
            <motion.h1 style={{ y: yText }}>{type === "Solutions" ? "What We Offer?" : "Work We've Done ?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${type === "Solutions" ? require("./planets.png") : require("./sun.png")})`
                }}
            ></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;
