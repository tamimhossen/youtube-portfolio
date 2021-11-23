import React from 'react';
import './Intro.css';
import Me from '../../img/me.png';

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Tamim Hossen</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Programmer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Graphics Designer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                            I design and develope website for customer of all sizes website. 
                            I'm special in React js, I try my best for making my customer satisfied.
                            I love to code. It's My lifetime passion
                            customer satisfied.
                    </p>
                </div>
            </div>
            <div className="i-right">
            <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;