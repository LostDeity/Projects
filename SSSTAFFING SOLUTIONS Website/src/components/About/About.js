import React, { useRef } from "react";
import "./About.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const About = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (

        <div className="about">
            <div className="wrapper">
                <motion.div className="textContainer" style={{ y }} >
                    <h2>About Us</h2>
                    <p>
                        SSStaffing Solutions specializes in bespoke, end-to-end
                        staffing solutions designed to meet unique business needs.
                        Our comprehensive services encompass every step of the hiring process,
                        ensuring a seamless experience for both companies and candidates.
                    </p>
                </motion.div>
                <div className="imageContainer" ref={ref}>
                    <img src="/pictures/about.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default About;
