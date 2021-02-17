import React from 'react';

// global styles
import globals from '../../styles/globals';

// styles
const styles = {
    text: {
        fontSize: '2rem',
        padding: '0 2rem',
        textAlign: 'left'
    }
}

const Landing = () => {
    return <div style={globals.slideContainer}>
        <p style={styles.text}>RURAL</p>
        <p style={styles.text}>HEALTHCARE</p>
        <p style={styles.text}>FUNDING</p>
        <p style={styles.text}>MADE</p>
        <p style={styles.text}>SIMPLE</p>
        <p style={styles.text}>AND</p>
        <p style={styles.text}>RISK FREE</p>
    </div>
};

export default Landing;