import React from 'react'
import coat from "../img/home-page-fur-coat.png";
import jacket from "../img/home-page-jacket.png";
import cardigan from "../img/home-page-cardigan.png";
import "./home-module.scss";
import New from './New';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-bg'>
        <img className='home-bg-img col-4' src= {cardigan} />
        <img className='home-bg-img col-4' src={jacket} />
        <img className='home-bg-img col-4' src={coat} />
      </div>
      <div className='home-text'>
        <h1 className='home-title'>New collection</h1>
        <hr />
        <Link to='/catalog' className='home-btn'>Go shopping</Link>
      </div>
      <New id="new" />
    </div>
  )
}

export default Home