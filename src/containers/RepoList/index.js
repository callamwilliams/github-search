import React from 'react';
import { connect } from 'react-redux';

import RepoItem from '../../components/RepoItem';
import Pagination from '../Pagination';
import Filter from '../Filter';
import * as S from './styles';

const RepoList = ({ repos, loading, error }) => {
  if (_.isEmpty(repos)) return null;

  return (
    <S.Repos>
      <Filter />
      {repos &&
        repos.map(item => {
          return <RepoItem key={item.id} item={item} />;
        })}
      <Pagination />
    </S.Repos>
  );
};

function mapStateToProps(state) {
  const { data, loading, error } = state.repos;

  return {
    repos: data,
    loading: loading,
    error: error.message
  };
}
export default connect(mapStateToProps)(RepoList);
