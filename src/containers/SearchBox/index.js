import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from './styles';
import UserType from '../UserType';
import LogoSVG from '../../assets/img/octocat.svg';

import { getUser } from '../../store/actions/user';
import { getRepos } from '../../store/actions/repos';

const SearchBox = ({ getUser, getRepos, activeUserType }) => {
  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  const onSubmit = e => {
    e.preventDefault();
    getRepos(input, null, activeUserType);
    getUser(input);
    clearInput();
  };

  return (
    <S.Wrapper>
      <S.Inner>
        <S.Logo src={LogoSVG} cacheGetRequests />
        <S.FormWrapper>
          <S.SearchForm onSubmit={onSubmit}>
            <S.SearchInput
              type="text"
              value={input}
              onChange={onChange}
              onFocus={clearInput}
              placeholder="Type a username to begin"
            />
            <S.SearchButton type="submit">Submit</S.SearchButton>
          </S.SearchForm>
          <UserType />
        </S.FormWrapper>
      </S.Inner>
    </S.Wrapper>
  );
};

SearchBox.propTypes = {
  activeUserType: PropTypes.string,
  getUser: PropTypes.func,
  getRepos: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    activeUserType: state.userType.activeUserType
  };
}

export default connect(
  mapStateToProps,
  { getUser, getRepos }
)(SearchBox);
