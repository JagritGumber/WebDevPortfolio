import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { TypingCursor } from "..";

type AnimatedTextProps = {
  text: string;
  delay: number; // Add a delay prop to stagger the animation
  className?: string;
  slow?: boolean;
  hideCursor?: boolean;
  cursorSize?: number;
  cursor?: boolean;
};

export default function AnimatedText({
  text,
  delay,
  className,
  slow = false,
  hideCursor = true,
  cursor = true,
  cursorSize = 0,
}: AnimatedTextProps) {
  const count = useMotionValue(0);
  const [displayText, setDisplayText] = useState(" "); // Initialize with empty string
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const controls = animate(count, text.length, {
        type: "tween",
        duration: !slow ? text.length * 0.03 : text.length * 0.06,
        ease: "linear",
        onUpdate: (latest) => {
          setDisplayText(text.slice(0, Math.round(latest)));
          if (text.length === latest) {
            setAnimationCompleted(true);
          }
        },
      });
      return controls.stop;
    }, delay * 1000); // Wait for delay before starting animation
    return () => clearTimeout(timer);
  }, [delay, text]); // Add delay and text to the dependency array

  return (
    <motion.span className={className}>
      {displayText || <>&nbsp;</>}{" "}
      {cursor && (
        <TypingCursor
          size={cursorSize}
          hidden={(hideCursor && animationCompleted) || displayText === " "}
          blink={animationCompleted}
        />
      )}
    </motion.span>
  );
}
