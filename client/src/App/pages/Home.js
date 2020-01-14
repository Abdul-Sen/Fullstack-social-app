import React, { Fragment } from 'react';
import List from './List';

function Home(props)
{
  return (
    <Fragment>
      <p>Home rendering a List Component</p>
      <List></List>
    </Fragment>
  )
}

export default Home;