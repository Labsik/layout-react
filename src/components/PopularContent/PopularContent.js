import React, { useState } from 'react';
import ContentItem from './ContentItem/ContentItem';
import './PopularContent.css';

const PopularContent = () => {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState([
    {
      id: 1,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'Clinical trials',
      count: 12,
    },
    {
      id: 2,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'COVID-19',
      count: 61,
    },

    {
      id: 3,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'Therapy',
      count: 23,
    },
    {
      id: 4,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'Medical books',
      count: 12,
    },
    {
      id: 5,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'Lorem',
      count: 41,
    },
    {
      id: 6,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'News',
      count: 21,
    },
    {
      id: 7,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'Diagnostic',
      count: 18,
    },
    {
      id: 8,
      img: 'https://source.unsplash.com/800x599/?doctor',
      title: 'Radiology',
      count: 31,
    },
  ]);

  return (
    <section className='popular'>
      <div className='popular-title'>
        <h2>most popular</h2>
        <span className='all'>See All</span>
      </div>

      <div className='popular-content'>
        {content.map((item) => {
          return (
            <ContentItem
              key={item.id}
              title={item.title}
              img={item.img}
              count={item.count}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularContent;
