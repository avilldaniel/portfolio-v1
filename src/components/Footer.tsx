import { IconCopyright } from "@tabler/icons";
import sx from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div
      className={`container ${sx.container}`}
      // style={{ padding: "5em 2em 2em" }}
    >
      <div className={sx.main}>
        <section className={sx.copyright}>
          <IconCopyright size={20} /> 2022 — designed by&nbsp;
          <a href="https://www.linkedin.com/in/daniel-villegas-aira">
            avilldaniel
          </a>
        </section>
        <section className={sx.socials}>
          <a
            href="https://github.com/avilldaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <IconBrandGithub size={24} /> */}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-villegas-aira"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <IconBrandLinkedin size={24} /> */}
            LinkedIn
          </a>
        </section>
      </div>
    </div>
  );
};

export default Footer;
