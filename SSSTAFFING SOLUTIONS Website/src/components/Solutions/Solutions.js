import { useRef } from "react";
import "./Solutions.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Solutions = () => {


    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="solutions"
            variants={variants}
            initial="initial"
            // animate="animate"
            //whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>Lorem ipsum dolor sit amet consectetur <br />  adipisicing elit.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/pictures/TestImageHero.jpg" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "black" }}>Connecting</motion.b> People
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "black" }}>With</motion.b> Business.
                    </h1>
                    <button>Who've we worked with?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "rgb(19,5,30)", color: "rgb(145,124,180)" }}>
                    <h2>Condor Green</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ullam sapiente, commodi ea consequatur dignissimos numquam eum,
                        aperiam nesciunt, fuga dolorem hic corrupti deleniti quis perferendis? Minus culpa error maxime?
                    </p>
                    <button>Company Website</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "rgb(19,5,30)", color: "rgb(145,124,180)" }} >
                    <h2>Bayport Financial</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ullam sapiente, commodi ea consequatur dignissimos numquam eum,
                        aperiam nesciunt, fuga dolorem hic corrupti deleniti quis perferendis? Minus culpa error maxime?
                    </p>
                    <button>Company Website</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "rgb(19,5,30)", color: "rgb(145,124,180)" }}>
                    <h2>Technology Company 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ullam sapiente, commodi ea consequatur dignissimos numquam eum,
                        aperiam nesciunt, fuga dolorem hic corrupti deleniti quis perferendis? Minus culpa error maxime?
                    </p>
                    <button>Company Website</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "rgb(19,5,30)", color: "rgb(145,124,180)" }}>
                    <h2>Another Company 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ullam sapiente, commodi ea consequatur dignissimos numquam eum,
                        aperiam nesciunt, fuga dolorem hic corrupti deleniti quis perferendis? Minus culpa error maxime?
                    </p>
                    <button>Company Website</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Solutions;
