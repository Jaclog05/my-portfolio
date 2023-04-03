import React from "react";
import styles from "../App.module.css"

const  ProjectContainer = ({projectLink, image, alt, title, description}) => {
    return(
        <a 
            href={projectLink}
            target="_blank" 
            rel="noreferrer"
        >
                <div className={styles.workContainer}>
                    <img src={image} alt={alt}/>
                    <div className={styles.workDetail}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>   
                    <h2><i className="bi bi-hand-index-thumb-fill"></i>  Hover Me</h2>
                </div>
        </a>
    )
}

export default ProjectContainer