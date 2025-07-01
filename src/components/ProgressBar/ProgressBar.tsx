import { motion } from "framer-motion";
import "./ProgressBar.css";

interface ProgressBarProps {
  skill: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="skill-name">{skill}</div>
      <div className="bar-wrapper">
        <motion.div
          viewport={{ once: true }}
          className="progress-bar"
          initial={{ width: 0 }}
          whileInView={{
            width: `${percentage}%`,
          }}
          transition={{ duration: 0.5, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="percentage-label"
          viewport={{ once: true }}
          initial={{ left: "0%" }}
          whileInView={{
            left: `${percentage}%`,
          }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {percentage}%
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
