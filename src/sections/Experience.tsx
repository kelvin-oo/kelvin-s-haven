import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "ThinkPeople",
      role: "Full Stack Developer",
      url: "https://www.linkedin.com/company/thinkpeople-ltd/mycompany/verification/",
      start: "January 2023",
      end: "Present",
      shortDescription: [
        "Currently working as a full-stack software developer building efficient softwares.",
        "I specialize in designing and developing high-quality solutions that delight our clients and exceed their expectations at ThinkPeople Limited",
        "Working as lead developer and crafting the best approach and tech stack to every unique problem",
      ],
    },
    {
      name: "ThinkPeople LTD",
      role: "Lead Frontend Developer Instructor",
      url: "#",
      start: "November 2022",
      end: "February 2023",
      shortDescription: [
        "Created a comprehensive eight-week curriculum to teach students the basics of frontend development.",
        "Led other instructors on how to best implement the curriculum and deliver sound lectures.",
        "Taught students frontend development with a step-by-step process, from HTML to CSS, to JavaScript and React.",
        "Assessed students weekly and gave them projects to gauge their progress.",
        "Recorded Tutorial videos for students after class learning.",
        "Examined and graded students at the end of the program.",
      ],
    },
    {
      name: "Thestylehouse",
      role: "Web Developer",
      url: "https://www.thestylehousenigeria.com/",
      start: "July 2022",
      end: "September 2022",
      shortDescription: [
        "Designed and developed a fully responsive website using React, Tailwind, and plain CSS, following the provided UI/UX design",
        "Implemented custom features and functionality to improve user experience and performance, resulting in faster load times and increased user engagement.",
        "Utilized best practices for code organization, including component-based architecture and reusable CSS classes, to ensure scalability and maintainability.",
        "Worked closely with the design team and project stakeholders to ensure the website met all requirements and exceeded expectations.",
        "Deployed the website to a live environment, conducting thorough testing to ensure functionality and compatibility across multiple devices and browsers.",
      ],
    },
    {
      name: "AbrahamtheFirst Media",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "April 2022",
      end: "June 2022",
      shortDescription: [
        "Planned website design and development, converting mockups into usable web presence.",
        "Communicated with client on what they want and what they hope to achieve with the website",
        "Communicated with client on a daily basis to show progress and also make desired changes.",
      ],
    },
    {
      name: "InstaSkool Tech",
      role: "Frontend Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2021",
      end: "March 2022",
      shortDescription: [
        "Worked with a team to build an online learning website.",
        "Worked as a Frontend Developer and was focused on giving the site the best possible UI by writing lines of CSS code.",
        "Communicated with UI/UX designers, product manager and backend developers to ensure a well implemented site.",
        "Worked on the responsiveness of the site to make sure the UI looked good on all devices.",
        "Fixed bugs and made sure the website was up and running.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span style={{
                  paddingBottom: '5px'
                }}>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
