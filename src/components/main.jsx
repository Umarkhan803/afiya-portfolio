import React from "react";
import { Clock, Mail, MapPin } from "lucide-react";
const Main = () => {
  return (
    <>
      <body>
        {/* Navigation */}
        <nav class="nav">
          <a href="#home" class="nav-logo">
            Portfolio
          </a>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button class="nav-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        {/* Hero */}
        <header id="home" class="hero">
          <div class="hero-content">
            <p class="hero-tag">
              Content Writer · Video Editor · Educational Blogger
            </p>
            <h1 class="hero-title">
              Hi, I'm <span class="accent">Noor Afiya</span>
            </h1>
            <p class="hero-desc">
              I create engaging content, edit videos that tell stories, and
              write about education and learning.
            </p>
            <a href="#contact" class="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </header>
        {/* About Me */}
        <section id="about" class="section">
          <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
              <p>
                I'm a passionate content writer and video editor with a focus on
                educational blogging. I believe in making complex ideas simple
                and engaging through words and visuals.
              </p>
              <p>
                Whether it's crafting blog posts, editing educational videos, or
                managing content for learning platforms, I aim to connect with
                audiences and support their growth.
              </p>
            </div>
            <div class="what-i-do">
              <h3 class="what-i-do-title">What I do</h3>
              <ul class="what-i-do-list">
                <li>
                  Write and edit blog posts, articles, and scripts with clear
                  structure and SEO awareness
                </li>
                <li>
                  Edit and produce video content for YouTube and educational
                  channels
                </li>
                <li>
                  Create curriculum-aligned content and study resources for
                  students and educators
                </li>
                <li>
                  Research, script, and fact-check content for videos and
                  articles
                </li>
                <li>
                  Manage and publish content across blogs and social platforms
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* My Skills */}
        <section id="skills" class="section section-alt">
          <div class="container">
            <h2 class="section-title">My Skills</h2>
            <div class="skills-grid">
              <div class="skill-card">
                <h3>Content Writing</h3>
                <p>
                  Blog posts, articles, scripts, and educational copy with clear
                  structure and SEO awareness.
                </p>
              </div>
              <div class="skill-card">
                <h3>Video Editing</h3>
                <p>
                  Cutting, color grading, motion graphics, and storytelling for
                  YouTube and educational content.
                </p>
              </div>
              <div class="skill-card">
                <h3>Educational Blogging</h3>
                <p>
                  Curriculum-aligned content, study guides, and resources for
                  students and educators.
                </p>
              </div>
              <div class="skill-card">
                <h3>Research & Scripting</h3>
                <p>
                  Research-driven scripts and fact-checked content for videos
                  and articles.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* My Projects */}
        <section id="projects" class="section">
          <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
              <article class="project-card">
                <h3>Educational YouTube Series</h3>
                <p>
                  Scripted and edited a multi-episode series on study skills and
                  exam preparation.
                </p>
              </article>
              <article class="project-card">
                <h3>Blog: Education & Affairs</h3>
                <p>
                  Ongoing blog covering policy, tips, and resources for students
                  and teachers.
                </p>
              </article>
              <article class="project-card">
                <h3>Video Course Content</h3>
                <p>
                  Written and edited scripts for online courses and e-learning
                  modules.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* Work Experience */}
        <section id="experience" class="section section-alt">
          <div class="container">
            <h2 class="section-title">Work Experience</h2>
            <div class="timeline">
              <div class="timeline-item">
                <span class="timeline-year">2023 – Present</span>
                <div class="timeline-content">
                  <h3>Content Writer & Video Editor</h3>
                  <p class="timeline-company">Freelance</p>
                  <p>
                    Creating blog content, editing educational videos, and
                    managing social media for learning brands.
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <span class="timeline-year">2021 – 2023</span>
                <div class="timeline-content">
                  <h3>Educational Blogger</h3>
                  <p class="timeline-company">Education & Affairs</p>
                  <p>
                    Wrote articles on study tips, career guidance, and
                    educational policy for students and educators.
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <span class="timeline-year">2019 – 2021</span>
                <div class="timeline-content">
                  <h3>Content Creator & Video Editor</h3>
                  <p class="timeline-company">Freelance</p>
                  <p>
                    Produced video content and written guides for an educational
                    YouTube channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Certificates */}
        <section id="certificates" class="section">
          <div class="container">
            <h2 class="section-title">Certificates</h2>
            <ul class="cert-list">
              <li>
                <strong>Content Marketing Certification</strong> — Leadzin /
                2025
              </li>
              <li>
                <strong>Video Editing & Production</strong> — Course / Year
              </li>
              <li>
                <strong>SEO for Writers</strong> — Platform / Year
              </li>
              <li>
                <strong>Digital Storytelling</strong> — Course / Year
              </li>
            </ul>
          </div>
        </section>
        {/* Education */}
        <section id="education" class="section section-alt">
          <div class="container">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
              <div class="edu-item">
                <h3>Bachelor in Commerce</h3>
                <p class="edu-school">University of Bangalore</p>
                <p class="edu-year">
                  An undergraduate commerce degree covering accounting,
                  economics, business law, <br /> finance, and management.
                  Develops analytical and strategic skills for business careers,
                  <br />
                  entrepreneurship, and corporate roles.
                </p>
              </div>
              {/* <div class="edu-item">
                <h3>Diploma / Certification</h3>
                <p class="edu-school">Institution Name</p>
                <p class="edu-year">Year</p>
              </div> */}
            </div>
          </div>
        </section>
        <section id="contact" class="section contact-section">
          <div class="container contact-container">
            <h2 class="contact-main-title">Contact Information</h2>
            <div class="contact-info-grid">
              <div class="contact-info-item">
                <div class="contact-icon contact-icon-email">
                  <Mail />
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">Email</span>
                  <a
                    href="mailto:noorafiya2003@gmail.com"
                    class="contact-value"
                  >
                    noorafiya2003@gmail.com
                  </a>
                </div>
              </div>
              {/* <div class="contact-info-item">
                <div class="contact-icon contact-icon-phone">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">Phone</span>
                  <span class="contact-value">+91 9876543210</span>
                </div>
              </div> */}
              <div class="contact-info-item">
                <div class="contact-icon contact-icon-location">
                  <MapPin />
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">Location</span>
                  <span class="contact-value">Hyderabad, Telangana</span>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-icon contact-icon-hours">
                  <Clock />
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">Working Hours</span>
                  <span class="contact-value">Mon - Fri: 11AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
          <p>
            &copy; <span id="year">2026</span> Noor Afiya. All rights reserved.
          </p>
        </footer>
      </body>
    </>
  );
};

export default Main;
