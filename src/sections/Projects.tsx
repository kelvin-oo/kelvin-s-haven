import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/ease.png",
      projectName: "Ease",
      projectLink: "https://ease-azure.vercel.app/",
      projectDescription:
        "Ease is a web application that utilizes React, Next.js, and Prisma to provide students with a comprehensive question answering system. Students can upload their PDF documents and interact with the application to ask questions directly related to the text. The application uses advanced natural language processing techniques to extract key information from the uploaded PDFs and generate comprehensive answers to student queries. This is my most recent project",
      projectTech: [
        "React",
        "Next JS",
        "Tailwind",
        "Prisma",
        "Typescript",
        "openAi API",
        "TRCP",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://ease-azure.vercel.app/",
      },
    },
    {
      image: "/stitch.png",
      projectName: "Stitch.com",
      projectLink:
        "https://stitch-com.vercel.app/sign-in?redirect_url=https%3A%2F%2Fstitch-com.vercel.app%2Fprofile%2Fnull",
      projectDescription:
        "Stitch.com is a social media app inspired by Threads, offering a unique and engaging platform for users to share their thoughts, ideas, and experiences. Built with React, Next.js, and MongoDB, Stitch.com provides a seamless user experience and fosters meaningful connections among individuals.",
      projectTech: ["React", "ShadCN", "Node.js", "Express", "MongoDB"],
      projectExternalLinks: {
        github: "",
        externalLink:
          "https://stitch-com.vercel.app/sign-in?redirect_url=https%3A%2F%2Fstitch-com.vercel.app%2Fprofile%2Fnull",
      },
    },
    {
      image: "/digital.png",
      projectName: "Digital Objectivity",
      projectLink: "https://objectivity-co-uk.vercel.app/career",
      projectDescription:
        "Here, I used Nextjs, tailwind, typescript, sanity and grow.I also connected this site to a backend CMS. Implemented custom features and functionality to improve user experience and performance, features such as allowing job seekers to filter through jobs by job type and mode(on-site, remote and hybrid). I also implemented other useful features following the provided UI/UX Design, this will result in increased user engagement.",
      projectTech: [
        "React",
        "Next JS",
        "Tailwind",
        "Sanity.io",
        "Groq",
        "Typescript",
        "CSS/SCSS",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://objectivity-co-uk.vercel.app/career",
      },
    },
    {
      image: "/react_music.png",
      projectName: "DevTunes: Calming Melodies for Coding Productivity",
      projectLink: "https://react-music-ola.netlify.app/",
      projectDescription:
        "In the world of programming, focus and concentration are essential for crafting elegant code. DevTunes, a music web app built with React and CSS, provides a curated collection of calming melodies designed to enhance your coding experience.",
      projectTech: ["React", "CSS"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://react-music-ola.netlify.app/",
      },
    },
    {
      image: "/budget.png",
      projectName: "BudgetBuddy: Your Personalized Expense and Income Tracker",
      projectLink: "https://olami-budgetit.netlify.app/",
      projectDescription:
        "Juggling academic commitments, extracurricular activities, and personal finances can be a daunting task for any student. As a 100-level student at the time, I faced the challenge of maintaining a clear overview of my income and expenses. To address this common struggle, I developed BudgetBuddy, an expenses and income tracker designed specifically for students.",
      projectTech: ["React", "styled components"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://olami-budgetit.netlify.app/",
      },
    },

    {
      image: "/colors.png",
      projectName:
        " Palette Pro: Your All-in-One Color Companion for Web Designers",
      projectLink: "https://steady-genie-071a13.netlify.app/",
      projectDescription:
        "In the world of web design, color plays a pivotal role in creating visually appealing and engaging user interfaces. Palette Pro, a comprehensive color generation, color matcher, and color picker app, empowers web designers to effortlessly discover, match, and select the perfect color palettes for their projects. Only available on desktops",
      projectTech: ["React", "CSS/SCSS"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://steady-genie-071a13.netlify.app/",
      },
    },
    {
      image: "/style.png",
      projectName: "The Style House",
      projectLink: "https://thestylehousenigeria.com/",
      projectDescription:
        "This was a remarkable journey — a brand-new website for an esteemed styling and fashion-tech company!The Style House Nigeria. It was an incredible experience working closely with a talented team and bringing their vision to life through an immersive digital platform.",
      projectTech: [
        "React",
        "Next JS",
        "Tailwind",
        
        "Typescript",
        
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://thestylehousenigeria.com/",
      },
    },
    {
      image: "/brick.png",
      projectName: "Brickwire Properties",
      projectLink: "https://www.brickwireproperties.com/",
      projectDescription:
        "On this project, I took on the challenge of building a fullstack software solution for BrickWire Construction a large properties and real estate firm. From the initial design to deployment, I covered every step in the process of creating a standout full-stack web application. This process involved ensuring a smooth user experience, managing data, and enhancing security. I delved into frontend development with Next.js, wrote backend logic with API routes, harnessed MongoDB for data management, and incorporated a secure authentication system. For me, this project wasn't just another project; it was about crafting a versatile and efficient software solution from start to finish.",
      projectTech: [
        "React",
        "Next JS",
        "Tailwind",
        "Prisma",
        "Typescript",
        "openAi API",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://www.brickwireproperties.com/",
      },
    },
    {
      image: "/port.png",
      projectName: "Kelvin's Haven: Showcasing My Skills and Passion",
      projectLink: "https://kelvin-s-haven.vercel.app/",
      projectDescription:
        "In the digital age, having a strong online presence is crucial for professionals seeking to showcase their skills, experience, and passion. Recognizing this importance, I embarked on a journey to create my personal portfolio website, a platform to effectively communicate my expertise and aspirations.",
      projectTech: ["React", "Next JS", "Tailwind", "Typescript"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://kelvin-s-haven.vercel.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
