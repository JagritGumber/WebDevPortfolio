import "./SocialIcon.css";
import { motion } from "framer-motion";

export default function SocialIcon({
  link,
  children,
  delay,
}: {
  link: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.a
      initial={{ x: -100 }} // off-screen position
      animate={{ x: 0 }} // final position
      transition={{ duration: 0.3, delay: delay }}
      className="social-icon"
      href={link}
      target="_blank"
    >
      {children}
    </motion.a>
  );
}
