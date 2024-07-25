import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instaLight from "../../assets/twitter-light.svg";
import instaDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const Insta = theme === "light" ? instaLight : instaDark;
  const linkedin = theme === "light" ? linkedinLight : linkedinDark;
  const github = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Piyush Gosavi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Piyush
          <br />
          Gosavi
        </h1>
        <h2>Frontend Developer</h2>

        <span>
          <a href="https://www.instagram.com/_its_pj._/" target="_blank">
            <img src={Insta} alt="Insta icon" />
          </a>
          <a href="https://github.com/PiyushJain000" target="_blank">
            <img src={github} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-jain-3924b4293/"
            target="_blank">
          
            <img src={linkedin} alt="Linkdin icon" />
          </a>
          </span>
          <p className={styles.description}>
            I'm a passionate frontend developer with a knack for creating
            engaging and user-friendly web applications.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        
      </div>
    </section>
  );
}

export default Hero;
