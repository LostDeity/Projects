import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "Sourcing Candidates",
        img: "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "We diligently identify and attract top talent, ensuring the perfect match for your organization."
    },
    {
        id: 2,
        title: "Vetting & Assessments",
        img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Our rigorous screening process includes detailed assessments and evaluations to guarantee candidate suitability."
    },
    {
        id: 3,
        title: "Interview Coordination",
        img: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "We streamline the interview process, making it efficient and convenient for all parties involved."
    },
    {
        id: 4,
        title: "Reference Checks",
        img: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "We conduct through reference checks to verify qualifications and background of every candidate."
    },
    {
        id: 5,
        title: "Onboarding Support",
        img: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Our commitment extends beyond the hire.
                        We provide ongoing support to both the company
                        and the candidate during the onboarding
                        period and beyond, fostering a smooth transition and
                        ensuring long-term success. SSStaffing solutions is dedicated to
                        bridging the gap between exceptional talent and
                        forward-thinking companies. Let us partner with you
                        to build a robust and capable team that
                        drives your business forward.`
    }
]


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href="#Contact Us">Find Out More</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],

    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Companies We've Worked With</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
