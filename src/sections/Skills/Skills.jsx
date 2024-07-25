import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillsList from "../../common/SkillsList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
       <SkillsList src={checkMarkIcon} skill="HTML"/>
       <SkillsList src={checkMarkIcon} skill="CSS"/>
       <SkillsList src={checkMarkIcon} skill="JavaScript"/>
       <SkillsList src={checkMarkIcon} skill="ReactJS"/>
      </div>
      <hr/>
      <div className={styles.skillList}>
       <SkillsList src={checkMarkIcon} skill="Python"/>
       <SkillsList src={checkMarkIcon} skill="C++"/>
       <SkillsList src={checkMarkIcon} skill="Tailwind CSS"/>
       <SkillsList src={checkMarkIcon} skill="BootStrap"/>
      </div>
    </section>
  );
}

export default Skills;
