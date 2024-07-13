import styles from'./App.module.css';
import img from './Jaider_Cueto_Portfolio_Picture.jpeg'
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
            <hr className={styles.hr1}/>
            <div id='content'>
              <p>
                I am Jaider, a fullstack developer with a comprehensive approach to software development.
                With over 2 years of experience in web development, I have worked with a variety of technologies,
                including React, Redux, Node.js, and PostgreSQL. I have developed end-to-end solutions that span
                from user interfaces to server logic and database management. I firmly believe in the importance
                of collaboration and effective communication within development teams. My goal is to continue
                growing professionally and contribute to projects that make a difference.
              </p>
              <ResumeButton/>
            </div>
        </div>
        <div id='my_skills' className={styles.skills}>
                <hr className={styles.hr2}/>
            <div className={styles.skillsGrid} id='content'>
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
