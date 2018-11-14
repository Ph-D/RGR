import React from 'react';
import ReactDOM from 'react-dom';

import {graphql} from 'react-relay';


import Main from './components/Main';

ReactDOM.render(<Main />,document.getElementById('react'));

console.log(

graphql`
query MyQuery {
    links {
        title
      }
  }
`
);