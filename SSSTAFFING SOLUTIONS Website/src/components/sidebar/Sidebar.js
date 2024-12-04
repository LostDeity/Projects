import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import ToggleButton from "./togglebutton/ToggleButton";
import Links from "./links/Links";


const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40,
        }
    },
    closed: {
        clipPath: "circle(20px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

const Sidebar = () => {

    const [open, setOpen] = useState(false);



    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
