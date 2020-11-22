import React, { useState } from 'react';
import Topic from './Topic/Topic';
import './Topics.css';

const Topics = () => {
  // eslint-disable-next-line no-unused-vars
  const [topics, setTopics] = useState([
    { id: 1, name: 'Pharmacy' },
    { id: 2, name: 'Surgery', checked: true },
    { id: 3, name: 'Radiology' },
    { id: 4, name: 'Medical Books' },
    { id: 5, name: 'Disease Monographs' },
    { id: 6, name: 'COVID-19' },
    { id: 7, name: 'Therapy', checked: true },
    { id: 8, name: 'News' },
    { id: 9, name: 'Clinical trials' },
    { id: 10, name: 'Whatever whatever whatever' },
    { id: 11, name: 'Lorem ipsum' },
    { id: 12, name: 'Other' },
  ]);

  return (
    <section className='topics'>
      <h3>topics to follow</h3>

      <div className='topic-list'>
        {topics.map((topic) => {
          return (
            <Topic key={topic.id} name={topic.name} checked={topic.checked} />
          );
        })}
      </div>
      <hr />
    </section>
  );
};

export default Topics;
