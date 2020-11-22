import React from 'react';
import Articles from './Articles/Articles';

import MainArticle from './MainArticle/MainArticle';
import './Main.css';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
  return (
    <section className='main'>
      <MainArticle />
      <Articles />
      <Sidebar />
    </section>
  );
};

export default Main;
