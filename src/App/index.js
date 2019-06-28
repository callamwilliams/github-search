import React from 'react';
import * as S from './styles';
import SearchBox from '../containers/SearchBox';
import User from '../containers/User';

const App = () => {
  return (
    <main>
      <SearchBox />
      <User />
    </main>
  );
};

export default App;
