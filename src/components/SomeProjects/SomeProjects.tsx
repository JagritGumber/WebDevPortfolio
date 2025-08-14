import "./SomeProjects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTypescript,
  TbSql,
} from "react-icons/tb";

const TechnologyChip = ({ technology }: { technology: string }) => {
  let icon;
  if (technology === "React") {
    icon = <TbBrandReact />;
  } else if (technology === "TypeScript") {
    icon = <TbBrandTypescript />;
  } else if (technology === "JavaScript") {
    icon = <TbBrandJavascript />;
  } else if (technology === "Node.js") {
    icon = <TbBrandNodejs />;
  } else if (technology === "HTML") {
    icon = <TbBrandHtml5 />;
  } else if (technology === "CSS") {
    icon = <TbBrandCss3 />;
  } else if (technology === "SQL") {
    icon = <TbSql />;
  }

  return (
    <div className="technology-chip">
      {icon && <span className="technology-icon">{icon}</span>}
      {technology}
    </div>
  );
};

const SomeProjects = () => {
  const data = [
    {
      text: "Art Box",
      description:
        "Art Box is a captivating online gallery showcasing a diverse collection of stunning artworks. It provides a beautiful and immersive experience for art enthusiasts to explore various styles and mediums, celebrating creativity and visual expression.",
      img: ["/artbox.png"],
      technologies: ["React", "TypeScript", "CSS", "HTML"],
      viewLink: "https://artbox.jagritgumber.com/",
    },
    // {
    //   text: "Project 2",
    //   description: "A brief description of Project 2.",
    //   img: ["/myImage.jpeg", "/myImage.jpeg", "/myImage.jpeg"],
    //   technologies: ["JavaScript", "HTML", "CSS"],
    //   viewLink: "artbox",
    // },
    // {
    //   text: "Project 3",
    //   description: "A brief description of Project 3.",
    //   img: ["/myImage.jpeg", "/myImage.jpeg", "/myImage.jpeg"],
    //   technologies: ["React", "Node.js", "SQL"],
    //   viewLink: "artbox",
    // },
  ];

  return (
    <section id="someprojects">
      {data.map(({ text, description, img, technologies, viewLink }, index) => (
        <motion.div
          className="project-card-root"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project-card-text">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {text}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="technology-chips"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {technologies.map((technology) => (
                <TechnologyChip technology={technology} key={technology} />
              ))}
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{
                opacity: 1,
                y: "0%",
                transition: {
                  delay: 0.5,
                },
              }}
              whileHover={{
                backgroundColor: "transparent",
                border: "2px solid rgb(0, 0, 0)",
                color: "rgb(0, 0, 0)",
                transition: { delay: 0 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="live-demo-button"
              href={viewLink}
              target="_blank"
            >
              View Live Demo
            </motion.a>
          </div>
          <div className="project-card-image">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              loop={true}
              className="mySwiper"
            >
              {img.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default SomeProjects;
