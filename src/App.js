import styles from'./App.module.css';

import img from './Jaider_Cueto_Profile_picture.jpeg'

function App() {
  return (
    <div className={styles.App}>
      <nav className={styles.nav}>
        <a href='App.js#about'><span>About me</span></a>
        <a href='App.js#my_skills'><span>Skills</span></a>
        <a href='App.js#my_projects'><span>Projects</span></a>
        <a href='App.js#contact_me'><span>Contact me</span></a>
      </nav>
      <main className={styles.main}>
        <div className={styles.introduction}>
            <div className={styles.typewriter}>
                <img src={img} alt='profile'/>
                <h1>Hi, I am Jaider Cueto.</h1>
                <h3><span>I am a Full-Stack developer.</span></h3>
            </div>
        </div>
        <div id='about' className={styles.about}>
            <h2>About me</h2>
            <div>
              <p>Hi, I'm Jaider. From the beginning I was interested 
                in how computers work, so I decided to learn their 
                language. I love to create attractive, fluid and 
                efficient websites to offer solutions to problems and 
                for personal taste. Here I share with you a little bit 
                of what I like to do. Thanks for being here!
              </p>
              <button>Download CV</button>
            </div>
        </div>
        <div id='my_skills' className={styles.skills}>
            <h2>My Skills</h2>
            <div className={styles.skillsGrid}>
                <div>
                  <h5>HTML & CSS</h5>
                  <div className={styles.htmlcss}>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-logo" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-logo" />
                  </div>
                </div>
                <div>
                  <h5>Javascript</h5>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js-logo"/>
                </div>
                <div>
                  <h5>React</h5>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo"/>
                </div>
                <div>
                  <h5>Redux</h5>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux-logo"/>
                </div>
                <div>
                  <h5>Node</h5>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node-logo"/>
                </div>
                <div>
                  <h5>Sequelize</h5>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sql-logo"/>
                </div>
            </div>
        </div>
        <div id='my_projects' className={styles.myWork}>
        <h2>My Projects</h2>
            <div className={styles.skillsWork}>
                <a href='https://pi-foods-front-ten.vercel.app/'>
                  <div>
                    <div className={styles.workDetail}>
                        <h3>Henry Food</h3>
                        <p>Henry Food is an application where we can view 
                          different food recipes along with relevant information
                          about them. We are allowed to search for recipes,
                          filter them, sort them and create our own recipes.</p>
                    </div>   
                  </div>
                </a>
                <a href='https://novelty-books.vercel.app/login'>
                  <div>
                    <div className={styles.workDetail}>
                        <h3>Novelty Books</h3>
                        <p>Novelty books is a web application for purchasing,
                          creating and modifying physical books of various genres.</p>
                    </div>   
                  </div>
                </a>
            </div>
        </div>
        <div id='contact_me' className={styles.contact}>
            <h2>Contact me!</h2>
            <div className={styles.skillsContact}>
                <a href="https://www.linkedin.com/in/jaider-cueto-logreira"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/Jaclog05"><i className="bi bi-github"></i></a>
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
