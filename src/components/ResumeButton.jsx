import React from 'react';
import styles from './ResumeButton.module.css'


const ResumeButton = () => {

  return (
    <a 
      className={styles.buttonStyle} 
      href="https://drive.google.com/file/d/1BAI0g2Wz4O0uOsyChzG67EfbDF1-xAUN/view" 
      target="_blank" 
      rel="noreferrer" 
      download = "Jaider cueto logreira - Curriculum.pdf"
    >
      Download CV
    </a>
  )
};

export default ResumeButton;
