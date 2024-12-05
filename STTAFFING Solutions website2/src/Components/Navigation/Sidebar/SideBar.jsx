import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SideBar.scss";
import Links from "./Links/Links";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar">
      <Links />
    </motion.div>
  );
};

export default Sidebar;
