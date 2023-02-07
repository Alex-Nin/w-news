import React from 'react';
import WebThree from '../../assets/image-web-3-desktop.png';
import WebThreeMobile from '../../assets/image-web-3-mobile.jpg';
import BottomRow from './BottomRow';
import { Link } from 'react-router-dom';

import './HomePage.css';
const HomePage = () => {

  return (
    <>
        <section>
          <div className="article-left">
            <img className='desktop-image' alt="web-3.0" src={WebThree}/>
            <img className='mobile-image' alt="web-3.0" src={WebThreeMobile}/>
            <div className='article-left-text'>
              <h2>The Bright Future of Web 3.0?</h2>
              <div className='article-left-description'>
                <p>
                  We dive into the next evolution of the web that
                  claims to put the power of the platforms back
                  into the hands of the people. But is it really
                  fulfilling its promise?
                </p>
                <Link to='new'><button id='article-left-btn'>READ MORE</button></Link>
              </div>
            </div>
          </div>
          <aside>
            <h2>New</h2>
            <div className='new-item'>
              <Link to='new'><h3>Hydrogen VS Electric Cars</h3></Link>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className='new-item'>
              <Link to='new'><h3>The Downside of AI Artistry</h3></Link>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className='new-item'>
              <Link to='new'><h3>Is VC Funding Drying Up?</h3></Link>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </aside>
        </section>
        <BottomRow />
    </>
  )
}

export default HomePage
