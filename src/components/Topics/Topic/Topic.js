import React, { Fragment } from 'react';
import './Topic.css';

const Topic = ({ name, checked }) => {
  return (
    <Fragment>
      <label className='topic'>
        {name}
        <input type='checkbox' defaultChecked={checked} />
      </label>
    </Fragment>
  );
};

export default Topic;
