import React, { } from 'react';

const styles = {
    root: {
        width: '100%',
        height: 50
    },
    links: {
        
        textAlign: 'center',
        margin: '0 auto'
    }
}

const Footer = props => {
    return <div style={styles.root}>
        <p style={styles.links}>Links go here...</p>
    </div>
};

export default Footer;