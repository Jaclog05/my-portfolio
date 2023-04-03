import React from "react";
import styles from '../App.module.css'

const SkillContainer = ({skill, imagesArray, altArray}) => {
    return(
        <div>
            <div><h5>{skill}</h5></div>
            {   imagesArray.length > 1 ? 
                <div className={styles.htmlcss}>
                      <img src={imagesArray[0]} alt={altArray[0]} />
                      <img src={imagesArray[1]} alt={altArray[1]} />
                </div> :
                <img src={imagesArray[0]} alt={altArray[0]}/>
            }
        </div>
    )
}

export default SkillContainer