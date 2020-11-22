import React from 'react';
import './Article.css';

const Article = ({ topic, description, tags, title, date, timeToRead }) => {
  return (
    <div className='article'>
      <h5 className='topic-article'>{topic}</h5>
      <span className='desc'>{description}</span>
      <span className='tags'>{tags}</span>
      <h2 className='title'>{title}</h2>
      <p className='additional-info'>
        {date} &middot; {timeToRead} min read &middot; &thinsp;
        <span className='bookmark'>
          <i className='fa fa-bookmark-o'></i> Add to bookmarks
        </span>
      </p>
    </div>
  );
};

export default Article;
