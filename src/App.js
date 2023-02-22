import styles from'./App.module.css';

import img from './profile_picture-nbg.png'
/* import novelty from './Novelty-books.png'
import food from './Henry-food.png' */

function App() {
  return (
    <div className={styles.App}>
      <nav className={styles.nav}>
        <span>About me</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Contact me</span>
      </nav>
      <main className={styles.main}>
        <div className={styles.introduction}>
            <div className={styles.typewriter}>
                <h1>Hi, I am Jaider Cueto.</h1>
                <h3><span>I am a Full-Stack developer.</span></h3>
            </div>
        </div>
        <div className={styles.about}>
            <h2>About me</h2>
            <div>
              <img src={img} alt='profile'/>
              <p>Hi, I'm Jaider. From the beginning I was interested 
                in how computers work, so I decided to learn their 
                language. I love to create attractive, fluid and 
                efficient websites to offer solutions to problems and 
                for personal taste. Here I share with you a little bit 
                of what I like to do. Thanks for being here!</p>
            </div>
        </div>
        <div className={styles.skills}>
            <h2>My Skills</h2>
            <div className={styles.skillsGrid}>
                <div>
                  <h3>HTML & CSS</h3>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-logo" />
                </div>
                <div>
                  <h3>Javascript</h3>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js-logo"/>
                </div>
                <div>
                  <h3>React</h3>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo"/>
                </div>
                <div>
                  <h3>Redux</h3>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux-logo"/>
                </div>
                <div>
                  <h3>Node</h3>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node-logo"/>
                </div>
                <div>
                  <h3>Sequelize</h3>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sql-logo"/>
                </div>
            </div>
        </div>
        <div className={styles.myWork}>
        <h2>My Projects</h2>
            <div className={styles.skillsWork}>
                <div>
                  <h3>Henry Foods</h3>
                  {/* <img src={food} alt="henry-food"/> */}
                </div>
                <div>
                  <h3>Novelty Books</h3>
                 {/*  <img src={novelty} alt="novelty-books"/> */}
                </div>
            </div>
        </div>
        <div className={styles.contact}>
            <h2>Contact me!</h2>
            <div className={styles.skillsContact}>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-envelope"></i>
            </div>

        </div>
      </main>
      <footer className={styles.footer}>
            <p className="m-0 text-center text-white">
              Copyright &copy; Jaclog05 - 2023
            </p>
      </footer>
    </div>
  );
}

export default App;
