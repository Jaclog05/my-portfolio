import React from 'react';
import styles from './ResumeButton.module.css'


const ResumeButton = () => {

  return (
    <a 
      className={styles.buttonStyle} 
      href="https://drive.google.com/file/d/1TVQt4F0WZECVirfIcPQRmrGVCdc-4ZXm/view"
      target="_blank" 
      rel="noreferrer" 
      download = "Jaider cueto logreira - Curriculum.pdf"
    >
      Download CV
    </a>
  )
};

export default ResumeButton;
