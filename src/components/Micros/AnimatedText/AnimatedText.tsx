import { motion, useMotionValue, animate } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { TypingCursor } from "..";

type AnimatedTextProps = {
  text: string;
  delay: number; // Add a delay prop to stagger the animation
  className?: string;
  slow?: boolean;
  fast?: boolean;
  hideCursor?: boolean;
  cursorSize?: number;
  cursor?: boolean;
  as?: React.ElementType;
};

export default function AnimatedText({
  text,
  delay,
  className,
  slow = false,
  fast = false,
  hideCursor = true,
  cursor = true,
  cursorSize = 0,
  as,
}: AnimatedTextProps) {
  const count = useMotionValue(0);
  const [displayText, setDisplayText] = useState(" "); // Initialize with empty string
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(count, text.length, {
          type: "tween",
          duration: !slow
            ? !fast
              ? text.length * 0.03
              : text.length * 0.005
            : text.length * 0.06,
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
    }
  }, [isInView, delay, text, slow]);

  const Component = as ? `motion.${as}` : motion.span;

  return (
    <Component className={className} ref={ref}>
      {displayText || <>&nbsp;</>}
      {cursor && !hideCursor && (
        <TypingCursor
          size={cursorSize}
          hidden={(hideCursor && animationCompleted) || displayText === " "}
          blink={animationCompleted}
        />
      )}
    </Component>
  );
}
