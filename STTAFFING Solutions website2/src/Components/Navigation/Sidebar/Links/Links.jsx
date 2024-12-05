import { motion } from "framer-motion";
import "./Links.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Home",
    "About",
    "Projects",
    "Services",
    "Our Team",
    "Clients",
    "Contact",
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div className="menu1">
          <motion.a
            href={`#${item}`}
            key={item}
            className={"about"}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
