import React, { } from 'react';
import { useMediaPredicate } from "react-media-hook";

// global styles
import globals from '../../styles/globals';

// components
import SlideIndicator from '../SlideIndicator/SlideIndicator';

// styles
const styles = {
    header: {
        marginTop: '8%',
        fontSize: '1.4rem'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
        fontWeight: 400,
        overflow: 'hidden' /* Hide scrollbars */
    },
    paragraphLg: {
        width: '75%',
    },
    paragraphSm: {
        width: '100%',
    }
}

const What = props => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");

    return <div style={globals.slideContainer}>
        <div style={styles.header}><h2 style={globals.header}>WHAT</h2> is available</div>

        <div style={styles.body}>
            <section style={biggerThan1000 ? styles.paragraphLg : styles.paragraphSm}>
                <h1>Broadband Connections and Equipment</h1>
                <p>The Healthcare Connect Fund (HCF) program provides a <strong>65% discount</strong> on all broadband internet connectivity expenses located in both rural and in some cases, non-rural. These connections can be primary connections as well as redundant back-up connections.</p>
            </section>
            <section style={biggerThan1000 ? styles.paragraphLg : styles.paragraphSm}>
                <h1>Voice and Data</h1>
                <p>The Telecommunications (Telcom) Program provides reduced rates to rural healthcare providers (HPCs) for telecommunications and voice services for the use of telemedicine and telehealth. Eligible services are discounted at the <strong>difference in cost</strong> between <strong>urban</strong> and <strong>rural</strong> areas in your state.</p>
            </section>
        </div>
        
        <SlideIndicator type='only_down' />
    </div>
};

export default What;