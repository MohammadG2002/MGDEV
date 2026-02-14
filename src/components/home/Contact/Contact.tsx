"use client";
import { motion } from "motion/react";
import GitHubIcon from "../../../assets/icons/github.svg?react";
import LinkedinIcon from "../../../assets/icons/linkedin.svg?react";
import "./Contact.css";
import { Link } from "react-router-dom";
import splitLetter from "../../../utils/splitLetter";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

const Contact = () => {
  const { ref, headerProps, contentProps, linksProps, linksProps2 } =
    useStaggeredInView({
      staggerDelay: 0.15,
    });
  return (
    <section className="contact-sec" id="contact" ref={ref}>
      <motion.h1 {...headerProps}>{splitLetter("Contact Me")}</motion.h1>
      <motion.p {...contentProps}>
        Have a project in mind or want to work together?
        <br />
        I'd love to hear from you.
        <br />
        Get in touch and let's build something meaningful and impactful
        together!
      </motion.p>
      <motion.a
        href="mailto:mohadahmed90@gmail.com"
        target="_blank"
        className="contact-sec__email"
        {...linksProps}
      >
        mohadahmed90@gmail.com
      </motion.a>
      <motion.div className="contact-sec__socials" {...linksProps2}>
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
    </section>
  );
};

export default Contact;
