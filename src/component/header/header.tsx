import { TabProps } from "../../App";
import "./header.css";
import { motion } from "framer-motion";

const Header = ({
  setTab,
  tab,
}: {
  setTab: (d: TabProps) => void;
  tab: TabProps;
}) => {
  const border = {
    initial: { opacity: 0 },
    hover: { opacity: 100, transition: { duration: 1.5 } },
  };

  return (
    <header className="header">
      <p className="rock-salt-regular main-head" onClick={() => setTab("home")}>
        Pria Admaja
      </p>
      <section className="menu-group ">
        <motion.div
          className={`menu-header ${
            tab === "profile" ? "menu-header-active" : ""
          }`}
          initial='initial'
          whileHover="hover"
          onClick={() => setTab("profile")}
        >
          <motion.div
            className={`left-border ${tab === "profile" ? "border-show" : ""}`}
            variants={border}
          />
          <p>ABOUT ME</p>
          <motion.div
            className={`right-border ${tab === "profile" ? "border-show" : ""}`}
            variants={border}
          />
        </motion.div>
        <motion.div
          className={`menu-header`}
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className={`left-border ${
              tab === "experience" ? "border-shoe" : ""
            }`}
            variants={border}
          />
          <p>EXPERIENCE</p>
          <motion.div
            className={`right-border ${
              tab === "experience" ? "border-shoe" : ""
            }`}
            variants={border}
          />
        </motion.div>
        <motion.div
          className="menu-header"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className={`left-border ${tab === "project" ? "border-shoe" : ""}`}
            variants={border}
          />
          <p>PROJECT</p>
          <motion.div
            className={`right-border ${tab === "project" ? "border-shoe" : ""}`}
            variants={border}
          />
        </motion.div>
        <motion.div
          className="menu-header"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className={`left-border ${tab === "contact" ? "border-shoe" : ""}`}
            variants={border}
          />
          <p>CONTACT</p>
          <motion.div
            className={`right-border ${tab === "contact" ? "border-shoe" : ""}`}
            variants={border}
          />
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
