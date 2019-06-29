import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as S from './styles';
import LogoSVG from '../../assets/img/octocat.svg';

import { getUser } from '../../store/actions/user';
import { getRepos } from '../../store/actions/repos';

const SearchBox = ({ getUser, getRepos }) => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    getRepos(input);
    getUser(input);
    clearInput();
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <S.Wrapper>
      <S.Logo src={LogoSVG} cacheGetRequests />
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
    </S.Wrapper>
  );
};

export default connect(
  null,
  { getUser, getRepos }
)(SearchBox);
