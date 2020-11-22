import React, { useState } from 'react';
import './Articles.css';
import Article from './Article/Article';

const Articles = () => {
  // eslint-disable-next-line no-unused-vars
  const [articles, setArticle] = useState([
    {
      id: 1,
      topic: 'Therapu guidlines',
      description: 'lorem ipsum',
      tags: ['#Category', '#COVID', '#Oncology'],
      title:
        'Chimeric Antigen Receptor T Cell Therapy During the COVID-19 Pandemic',
      date: 'Oct 7',
      timeToRead: '7',
    },
    {
      id: 2,
      topic: 'Therapu guidlines',
      description: 'lorem ipsum',
      tags: ['#Category', '#COVID', '#Oncology'],
      title:
        'Chimeric Antigen Receptor T Cell Therapy During the COVID-19 Pandemic',
      date: 'Oct 7',
      timeToRead: '7',
    },
    {
      id: 3,
      topic: 'Therapu guidlines',
      description: 'lorem ipsum',
      tags: ['#Category', '#COVID', '#Oncology'],
      title:
        'Chimeric Antigen Receptor T Cell Therapy During the COVID-19 Pandemic',
      date: 'Oct 7',
      timeToRead: '7',
    },
  ]);

  return (
    <div className='articles'>
      <div className='article'>
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              topic={article.topic}
              description={article.description}
              tags={article.tags.join(' ')}
              title={article.title}
              date={article.date}
              article={article.timeToRead}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
