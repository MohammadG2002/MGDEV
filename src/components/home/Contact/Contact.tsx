"use client";
import { motion, useScroll } from "motion/react";
import GitHubIcon from "../../../assets/icons/github.svg?react";
import LinkedinIcon from "../../../assets/icons/linkedin.svg?react";
import { useRef } from "react";
import useParallax from "../../../hooks/useParallax";
import "./Contact.css";
import { Link } from "react-router-dom";
import splitLetter from "../../../utils/splitLetter";
import { useFadeAnimation } from "../../../hooks/useFadeAnimation";
import { useScrollSpring } from "../../../hooks/useScrollSpring";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });

  const { fadeHeader, fadeContent, fadeLinks } = useFadeAnimation(slowProgress);
  return (
    <section className="snap-section contact" id="contact">
      <motion.div className="headline-underline" style={{ y }}>
        <motion.h1 className="headline-header" style={{ opacity: fadeHeader }}>
          {splitLetter("Contact Me")}
        </motion.h1>
        <motion.div className="subheadline" style={{ opacity: fadeContent }}>
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
          style={{ opacity: fadeLinks }}
        >
          mohadahmed90@gmail.com
        </motion.a>
        <motion.div className="socials" style={{ opacity: fadeLinks }}>
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
      <div ref={ref} />
    </section>
  );
};

export default Contact;
