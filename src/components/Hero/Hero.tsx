import "./Hero.css";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { TfiAngleRight } from "react-icons/tfi";
import { SocialIcon, AnimatedText, RadialParticles } from "../Micros";
import { motion } from "framer-motion";
import { Particles } from "..";
import { useRef } from "react";

export default function Hero() {
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

  const buttonParticlesRef = useRef();

  return (
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
        <RadialParticles/>
        <motion.button
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{
            opacity: 1,
            y: "0%",
            transition: {
              delay:
                contents.reduce((acc, curr) => acc + curr.length, 0) * 0.03,
            },
          }}
          whileHover={{
            backgroundColor: "white",
            border: "2px solid black",
            color: "black",
            transition: { delay: 0 },
          }}
          onMouseEnter={() => {}}
        >
          Get Started
        </motion.button>
      </div>
      <motion.p
        initial={{ opacity: 0, x: "-20%", y: "20%" }}
        whileInView={{ opacity: 1, x: "0", y: "0" }}
        className="pg-number"
      >
        01
      </motion.p>
      <div className="indicator upper">
        <AnimatedText text="Next Page" delay={0} slow cursor={false} />
        <motion.div
          initial={{ opacity: "0%" }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          animate={{
            x: ["0%", "4%", "0%"],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <TfiAngleRight />
        </motion.div>
      </div>
      <Particles />
    </main>
  );
}
