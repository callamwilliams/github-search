import React from 'react';
import SearchBox from '../containers/SearchBox';
import RepoList from '../containers/RepoList';
import User from '../containers/User';
import ErrorMessage from '../containers/ErrorMessage';
import * as S from './styles';

const App = () => {
  return (
    <main>
      <SearchBox />
      <ErrorMessage />
      <S.Wrapper>
        <User />
        <RepoList />
      </S.Wrapper>
    </main>
  );
};

export default App;
