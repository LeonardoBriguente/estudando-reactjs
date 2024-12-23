import React from 'react';
import "./StylesExamples.css";

import styles from "./StylesExamples.module.css";

const StylesExamples = () => {
    //inline styles
    const inlineStyles = {
        color: "blue",
        fontSize: "30px"
    }

  return (
    <div>
        <h2 style={inlineStyles}>Estilos Inline</h2>

        {/* Arquivo de estilos */}
        <p className='text'>Arquivo CSS</p>

        {/* CSS Modules */}
        <p className={styles.textYellow}>Meu CSS Modules</p>
    </div>
  )
}

export default StylesExamples