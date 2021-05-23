import React, { } from 'react';

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
        // width: '50%',
        overflow: 'scroll',
        fontWeight: 400,
        overflow: 'hidden' /* Hide scrollbars */
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: 10,
        paddingBottom: 10
    }
}

const Who = props => {
    return <div style={globals.slideContainer}>
        <div style={styles.header}><h2 style={globals.header}>WHO</h2> is eligible</div>

        <div style={styles.body}>
            <p><strong>The following entities are eligible for funding provided through the Rural Health Care (RHC) Program:</strong></p>

            <ul style={styles.list}>
                <li style={styles.listItem}>Not-for-profit hospitals</li>
                <li style={styles.listItem}>Dedicated emergency rooms of rural for-profit hospitals</li>
                <li style={styles.listItem}>Local health departments or agencies</li>
                <li style={styles.listItem}>Community mental health centers</li>
                <li style={styles.listItem}>Rural health clinics</li>
                <li style={styles.listItem}>Community health centers or health care centers providing healthcare to migrants</li>
                <li style={styles.listItem}>Skilled nursing facilities (SNF)</li>
                <li style={styles.listItem}>Post-secondary educational institutions offering healthcare instruction, such as teaching hospitals or
medical schools</li>
            </ul>
        </div>

        <SlideIndicator type='only_down' />
    </div>
};

export default Who;