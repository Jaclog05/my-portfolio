import styles from'./App.module.css';

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
            <div>
                <h1>I am Jaider Cueto</h1>
                <h3>I am a front-end developer</h3>
            </div>
        </div>
        <div className={styles.skills}>

        </div>
        <div className={styles.myWork}>
      
        </div>
        <div className={styles.contact}>

        </div>
      </main>
      <footer className={styles.footer}>This is my footer</footer>
    </div>
  );
}

export default App;
