import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./ProgressBar.css";

interface ProgressBarProps {
  skill: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage }) => {
  const controls = useAnimation();
  const ref = useRef<Element | null>(null);
  const inView = useInView(ref, {
    triggerOnce: true, // Animation triggers only once when it comes into view
    threshold: 0.1, // Percentage of the element that needs to be visible to trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${percentage}%` });
    }
  }, [controls, inView, percentage]);

  return (
    <div className="progress-bar-container" ref={ref}>
      <div className="skill-name">{skill}</div>
      <div className="bar-wrapper">
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "linear" }}
        ></motion.div>
        <div className="percentage-label" style={{ left: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
