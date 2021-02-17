import * as React from "react";
import './index.css';

// components
import Landing from '../components/Landing/Landing';
import What from '../components/What/What';
import Who from '../components/Who/Who';
import How from '../components/How/How';
// import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <div className='parent'>
      <section className='child'><Landing /></section>
      <section className='child'><What /></section>
      <section className='child'><Who /></section>
      <section className='child'><How /></section>
      {/* <section className='footer'><Footer /></section> */}
    </div>
  );
};

export default IndexPage;
