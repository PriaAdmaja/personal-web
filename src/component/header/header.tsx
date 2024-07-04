import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  const border = {
    initial: { opacity: 0 },
    hover: { opacity: 100, transition: { duration: 0.5 } }
  };
  return (
    <header className="header">
      <p className="rock-salt-regular main-head">Pria</p>
      <section className="menu-group ">
        <motion.div
          className="menu-header"
          initial="initial"
          whileHover="hover"
        >
          <motion.div className="left-border" variants={border} />
          <p>ABOUT ME</p>
          <motion.div className="right-border" variants={border} />
        </motion.div>
        <motion.div
          className="menu-header"
          initial="initial"
          whileHover="hover"
        >
          <motion.div className="left-border" variants={border} />
          <p>EXPERIENCE</p>
          <motion.div className="right-border" variants={border} />
        </motion.div>
        <motion.div
          className="menu-header"
          initial="initial"
          whileHover="hover"
        >
          <motion.div className="left-border" variants={border} />
          <p>PROJECTS</p>
          <motion.div className="right-border" variants={border} />
        </motion.div>
        <motion.div
          className="menu-header"
          initial="initial"
          whileHover="hover"
        >
          <motion.div className="left-border" variants={border} />
          <p>CONTACT ME</p>
          <motion.div className="right-border" variants={border} />
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
