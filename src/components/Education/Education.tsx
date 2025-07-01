import "./Education.css";
import { motion } from "framer-motion"; // Import motion for animations
import { FaSchool, FaCode, FaBook } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Frontend Engineer",
      years: "2024 - Ongoing",
      institution: "Algo One AI",
      description:
        "Working as a Fullstack Engineer, confirmed by our manager I do play a part in every thing there is to do in that project.",
      icon: FaCode,
    },
    {
      title: "Graduation",
      years: "2023 - Ongoing",
      institution: "Indira Gandhi National Open University",
      description:
        "Currently pursuing BCA degree from Indira Gandhi National Open University, focusing on skills applicable to the software development industry.",
      icon: FaSchool,
    },
    {
      title: "Schooling",
      years: "2011 - 2023",
      institution: "Goodley Public School",
      description:
        "Completed my schooling through Central Board Of Secondary Education at Goodley Public School, Shalimar Bagh - Delhi.",
      icon: FaBook,
    },
  ];

  return (
    <section id="education">
      <div className="education-header">
        <h2 className="education-resume">RESUME</h2>
        <h2 className="education-credentials">More of my Credentials</h2>
        <h3 className="education-title">Education</h3>
      </div>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Add animation delay based on index
            viewport={{ once: true, amount: 0.5 }} // Animate when 50% of item is visible
          >
            <div className="timeline-left">
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-years">{item.years}</p>
            </div>
            <div className="timeline-center">
              <div className="timeline-icon">
                <item.icon />
              </div>
            </div>
            <div className="timeline-right">
              <h4 className="timeline-institution">{item.institution}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
