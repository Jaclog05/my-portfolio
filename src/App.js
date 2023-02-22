import styles from'./App.module.css';

import img from './profile_picture-nbg.png'

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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
            </div>
        </div>
        <div className={styles.skills}>
            <h2>My Skills</h2>
            <div className={styles.skillsGrid}>
                <div>
                  <h3>HTML & CSS</h3>
                </div>
                <div>
                  <h3>Javascript</h3>
                </div>
                <div>
                  <h3>React</h3>
                </div>
                <div>
                  <h3>Redux</h3>
                </div>
                <div>
                  <h3>Node</h3>
                </div>
                <div>
                  <h3>Sequelize</h3>
                </div>
            </div>
        </div>
        <div className={styles.myWork}>
        <h2>My Projects</h2>
            <div className={styles.skillsWork}>
                <div>
                  <h3>Henry Foods</h3>
                </div>
                <div>
                  <h3>Novelty Books</h3>
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
