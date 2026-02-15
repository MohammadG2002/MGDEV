import { motion } from "motion/react";
import "./Contact.css";
import splitLetter from "../../../utils/splitLetter";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";
import socialData from "./Social/socialData";
import Social from "./Social/Social";

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
        {socialData.map((data) => (
          <Social key={data.name} data={data} />
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
