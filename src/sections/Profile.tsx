import React from "react";
import Image from "next/image";
import styles from "../scss/ProjectPage.module.css";
import image1 from "../../public/participant/Screenshot 2024-09-29 213848.png";
import image2 from "../../public/participant/Screenshot 2024-09-29 213915.png";
import image3 from "../../public/participant/Screenshot 2024-09-29 214901.png";
import image4 from "../../public/participant/Screenshot 2024-09-29 215253.png";
import image5 from "../../public/participant/Screenshot 2024-09-29 215825.png";
import image6 from "../../public/participant/Screenshot 2024-09-29 215855.png";
import image7 from "../../public/participant/Screenshot 2024-09-29 220243.png";

import image8 from "../../public/tutor/Screenshot 2024-09-29 221030.png";
import image9 from "../../public/tutor/Screenshot 2024-09-29 221751.png";
import image10 from "../../public/tutor/Screenshot 2024-09-29 222043.png";
import image11 from "../../public/tutor/Screenshot 2024-09-29 222100.png";
import image12 from "../../public/tutor/Screenshot 2024-09-29 222100.png";
import image13 from "../../public/tutor/Screenshot 2024-09-29 222528.png";
import image14 from "../../public/tutor/Screenshot 2024-09-29 222906.png";
import image15 from "../../public/tutor/Screenshot 2024-09-29 223051.png";
import image16 from "../../public/tutor/Screenshot 2024-09-29 223122.png";
import image17 from "../../public/tutor/Screenshot 2024-09-29 224905.png";
import image18 from "../../public/tutor/Screenshot 2024-09-29 224922.png";
import image19 from "../../public/tutor/Screenshot 2024-09-29 224937.png";

import image20 from '../../public/super admin/Screenshot 2024-09-24 183838.png'
import image21 from '../../public/super admin/Screenshot 2024-09-29 230213.png'
import image22 from '../../public/super admin/Screenshot 2024-09-29 233321.png'
import image23 from '../../public/super admin/Screenshot 2024-09-29 233338.png'
import image24 from '../../public/super admin/Screenshot 2024-09-29 233408.png'
import image25 from '../../public/super admin/Screenshot 2024-09-29 233425.png'
import image26 from '../../public/super admin/Screenshot 2024-09-29 233525.png'
import image27 from '../../public/super admin/Screenshot 2024-09-29 233549.png'


const ProjectPage = () => {
  const project = {
    title: "ECX-LMS Software - 21-Day Coding Challenge Platform",
    url: "https://ecx-lms.vercel.app/",
    problem:
      "Managing a 21-day coding program with multiple participants, tutors, and admins presented challenges in task distribution, progress tracking, and maintaining effective communication across different user roles.",
    solution:
      "Developed an efficient and scalable Learning Management System for a 21-day coding program, facilitating interactive learning and efficient communication between participants, students, and admins.",
    features: [
      "Participant dashboard with progress tracking, leaderboards, and task management",
      "Tutor interface for assignment creation, grading, and student progress monitoring",
      "Admin panel for system-wide analytics and user management",
      "Multi-tiered user roles with role-specific functionalities and access controls",
      "Comprehensive task lifecycle management from creation to grading",
    ],
    technologies:
      "Built using Next.js, Express, Node.js, PostgreSQL, Prisma, and Auth.js.",
    impact:
      "Streamlined the learning process, improved task management efficiency, and enhanced communication between all users, resulting in a more engaging and effective 21-day coding challenge experience.",
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
              <a
                href={'https://github.com/kelvin-oo/ecx-lms'}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              <a
                href={`https://docs.google.com/document/d/1xBB1F4eP4l8IwmWRz-86VT56YKdEw0J3AMF3-dySaaM/edit`}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Doc
              </a>
              <a
                href={`https://drive.google.com/file/d/1QofpawrHh3923Q5Frb38BT7n5EPClGON/view?usp=drivesdk`}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
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
            <h2 className={styles.sectionTitle}>Participant Features</h2>
            {/* <p>{project.problem}</p> */}

            {/* <h2 className={styles.sectionTitle}>Solution</h2> */}
            {/* <p>{project.solution}</p> */}
            <ul className={styles.featureList}>
              <li>
                Progress Bar: Participants can monitor their progress by viewing
                their points vs. expected points.
              </li>
              <li>
                Leaderboard: Participants can see top students in their track or
                overall top performers.
              </li>
              <li>
                Recent Tasks feature provides a concise overview of
                approximately three tasks. It displays the task status, which
                can be Pending (yet to submit), Submitted (but not yet graded),
                Graded (task has been evaluated), or Expired (deadline has
                passed). For each task, a countdown timer is shown to indicate
                remaining time. Additionally, the feature presents both the
                expected grade and the actual grade received for each task,
                offering a quick comparison of performance expectations versus
                outcomes.
              </li>
              <li>
                Task Management: Participants can view all their tasks,
                including status indicators and countdowns. They can click on
                tasks to answer, submit work, or view detailed information.
              </li>
              <li>
                Individual Task View: Participants can access detailed
                information about a specific task and submit their work.
              </li>
              <li>
                Profile Management: Participants can view their profile, edit
                profile information, change their profile picture, and update
                their password.
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Tutor Features</h2>
            {/* <p>{project.problem}</p> */}

            {/* <h2 className={styles.sectionTitle}>Solution</h2> */}
            {/* <p>{project.solution}</p> */}
            <ul className={styles.featureList}>
              <li>
                Dashboard Overview: Tutors can view a leaderboard of top
                students (by track and overall), recent tasks, and a brief list
                of participants.
              </li>
              <li>
                Task Management: Tutors can view recent tasks and submissions,
                add new tasks with detailed specifications, and manage all
                uploaded tasks including editing and deleting options.
              </li>
              <li>
                Submission Handling: Tutors can view all student submissions,
                grade individual submissions, and track submission status.
              </li>
              <li>
                Grading System: Tutors can grade students&apos; submissions,
                inputting grades and adding remarks for each submission.
              </li>
              <li>
                Participant Management: Tutors can view a list of all
                participants with search and filter options, and access
                individual participant&apos;s submission history.
              </li>
              <li>
                Profile Management: Tutors can view and edit their profile,
                including changing their profile picture and password. The
                profile also displays additional information such as pending
                tasks to grade, tasks graded today, number of participants in
                their track, highest scorer, and most active participant.
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Admin Features</h2>
            {/* <p>{project.problem}</p> */}

            {/* <h2 className={styles.sectionTitle}>Solution</h2> */}
            {/* <p>{project.solution}</p> */}
            <ul className={styles.featureList}>
              <li>
                Dashboard Overview: Super Admins can view total user statistics,
                including participants, admins/tutors, and blocked users. The
                dashboard also displays brief lists of users, admins, and recent
                tasks.
              </li>
              <li>
                Admin Management: Super Admins can view and filter all tutors
                and admins, access detailed information about specific tutors
                (including tasks graded, created, and number of students), and
                have the ability to block tutors if necessary.
              </li>
              <li>
                Participant Management: Super Admins can view and filter all
                participants, access detailed information about specific
                participants (including grades and task completion data), and
                have the ability to block participants if needed.
              </li>
              <li>
                Task Overview: Super Admins can view all tasks from all tracks
                and select individual tasks for more detailed information or to
                perform actions.
              </li>
              <li>
                Leaderboard: Super Admins can view and filter a
                performance-based leaderboard of participants, either by track
                or overall performance.
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
                <div>
                  <Image
                    src={image8}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image9}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image10}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image11}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image12}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image13}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image14}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image15}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image16}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image17}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image18}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image19}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image20}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image21}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image22}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image23}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image24}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image25}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image26}
                    alt="style house Global"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src={image27}
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

export default ProjectPage;
