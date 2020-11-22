import React from 'react';
import './ContentItem.css';

const ContentItem = ({ title, img, count }) => {
  return (
    <div className='content'>
      <img className='content-image' alt='content' src={img} />
      <p className='content-title'>{title}</p>
      <div className='content-info'>
        <span>
          <i className='fa fa-bell'></i>
        </span>
        <span className='count'>{count}</span>
      </div>
    </div>
  );
};

export default ContentItem;
