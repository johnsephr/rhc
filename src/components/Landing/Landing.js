import React from 'react';
import { useMediaPredicate } from "react-media-hook";

// global styles
import globals from '../../styles/globals';

// components
import SlideIndicator from '../SlideIndicator/SlideIndicator';

// styles
const styles = {
    textLg: {
        fontSize: '2.4rem',
        marginTop: 0,
        marginBottom: '2.75rem',
        paddingBottom: '2rem',
        paddingLeft: 0,
        textAlign: 'left',
        lineHeight: '23.28px'
    },
    textSm: {
        fontSize: '2.4rem',
        marginTop: 0,
        marginBottom: '2.75rem',
        paddingBottom: '6%', // 1rem',
        paddingLeft: 0,
        textAlign: 'left',
        lineHeight: '23.28px'
    },
    textContainer: {
        margin: 'auto 0'
    }
}

const Landing = () => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");

    return <div style={{...globals.slideContainer, paddingTop: 0, width: '78%'}}>
        <div style={styles.textContainer}>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>RURAL</p>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>HEALTHCARE</p>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>FUNDING</p>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>MADE</p>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>SIMPLE</p>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>AND</p>
            <p style={biggerThan1000 ? styles.textLg : styles.textSm}>RISK FREE</p>
        </div>

        <SlideIndicator type={'landing'} />
    </div>
};

export default Landing;