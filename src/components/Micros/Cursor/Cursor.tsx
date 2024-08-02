import { motion } from "framer-motion";
import "./Cursor.css";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function Cursor({
  size,
  hidden,
  blink,
}: {
  size: number;
  hidden: boolean;
  blink: boolean;
}) {
  return (
    <motion.div
      variants={cursorVariants}
      animate={blink ? "blinking" : ""}
      className={`${
        hidden
          ? "hidden cursor"
          : size === 2
          ? "big cursor"
          : size === 1
          ? "mid cursor"
          : "cursor"
      }`}
    />
  );
}
