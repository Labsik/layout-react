import React from 'react';
import Article from '../Articles/Article/Article';
import './MainArticle.css';

const MainArticle = () => {
  return (
    <div className='article-main'>
      <div className='article-content'>
        <img
          className='article-image'
          alt='main img'
          src='https://source.unsplash.com/500x300/?doctor'
        />
        <p className='article-content-title'>Clinical trials</p>
        <div className='article-content-info'>
          <span>
            <i className='fa fa-bell'></i>
          </span>
          <span className='count'>12</span>
        </div>
      </div>

      <Article
        topic='Therapu guidlines'
        description='lorem ipsum'
        tags='#Category #COVID #Oncology'
        title='Chimeric Antigen Receptor T Cell Therapy During the COVID-19 Pandemic'
        date='Oct 7'
        timeToRead='6'
      />
    </div>
  );
};

export default MainArticle;
