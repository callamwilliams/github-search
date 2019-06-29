import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as S from './styles';
import ErrorMessage from '../../components/ErrorMessage';

const User = ({ user, loading, error }) => {
  // TODO: make a global error handler
  if (error) return <ErrorMessage>Could not find that user</ErrorMessage>;
  if (_.isEmpty(user)) return null;

  const { login, name, avatar_url, public_repos, followers } = user;
  return (
    <S.Wrapper>
      <S.UserImage src={avatar_url} alt={name} />
      <S.UserName>{name}</S.UserName>
      <S.UserList>
        <li>
          <h2>{login}</h2>
        </li>
        <li>Repo Count: {public_repos}</li>
        <li>Followers: {followers}</li>
      </S.UserList>
    </S.Wrapper>
  );
};

function mapStateToProps(state) {
  const { data, loading, error } = state.user;
  return {
    user: data,
    loading: loading,
    error: error.message
  };
}
export default connect(mapStateToProps)(User);
