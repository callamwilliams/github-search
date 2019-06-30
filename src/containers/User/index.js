import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as S from './styles';

const User = ({ user, loading }) => {
  if (_.isEmpty(user)) return null;

  const { login, name, avatar_url, public_repos, followers } = user;
  return (
    <S.Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <S.UserImage src={avatar_url} alt={name} />
          <S.UserName>{name}</S.UserName>
          <S.UserList>
            <li>
              <h2>{login}</h2>
            </li>
            <li>Repo Count: {public_repos}</li>
            <li>Followers: {followers}</li>
          </S.UserList>
        </>
      )}
    </S.Wrapper>
  );
};

function mapStateToProps(state) {
  const { data, loading } = state.user;
  return {
    user: data,
    loading: loading
  };
}
export default connect(mapStateToProps)(User);
