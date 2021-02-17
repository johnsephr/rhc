import React, { } from 'react';

// components
import Footer from '../Footer/Footer';

// global styles
import globals from '../../styles/globals';

// styles
const styles = {
   
}

const How = props => {
    return <div style={{...globals.slideContainer, justifyContent: 'space-between', height: 'calc(100% - 50px)'}}>
        <div>
            <h2 style={globals.header}>How</h2> to get started<br />

            <div>
                <p>Our services are risk-free for your organization. RHC Consulting charges no up front fees, and if no funding is recieved, no fees are charged!</p>
            </div>
        </div>

        {/* footer here */}
        <Footer />
    </div>
};

export default How;