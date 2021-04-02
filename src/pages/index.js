import * as React from 'react';
import { useEffect, useState } from 'react';
import './index.css';

// components
import Landing from '../components/Landing/Landing';
import What from '../components/What/What';
import Who from '../components/Who/Who';
import How from '../components/How/How';
import SlideIndicator from '../components/SlideIndicator/SlideIndicator';

const IndexPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);

  useEffect(() => {
    const parentEl = document.getElementById('parent_id');
    
    const onScroll = e => {
      setOffsetHeight(e.target.offsetHeight);
      setScrollTop(e.target.scrollTop);
    };
  
    parentEl.addEventListener("scroll", onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <div className='parent' id='parent_id'>
        <section className='child'><Landing /></section>
        <section className='child'><What /></section>
        <section className='child'><Who /></section>
        <section className='child'><How /></section>
        
        {/* <SlideIndicator scrollTop={scrollTop} offsetHeight={offsetHeight} /> */}
      </div>
    </div>
  );
};


export default IndexPage;
