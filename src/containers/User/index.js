import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as S from './styles';

const User = ({ user, loading }) => {
  const { login, name, avatar_url, public_repos, followers } = user;
  return (
    <S.Wrapper>
      {loading && _.isEmpty(user) ? (
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

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number
  }),
  loading: PropTypes.bool
};

function mapStateToProps(state) {
  const { data, loading } = state.user;
  return {
    user: data,
    loading
  };
}
export default connect(mapStateToProps)(User);
