import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RepoItem from '../../components/RepoItem';
import Pagination from '../Pagination';
import Filter from '../Filter';
import * as S from './styles';

const RepoList = ({ repos, loading }) => (
  <S.Repos>
    {loading && _.isEmpty(repos) ? (
      <p>Loading...</p>
    ) : (
      <>
        <Filter />
        {repos && repos.map(item => <RepoItem key={item.id} item={item} />)}
        <Pagination />
      </>
    )}
  </S.Repos>
);

RepoList.propTypes = {
  repos: PropTypes.array,
  loading: PropTypes.bool
};

function mapStateToProps(state) {
  const { data, loading } = state.repos;

  return {
    repos: data,
    loading
  };
}
export default connect(mapStateToProps)(RepoList);
