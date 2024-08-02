import "./Navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div id="navbar">
      <motion.span
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0" }}
        className="name"
      >
        Jagrit Gumber
      </motion.span>
      <ul>
        <motion.li
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.3 }}
        >
          About
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.6 }}
        >
          Projects
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.9 }}
        >
          Contact
        </motion.li>
      </ul>
    </div>
  );
}
