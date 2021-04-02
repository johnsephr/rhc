import React, { useState, useEffect, Fragment } from 'react';
import { useMediaPredicate } from "react-media-hook";

// icons
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

// styles
const styles = {
    landingArrowLg: {
        fontSize: '3rem',
        position: 'absolute',
        bottom: '7%',
        left: 0
    },
    landingArrowSm: {
        fontSize: '3rem',
        position: 'absolute',
        bottom: '7%',
        left: 0
    },
    arrowUpLg: {
        fontSize: '3rem',
        position: 'absolute',
        right: 0,
        top: '7%'
    },
    arrowUpSm: {
        fontSize: '3rem',
        position: 'absolute',
        right: 0,
        top: '5%'
    },
    arrowDownLg: {
        fontSize: '3rem',
        position: 'absolute',
        right: 0,
        bottom: '5%'
    },
    arrowDownSm: {
        fontSize: '3rem',
        position: 'absolute',
        right: 0,
        bottom: '5%'
    },
}

// arrow landing
const LandingArrow = () => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    return <FiArrowDown style={biggerThan1000 ? styles.landingArrowLg : styles.landingArrowSm} />;
}

// arrow up
const ArrowUp = () => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    return <FiArrowUp style={biggerThan1000 ? styles.arrowUpLg : styles.arrowUpSm} />;
}

// arrow down
const ArrowDown = () => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    return <FiArrowDown style={biggerThan1000 ? styles.arrowDownLg : styles.arrowDownSm} />;
}

// arrow down up
const ArrowDownUp = () => {
    return (
        <Fragment>
            <FiArrowUp style={styles.arrowUp} />
            <FiArrowDown style={styles.arrowDown} />
        </Fragment>
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