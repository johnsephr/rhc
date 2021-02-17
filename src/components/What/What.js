import React, { } from 'react';

// global styles
import globals from '../../styles/globals';

const What = props => {
    return <div style={globals.slideContainer}>
        <h2 style={globals.header}>WHAT</h2> is available<br />

        <div className='body'>
            <section>
                <h1>Broadband Connections and Equipment</h1>
                <p>The Healthcare Connect Fund (HCF) program provides a <strong>65% discount</strong> on all broadband internet connectivity expenses located in both rural and in some cases, non-rural. These connections can be primary connections as well as redundant back-up connections.</p>
            </section>
            <section>
                <h1>Voice and Data</h1>
                <p>The Telecommunications (Telcom) Program provides reduced rates to rural healthcare providers (HPCs) for telecommunications and voice services for the use of telemedicine and telehealth. Eligible services are discounted at the <strong>difference in cost</strong> between <strong>urban</strong> and <strong>rural</strong> areas in your state.</p>
            </section>
        </div>
    </div>
};

export default What;