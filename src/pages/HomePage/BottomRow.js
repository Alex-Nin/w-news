import React from 'react'
import RetroPc from '../../assets/image-retro-pcs.jpg';
import Keyboard from '../../assets/image-top-laptops.jpg';
import Ps4Controller from '../../assets/image-gaming-growth.jpg';
import { Link } from 'react-router-dom';

const BottomRow = () => {
  return (
    <div className='bottom-row'>
      <div className='news-item'>
        <img alt='Retro-Pc' src={RetroPc} />
        <div>
            <h2>01</h2>
            <Link to='trending'><h3>Revivng Retro PCs</h3></Link>
            <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className='news-item'>
        <img alt='Keyboard' src={Keyboard} />
        <div>
            <h2>02</h2>
            <Link to='trending'><h3>Top 10 Laptops of 2022</h3></Link>
            <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className='news-item'>
        <img alt='Ps4-Controller' src={Ps4Controller} />
        <div>
            <h2>03</h2>
            <Link to='trending'><h3>The Growth of Gaming</h3></Link>
            <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  )
}

export default BottomRow
