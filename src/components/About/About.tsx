import { AnimatedText } from "../Micros";
import "./About.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { motion } from "framer-motion";

// Function to calculate age
function calculateAge(birthdate: Date): string {
  const today = new Date();
  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += prevMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years, ${months} months, ${days} days`;
}

export default function About() {
  const birthDate = new Date("2005-08-18");
  const dynamicAge = calculateAge(birthDate);

  return (
    <section id="about">
      <AnimatedText
        delay={0}
        as={"h2"}
        text="About Me"
        hideCursor
        className="about upper h2"
      />
      <AnimatedText
        delay={0}
        as={"h3"}
        text="Let me introduce myself."
        className="about h3"
      ></AnimatedText>
      <div className="profile header">
        <div className="userimage">
          <img src="/myImage.jpeg" alt="Jagrit Gumber Profile Pic" />
        </div>
        <AnimatedText
          delay={0}
          as={"span"}
          text="Creativity is allowing yourself to make mistakes, Art is knowing which
          ones to keep"
          className="text"
        ></AnimatedText>
      </div>
      <div className="profile content">
        <div className="left">
          <AnimatedText
            delay={0}
            as={"h4"}
            text="Profile"
            className="upper h4"
          />
          <AnimatedText
            delay={0}
            as={"p"}
            text="Hello, I'm Jagrit Gumber, a passionate Full-Stack Web Developer currently pursuing my BCA. I specialize in transforming innovative ideas into robust and engaging web applications. My expertise lies in crafting dynamic user interfaces with React and Next.js, and building powerful, scalable backends with Node.js and TypeScript"
            className="p bottom-pad"
            fast
          />
          <AnimatedText delay={0} as={"h5"} text="Full Name" className="h5" />
          <AnimatedText
            delay={0}
            as={"p"}
            text="Jagrit Gumber"
            className="p bottom-pad"
          />
          <AnimatedText delay={0} as={"h5"} text="Age" className="h5" />
          <AnimatedText delay={0} as={"p"} text={dynamicAge} className="p" />
        </div>
        <div className="right">
          <AnimatedText
            delay={0}
            as={"h4"}
            text="Skills"
            className="upper h4"
          />

          <AnimatedText delay={0} as={"h5"} text="Languages" className="h5" />
          <AnimatedText
            delay={0}
            as={"p"}
            text="English: Read, Write, Speak"
            className="p"
          />
          <AnimatedText
            delay={0}
            as={"p"}
            text="Hindi: Read, Write, Speak, Mother Tongue"
            className="p"
          />

          <ProgressBar skill="TypeScript" percentage={85} />
          <ProgressBar skill="NodeJS" percentage={95} />
          <ProgressBar skill="NextJS" percentage={85} />
          <ProgressBar skill="React" percentage={90} />
          <ProgressBar skill="SQL" percentage={80} />
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{
          opacity: 1,
          y: "0%",
          transition: {
            delay: 0,
          },
        }}
        whileHover={{
          backgroundColor: "rgb(255, 255, 255)",
          border: "2px solid rgb(0, 0, 0)",
          color: "rgb(0, 0, 0)",
          transition: { delay: 0 },
        }}
      >
        Hire Me
      </motion.button>
    </section>
  );
}
