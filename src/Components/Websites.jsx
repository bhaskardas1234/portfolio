import React from "react";
import classes from "./Websites.module.css";
import profilePic from "../assets/pfimg4.jpeg"; // Replace with your image
import { FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";
import todoimg from "../assets/to-do.jpeg";
import chatappimg from "../assets/real-time-chat-application.jpeg";
import videoApp from "../assets/video-app.jpeg";

const Websites = () => {
  return (
    <div className={classes.container}>
      {/* Navbar */}
      <nav className={classes.navbar}>
        <div className={classes.left}>
          <a href="/">BHASKAR DAS</a>
        </div>
        <div className={classes.right}>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a href="mailto:your.email@gmail.com">
          <FaEnvelope /> Gmail
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.profileContainer}>
          <img src={profilePic} alt="Profile" className={classes.profilePic} />
        </div>
        <h1 className={classes.name}>Bhaskar Das</h1>
        <p>
          🚀 Hi, I’m <strong>BHASKAR DAS</strong>, a passionate{" "}
          <strong>Full-Stack Developer</strong> with expertise in{" "}
          <strong>React.js</strong>, <strong>Python</strong>,{" "}
          <strong>FastAPI</strong>, <strong>MongoDB</strong>, and{" "}
          <strong>AWS</strong>.
          <br />🎓 <strong>MCA (2024)</strong> | Rank <strong>35 JECA</strong>
          <br />💼 <strong>Tech Intern @ SetuSchool.com</strong> →{" "}
          <strong>Developer L1 (April 2025)</strong>
          <br />💡 I specialize in <strong>backend optimization, cloud
          computing</strong>, and <strong>frontend excellence</strong>.
        </p>
      </section>

      {/* Skills Section */}
      <section className={classes.skills}>
        <h2>🔥 My Skills</h2>
        <div className={classes.skillList}>
          {[
            "React",
            "MongoDB",
            "Spring",
            "AWS",
            "FastAPI",
            "Node.js",
            "Flask",
          ].map((skill, index) => (
            <span key={index} className={classes.skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={classes.projects}>
        <h2>📂 My Projects</h2>
        <div className={classes.projectCards}>
          {[
            {
              title: "To-Do App",
              image: todoimg,
              link: "#",
              comingSoon: true,
            },
            {
              title: "Real-Time Chat App",
              image: chatappimg,
              link: "https://yourproject2.com",
              comingSoon: true,
            },
            {
              title: "Video Streaming App",
              image: videoApp,
              link: "#",
              comingSoon: true,
            },
          ].map((project, index) => (
            <div key={index} className={classes.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={classes.projectImage}
              />
              <h3>{project.title}</h3>
              {project.comingSoon ? (
                <p>Coming Soon</p>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={classes.contact}>
        <h2>📩 Contact Me</h2>
        <p>Let's connect! Reach me via email or LinkedIn.</p>
        <a href="mailto:your.email@gmail.com" className={classes.contactBtn}>
          Send Email
        </a>
      </section>
    </div>
  );
};

export default Websites;
