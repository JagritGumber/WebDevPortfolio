import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <div id="navbar">
      <motion.span
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0" }}
        className="name"
      >
        Jagrit Gumber
      </motion.span>

      <ul className={isMenuOpen ? "active" : ""}>
        <motion.li
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.3 }}
          onClick={() => scrollToSection("about")}
        >
          About
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.6 }}
          onClick={() => scrollToSection("someprojects")}
        >
          Projects
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.9 }}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </motion.li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
