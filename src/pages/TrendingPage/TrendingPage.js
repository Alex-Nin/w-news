import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newNewsDetails, trendingArticleDetails } from '../../components/ArticlesAndInfo';
import './TrendingPage.css';

const TrendingPage = () => {


  const [style, setStyle] = useState("toggle-visible");
  const [contentWidth, setContentWidth] = useState("three-quarter-width");

  const toggleMenu = () => {
    setStyle("toggle-hidden");
    setContentWidth("full-width");
  }





  const renderTrendingArticles = (articles) => {
    return articles.map(article =>
      
      <div className='trending-page-item' id={contentWidth}>
        <div className='trending-article-position-title-container'>
          <h2 className='trending-article-position'>0{article.id}:</h2>
          <h2 className='trending-article-title'>{article.title}</h2>
        </div>
        <img alt="news-trending-item" src={article.image} />
        <p><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised 
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised 
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.</p>
      </div>
    )
  }

  const renderSideLayout = (details) => {
    return details.map(newNewsDetails =>
      <>
        <div className="new-side-item">
            <Link to="../new"><h3 className="new-side-item-title">{newNewsDetails.title}</h3></Link>
            <p>{newNewsDetails.info}</p>
        </div>
      </>
        
    )
  }


  return (
    <>
      <h1 id={contentWidth}>Trending</h1>
      {renderTrendingArticles(trendingArticleDetails)}

      <div className="new-news-side" id={style}>
        <svg onClick={toggleMenu} className="close-menu-icon" width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#fffdfa" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
        <h2 className="new-news-title">New</h2>
        {renderSideLayout(newNewsDetails)}
      </div>
    </>
  )
}

export default TrendingPage
