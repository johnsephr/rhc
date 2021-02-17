import React, { } from 'react';
import './Footer.scss';

const styles = {
    root: {
        // position: 'absolute',
        // bottom: 0
    },
    links: {
        textAlign: 'center',
        margin: '0 auto'
    }
}

const Footer = props => {
    return <div style={styles.root}>
        <p styel={styles.links}>Footer Text</p>
    </div>
};

export default Footer;