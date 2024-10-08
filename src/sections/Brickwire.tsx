import React from "react";
import Image from "next/image";
import styles from "../scss/ProjectPage.module.css";
import image1 from "../../public/brickwire/Screenshot 2024-10-08 220633.png";
import image2 from "../../public/brickwire/Screenshot 2024-10-08 220705.png";
import image3 from "../../public/brickwire/Screenshot 2024-10-08 220750.png";
import image4 from "../../public/brickwire/Screenshot 2024-10-08 220812.png";
import image5 from "../../public/brickwire/Screenshot 2024-10-08 220845.png";
import image6 from "../../public/brickwire/Screenshot 2024-10-08 221113.png";
import image7 from "../../public/brickwire/Screenshot 2024-10-08 221142.png";



const Brickwire = () => {
  const project = {
    title: "BrickWire - Full-Stack Real Estate Management Solution",
    url: "https://www.brickwireproperties.com/",
    problem:
      "BrickWire Properties faced challenges in managing a growing property portfolio, tracking potential clients, and maintaining an effective online presence.",
    solution:
      "Developed a comprehensive full-stack web application addressing these key operational challenges:",
    features: [
      "Implemented an admin panel for centralized property and customer management",
      "Created a user-friendly interface for property browsing, assessment, lead generation, and purchasing.",
      "Integrated secure authentication and role-based access control",
      "Utilized server-side rendering (SSR) for improved performance and SEO",
      "Ensured data consistency and real-time updates across the platform",
    ],
    technologies:
      "Built using React, Next.js, MongoDB, NextAuth, Sass, SSR, Mongoose, and Auth.js.",
    impact:
      "Streamlined operations, enhanced sales efficiency, and significantly improved online visibility, resulting in a 30% increase in lead generation, a 20% increase in revenue, and a 50% reduction in property management time.",
    images: ["/olami.jpg", "/olami.jpg", "/olami.jpg"],
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.links}>
              <a
                href={project.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              {/* <a
                href={'https://github.com/kelvin-oo/ecx-lms'}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a> */}
              <a
                href={`https://docs.google.com/document/d/1QtGyXAfXgqpUejnX7dqdI_EOZwkdnmyKEsdrXt56g9c/edit#heading=h.4lbfl6x6etkm`}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Doc
              </a>
              {/* <a
                href={`https://drive.google.com/file/d/1QofpawrHh3923Q5Frb38BT7n5EPClGON/view?usp=drivesdk`}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a> */}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Problem</h2>
            <p>{project.problem}</p>

            <h2 className={styles.sectionTitle}>Solution</h2>
            <p>{project.solution}</p>
            <ul className={styles.featureList}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>Technologies</h2>
            <p>{project.technologies}</p>

            <h2 className={styles.sectionTitle}>Impact</h2>
            <p>{project.impact}</p>
          </div>
          <div className={styles.section}>
  <h2 className={styles.sectionTitle}>Admin Features</h2>
  <ul className={styles.featureList}>
    <li>
      Property Management: Admins can efficiently manage a large portfolio of properties through a centralized database, ensuring consistent data formats and storage across different departments or locations.
    </li>
    <li>
      Customer Management: Admins can track potential clients who show interest, measure and analyze customer engagement, and manage leads from initial inquiry to conversion.
    </li>
    <li>
      Data Analysis: Access to comprehensive analytics tools for property performance, customer engagement metrics, and sales conversions.
    </li>
    <li>
      Content Management: Ability to update and manage property listings, ensuring all information is current and accurate.
    </li>
    <li>
      User Management: Admins can manage user accounts, set permissions, and oversee user activities within the system.
    </li>
  </ul>
</div>
<div className={styles.section}>
  <h2 className={styles.sectionTitle}>User Features</h2>
  <ul className={styles.featureList}>
    <li>
      Property Search: Users can easily browse and search for available properties across different areas of Lagos, including Lekki, Ikate, Ologolo, Ikeja, Ikoyi, and VI.
    </li>
    <li>
      Detailed Property Information: Access to comprehensive details about each property, including images, specifications, pricing, and availability.
    </li>
    <li>
      Inquiry System: Users can submit inquiries about properties they're interested in, facilitating communication with BrickWire&apos;s sales team.
    </li>
    <li>
      User Profiles: Registered users can create and manage their profiles, save favorite properties, and track their inquiries.
    </li>
    <li>
      Interactive Maps: Integration of map features to visualize property locations and nearby amenities.
    </li>
  </ul>
</div>
<div className={styles.section}>
  <h2 className={styles.sectionTitle}>System Features</h2>
  <ul className={styles.featureList}>
    <li>
      Responsive Design: The application is fully responsive, providing an optimal viewing experience across a wide range of devices.
    </li>
    <li>
      SEO Optimization: Implemented strategies to improve search engine visibility for relevant real estate queries.
    </li>
    <li>
      Data Security: Robust security measures to protect user data and sensitive property information.
    </li>
    <li>
      Performance Optimization: Utilization of server-side rendering (SSR) for improved performance and faster page load times.
    </li>
    <li>
      Scalability: The system is designed to handle growth in both property listings and user base, ensuring long-term viability for BrickWire&apos;s expanding operations.
    </li>
  </ul>
</div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Images</h2>
            <section className={styles.gallery}>
             
                <div>
                  <Image
                    src={image1}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image2}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image3}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image4}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image5}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image6}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image7}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                
             
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brickwire;
