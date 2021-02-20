import React, { } from 'react';

// global styles
import globals from '../../styles/globals';

// components
import SlideIndicator from '../SlideIndicator/SlideIndicator';

// styles
const styles = {
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
    paragraph: {
        width: '50%',
        paddingRight: '20%'
    }
}

const What = props => {
    return <div style={globals.slideContainer}>
        <div><h2 style={globals.header}>WHAT</h2> is available</div>

        <div style={styles.body}>
            <section style={styles.paragraph}>
                <h1>Broadband Connections and Equipment</h1>
                <p>The Healthcare Connect Fund (HCF) program provides a <strong>65% discount</strong> on all broadband internet connectivity expenses located in both rural and in some cases, non-rural. These connections can be primary connections as well as redundant back-up connections.</p>
            </section>
            <section style={styles.paragraph}>
                <h1>Voice and Data</h1>
                <p>The Telecommunications (Telcom) Program provides reduced rates to rural healthcare providers (HPCs) for telecommunications and voice services for the use of telemedicine and telehealth. Eligible services are discounted at the <strong>difference in cost</strong> between <strong>urban</strong> and <strong>rural</strong> areas in your state.</p>
            </section>
        </div>
        
        <SlideIndicator type='only_down' />
    </div>
};

export default What;