import "./Hero.css";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { TfiAngleDown } from "react-icons/tfi";
import { SocialIcon, AnimatedText } from "../Micros";
import { motion } from "framer-motion";
import { Particles } from "..";
import { useAppDispatch } from "../../state";
import { useEffect } from "react";
import { initParticles } from "../../state/features";

export default function Hero() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initParticles());
  }, [dispatch]);
  const contents = [
    "Hi, I'm a",
    "Web Developer",
    "Developer to the rescue",
    "Painting your Ideas to",
    "the Digital World",
  ];
  const classNames = ["normal", "strong", "normal upper", "light", "light"];
  const icons = [
    {
      link: "https://x.com/Jagrit_Gumber",
      icon: <FaXTwitter size={32} />,
    },
    {
      link: "https://github.com/JagritGumber",
      icon: <FaGithub size={32} />,
    },
    {
      link: "https://www.linkedin.com/in/jagrit-gumber-2841a52a9/",
      icon: <FaLinkedin size={32} />,
    },
  ];

  return (
    <>
      <main id="hero">
        <div className="socials">
          {icons.map((icon, index) => (
            <SocialIcon key={index} link={icon.link} delay={index * 0.2}>
              {icon.icon}
            </SocialIcon>
          ))}
        </div>
        <div className="content">
          {contents.map((text, index) => {
            const delay =
              contents
                .slice(0, index)
                .reduce((acc, curr) => acc + curr.length, 0) * 0.03;
            return (
              <AnimatedText
                key={index}
                text={text}
                delay={delay}
                className={classNames[index]}
                cursorSize={index === 1 ? 1 : 0}
                hideCursor={index !== contents.length - 1}
              />
            );
          })}
          <motion.button
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{
              opacity: 1,
              y: "0%",
              transition: {
                delay: 1,
              },
            }}
            whileHover={{
              backgroundColor: "rgb(255, 255, 255)",
              border: "2px solid rgb(0, 0, 0)",
              color: "rgb(0, 0, 0)",
              transition: { delay: 0 },
            }}
            onClick={() => {
              const about = document.getElementById("about");
              about?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Get Started
          </motion.button>
        </div>
        <motion.p
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: "-20%", y: "20%" }}
          whileInView={{ opacity: 1, x: "0", y: "0" }}
          className="pg-number"
        >
          01
        </motion.p>
        <div className="indicator upper">
          <AnimatedText text="Scroll Down" delay={0} slow cursor={false} />
          <motion.button
            viewport={{ once: true, amount: 0.5 }}
            style={{
              width: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: 1,
              borderRadius: "50%",
              marginRight: -4,
              backgroundColor: "#fff",
              color: "#000",
            }}
            whileHover={{
              backgroundColor: "#d9d9d9",
            }}
            initial={{ opacity: "0%" }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            animate={{
              y: ["0%", "40%", "0%"],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            onClick={() => {
              const about = document.getElementById("about");
              about?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <TfiAngleDown />
          </motion.button>
        </div>
      </main>
      <Particles />
    </>
  );
}
