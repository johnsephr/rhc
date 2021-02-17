import React from 'react';

// global styles
import globals from '../../styles/globals';

// styles
const styles = {
    text: {
        fontSize: '2rem',
        padding: '1rem',
        textAlign: 'left'
    },
    textContainer: {
        margin: 'auto 0'
    }
}

const Landing = () => {
    return <div style={{...globals.slideContainer, paddingTop: 0}}>
        <div style={styles.textContainer}>
            <p style={styles.text}>RURAL</p>
            <p style={styles.text}>HEALTHCARE</p>
            <p style={styles.text}>FUNDING</p>
            <p style={styles.text}>MADE</p>
            <p style={styles.text}>SIMPLE</p>
            <p style={styles.text}>AND</p>
            <p style={styles.text}>RISK FREE</p>
        </div>
    </div>
};

export default Landing;