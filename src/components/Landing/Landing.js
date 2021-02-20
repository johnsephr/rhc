import React from 'react';

// global styles
import globals from '../../styles/globals';

// components
import SlideIndicator from '../SlideIndicator/SlideIndicator';

// styles
const styles = {
    text: {
        fontSize: '2.5rem',
        padding: '1rem',
        textAlign: 'left',
        lineHeight: '31.28px'
    },
    textContainer: {
        margin: 'auto 0'
    }
}

const Landing = () => {
    return <div style={{...globals.slideContainer, paddingTop: 0, width: '78%'}}>
        <div style={styles.textContainer}>
            <p style={styles.text}>RURAL</p>
            <p style={styles.text}>HEALTHCARE</p>
            <p style={styles.text}>FUNDING</p>
            <p style={styles.text}>MADE</p>
            <p style={styles.text}>SIMPLE</p>
            <p style={styles.text}>AND</p>
            <p style={styles.text}>RISK FREE</p>
        </div>

        <SlideIndicator type={'landing'} />
    </div>
};

export default Landing;