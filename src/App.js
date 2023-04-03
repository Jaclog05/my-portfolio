import styles from'./App.module.css';
import img from './Jaider_Cueto_Profile_picture.jpeg'
import projectsInfo from './projectsInfo.js'
import skillsInfo from './skillsInfo.js';
import ProjectContainer from './components/ProjectContainer';
import ResumeButton from './components/ResumeButton.jsx';
import SkillContainer from './components/SkillContainer';

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
            {/* <h2>About me</h2> */}
            <hr className={styles.hr1}/>
            <div id='content'>
              <p>Hi, I'm Jaider. From the beginning I was interested 
                in how computers work, so I decided to learn their 
                language. I love to create attractive, fluid and 
                efficient websites to offer solutions to problems and 
                for personal taste. Here I share with you a little bit 
                of what I like to do. Thanks for being here!
              </p>
              <ResumeButton/>
            </div>
        </div>
        <div id='my_skills' className={styles.skills}>
                <hr className={styles.hr2}/>
            <div className={styles.skillsGrid} id='content'>
                {/* <div>
                  <div><h5>HTML & CSS</h5></div>
                  <div className={styles.htmlcss}>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-logo" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-logo" />
                  </div>
                </div>
                <div>
                  <div><h5>Javascript</h5></div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js-logo"/>
                </div>
                <div>
                  <div><h5>React</h5></div>              
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo"/>
                </div>
                <div>
                  <div><h5>Redux</h5></div>              
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux-logo"/>
                </div>
                <div>
                  <div><h5>Node</h5></div>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node-logo"/>
                </div>
                <div>
                  <div><h5>Sequelize</h5></div>                  
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sql-logo"/>
                </div> */}
                {
                  skillsInfo.map(skill => {
                    return (
                      <SkillContainer
                          skill={skill.title}
                          imagesArray={skill.images}
                          altArray={skill.alt}
                      />
                    )
                  })
                }
            </div>
        </div>
        <div id='my_projects' className={styles.myWork}>
            <hr className={styles.hr3}/>
            <div className={styles.skillsWork}  id='content'>
                {
                  projectsInfo.map(project => {
                      return(
                          <ProjectContainer
                              projectLink={project.projectLink}
                              image={project.imageSrc}
                              alt={project.alt}
                              title={project.title}
                              description={project.description}
                          />
                      )
                  })
                }
            </div>
        </div>
        <div id='contact_me' className={styles.contact}>
            <hr className={styles.hr4}/>
            <div className={styles.contactFirst}>
              <div><i className="bi bi-envelope-at-fill"></i>jaidercueto.1010@gmail.com</div>
              <div><i className="bi bi-telephone-fill"></i>+57 317-461-2402</div>
              <div><i className="bi bi-geo-alt-fill"></i>Soledad, Colombia</div>
            </div>
            <div className={styles.skillsContact}>
                <a 
                  href="https://www.linkedin.com/in/jaider-cueto-logreira"
                  target="_blank" 
                  rel="noreferrer" 
                >
                  <div><i className="bi bi-linkedin"></i> Jaider Cueto Logreira</div>
                </a>
                <a 
                  href="https://github.com/Jaclog05"
                  target="_blank" 
                  rel="noreferrer" 
                >
                  <div><i className="bi bi-github"></i> Jaclog05</div>
                </a>
            </div>

        </div>
      </main>
    </div>
  );
}

export default App;
