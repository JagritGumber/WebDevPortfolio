import { UseInViewOptions } from "framer-motion";
import React, { DOMAttributes, RefObject } from "react";

declare module "framer-motion" {
  type PrimitiveMotionValue = number | string | number[] | string[];
  type NestedMotionValue = {
    [key: string]: PrimitiveMotionValue | NestedMotionValue;
  };
  type MotionValue = PrimitiveMotionValue | NestedMotionValue;

  interface TransitionProps {
    duration?: number;
    delay?: number;
    ease?: string | number[];
    repeat?: number;
    repeatType?: string;
    repeatDelay?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    velocity?: number;
    times?: number[];
    delayChildren?: number;
    staggerChildren?: number;
    when?: string | boolean;
  }

  interface MotionProps extends DOMAttributes<T> {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    initial?: string | Record<string, MotionValue>;
    animate?: string | Record<string, MotionValue>;
    exit?: string | Record<string, MotionValue>;
    href?: string;
    target?: string;
    transition?: TransitionProps;
    variants?: {
      [key: string]: {
        [key: string]: MotionValue | TransitionProps;
      };
    };
  }
}
