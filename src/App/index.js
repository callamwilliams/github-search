import React from 'react';
import SearchBox from '../containers/SearchBox';
import RepoList from '../containers/RepoList';
import User from '../containers/User';

const App = () => {
  return (
    <main>
      <SearchBox />
      <User />
      <RepoList />
    </main>
  );
};

export default App;
