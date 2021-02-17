import React, { } from 'react';

// global styles
import globals from '../../styles/globals';

// styles
const styles = {
    root: {
        width: '70%',
        margin: '20% 0',
        minWidth: '300px',
        margin: 'auto'
    }
}

const Who = props => {
    return <div style={styles.root}>
        <h2 style={globals.header}>WHO</h2> is eligible<br />

        <p className=''>The following entities are eligible for funding provided through the Rural Health Care (RHC) Program</p>

        <ul>
            <li>Not-for-profit hospitals</li>
            <li>Dedicated emergency rooms of rural for-profit hospitals</li>
            <li>Local health departments or agencies</li>
            <li>Community mental health centers</li>
            <li>Rural health clinics</li>
            <li>Community health centers or health care centers providing healthcare to migrants</li>
            <li>Skilled nursing facilities (SNF)</li>
            <li>Post-secondary educational institutions offering healthcare instruction, such as teaching hospitals or
        medical schools</li>
        </ul>
    </div>
};

export default Who;