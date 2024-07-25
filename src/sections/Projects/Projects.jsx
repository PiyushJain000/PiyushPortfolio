import styles from "./ProjectsStyles.module.css";
import tictactoe from "../../assets/tictactoe.png";
import stonepaperscissor from "../../assets/sps.jpeg";
import icecream from "../../assets/icecream.avif";
import calculator from "../../assets/calsiii.jpg";
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard
        src={tictactoe}
        link="https://github.com/PiyushJain000/TicTacToe"
        h3="Tic-Tac-Toe"
        p="Tic-Tac-Toe Game"
      />
      <ProjectCard
        src={stonepaperscissor}
        link="https://github.com/PiyushJain000/Stone-Paper-Scissor"
        h3="Stone-Paper-Scissor"
        p="Stone-Paper-Scissor Game"
      />
      <ProjectCard
        src={icecream}
        link="https://github.com/PiyushJain000/Ice-Cream_Parlour"
        h3="IcyCorner"
        p="IceCream Parlour Website"
      />
      <ProjectCard
        src={calculator}
        link="https://github.com/PiyushJain000/Calculator"
        h3="Calsi"
        p="Calculator"
      />
    </div>
  </section>
  );
}

export default Projects;
