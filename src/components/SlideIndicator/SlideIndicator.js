import React, { useState, useEffect } from 'react';

// icons
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

// styles
const styles = {
    landingArrow: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    arrowUp: {

    },
    arrowDown: {

    }
}

// arrow landing
const LandingArrow = () => <FiArrowDown style={styles.landingArrow} />;

// arrow up
const ArrowUp = () => <FiArrowUp style={styles.arrowUp} />;

// arrow down
const ArrowDown = () => <FiArrowDown style={styles.arrowDown} />;

// arrow down up
const ArrowDownUp = () => {
    return (
        <div>
            <FiArrowUp style={styles.arrowUp} />
            <FiArrowDown style={styles.arrowDown} />
        </div>
    );
};

// primary
const SlideIndicator = props => {
    const { type } = props;


    return (
        <div>{type === 'only_down' ? <ArrowDown /> :
            type === 'down_up' ? <ArrowDownUp /> :
                type === 'only_up' ? <ArrowUp /> : <LandingArrow />}</div>
    );
};

export default SlideIndicator;