"use client";
import { motion } from "motion/react";
import GitHubIcon from "../../../assets/icons/github.svg?react";
import LinkedinIcon from "../../../assets/icons/linkedin.svg?react";
import "./Contact.css";
import { Link } from "react-router-dom";
import splitLetter from "../../../utils/splitLetter";

const Contact = () => {
  return (
    <section className="snap-section contact" id="contact">
      <motion.div className="headline-underline">
        <motion.h1 className="headline-header">
          {splitLetter("Contact Me")}
        </motion.h1>
        <motion.div className="subheadline">
          <p>
            Have a project in mind or want to work together?
            <br />
            I'd love to hear from you.
            <br />
            Get in touch and let's build something meaningful and impactful
            together!
          </p>
        </motion.div>
        <motion.a
          href="mailto:mohadahmed90@gmail.com"
          target="_blank"
          className="email-link"
        >
          mohadahmed90@gmail.com
        </motion.a>
        <motion.div className="socials">
          <Link to="https://github.com/mohammadg2002" target="_blank">
            <GitHubIcon />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohammad-ghanim-6286b7294/"
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
        </motion.div>
      </motion.div>
      <div />
    </section>
  );
};

export default Contact;
