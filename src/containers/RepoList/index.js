import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Pagination from '../Pagination';
import * as S from './styles';
import ForkSVG from '../../assets/img/fork.svg';
import IssuesSVG from '../../assets/img/issues.svg';
import UpdatedSVG from '../../assets/img/updated.svg';

moment.locale('en-gb');

const RepoList = ({ repos, nextPage, loading, error }) => {
  if (_.isEmpty(repos)) return null;

  return (
    <S.Repos>
      {repos &&
        repos.map(item => {
          return (
            <S.Repo key={item.id}>
              <a href={item.html_url} title={`view more about ${item.name}`}>
                <h3>{item.name}</h3>
              </a>
              <S.Description>{item.description}</S.Description>
              <S.IconList>
                {item.fork && (
                  <S.Item>
                    <S.Icon src={ForkSVG} cacheGetRequests />
                  </S.Item>
                )}
                <S.Item>⭐{item.stargazers_count}</S.Item>
                <S.Item>
                  <S.Icon src={IssuesSVG} cacheGetRequests />
                  {item.open_issues_count}
                </S.Item>
                <S.Item>
                  <S.Icon src={UpdatedSVG} cacheGetRequests />
                  {moment([item.updated_at]).fromNow()}
                </S.Item>
              </S.IconList>
            </S.Repo>
          );
        })}
      <Pagination />
    </S.Repos>
  );
};

function mapStateToProps(state) {
  const { data, nextPage, loading, error } = state.repos;
  return {
    repos: data,
    nextPage: nextPage,
    loading: loading,
    error: error.message
  };
}
export default connect(mapStateToProps)(RepoList);
