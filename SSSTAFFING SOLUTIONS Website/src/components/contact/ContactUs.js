import React, { useRef, useState } from "react";
import "./ContactUs.scss"
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        },
    }
}

const ContactUs = () => {
    const ref = useRef();
    const formRef = useRef();
    const serviceId = "service_10harai";
    const templateId = "template_e86ti8w";
    const publickKeyId = "J462zSvB18-uAe6gk";
    const isInView = useInView(ref, { margin: "-100px" });

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, formRef.current, {
                publicKey: publickKeyId,
            })
            .then(
                (result) => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                },
            );
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate" ref={ref} >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}> Get in touch with us</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>raabia@ssstaffing.co.za</span>
                    <br></br>
                    <span>moosag@ssstaffing.co.za</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>3 Alice Park Lane,Sandton, 2196</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+27 69 602 7370</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="emailSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
                    <svg width="500px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0000">
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <motion.path strokeWidth={0.2} fill="none" initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1 }} transition={{ duration: 3 }} d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#D6C5EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                    </svg>
                </motion.div>
                <motion.form onSubmit={sendEmail} ref={formRef} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }} >
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea placeholder="Message" rows={8} name="message" />
                    <button>Submit</button>
                    {error && "Error!"}
                    {success && "We'll be in Contact with you soon!"}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default ContactUs;
