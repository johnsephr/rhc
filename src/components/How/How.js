import React, { } from 'react';
import { useMediaPredicate } from "react-media-hook";

// components
import Footer from '../Footer/Footer';
import SlideIndicator from '../SlideIndicator/SlideIndicator';

// global styles
import globals from '../../styles/globals';

// styles
const styles = {
    header: {
        marginTop: '8%',
        fontSize: '1.4rem'
    },
    bodyLg: {
        overflow: 'scroll',
        width: '50%',
        margin: '0 auto',
        overflow: 'hidden' /* Hide scrollbars */
    },
    bodySm: {
        overflow: 'scroll',
        overflow: 'hidden' /* Hide scrollbars */
    }
}

const How = props => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");

    return <div style={{ ...globals.slideContainer, justifyContent: 'space-between' }}>
        <div style={styles.header}><h2 style={globals.header}>How</h2> to get started<br /></div>

        <div style={biggerThan1000 ? styles.bodyLg : styles.bodySm}>
            <p>Our services are risk-free for your organization. RHC Consulting charges no up front fees, and if no funding is recieved, no fees are charged!</p>
        </div>

        {/* <SlideIndicator type='only_up' /> */}

        <Footer />
    </div>
};

export default How;