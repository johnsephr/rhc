import React, { useState, useEffect } from 'react';

// icons
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

// styles
const styles = {
    landingArrow: {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        fontSize: 45,
        transition: '200ms ease-in-out'
    },
    arrowUp: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        fontSize: 45,
    },
    arrowDown: {
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        fontSize: 45,
    },
    showArrow: {
        opacity: 1,
        transition: '250ms ease-in-out'
    },
    hideArrow: {
        opacity: 0,
        transition: '250ms ease-in-out'
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
    const { scrollTop, offsetHeight } = props;
    const { showArrow, hideArrow } = styles;
    const [renderKey, setRenderKey] = useState('landing');

    useEffect(() => {
        console.log(renderKey)

        if (scrollTop !== 0) {
            if (scrollTop === offsetHeight) setRenderKey('only_down');
            if (scrollTop > offsetHeight && scrollTop < offsetHeight * 3) setRenderKey('down_up');
            if (scrollTop === offsetHeight * 3) setRenderKey('only_up');
        } else if (scrollTop < offsetHeight) setRenderKey('landing');

    });

    return (
        <div>
            <div style={renderKey === 'landing' ? showArrow : hideArrow}><LandingArrow /></div>
            <div style={renderKey === 'only_down' ? showArrow : hideArrow}><ArrowDown /></div>
            <div style={renderKey === 'down_up' ? showArrow : hideArrow}><ArrowDownUp /></div>
            <div style={renderKey === 'only_up' ? showArrow : hideArrow}><ArrowUp /></div>
        </div>


        // <div>{renderKey === 'only_down' ? <ArrowDown /> :
        //     renderKey === 'down_up' ? <ArrowDownUp /> :
        //         renderKey === 'only_up' ? <ArrowUp /> : <LandingArrow />}</div>
    );
};

export default SlideIndicator;