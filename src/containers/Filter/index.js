import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as S from './styles';
import { setFilterType } from '../../store/actions/filterType';
import { getRepos } from '../../store/actions/repos';

const Filter = ({ username, activeUserType, setFilterType, getRepos }) => {
  const [activeFilter, setActiveFilter] = useState('full_name');

  const onChange = e => {
    const value = e.target.value;
    setActiveFilter(value);
    setFilterType(value);
    getRepos(username, 0, activeUserType, value);
  };

  useEffect(() => {
    setFilterType();
  }, []);

  return (
    <S.Select onChange={onChange} value={activeFilter}>
      <option>Full Name</option>
      <option>Created</option>
      <option>Updated</option>
      <option>Pushed</option>
    </S.Select>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.data.login,
    activeUserType: state.userType.activeUserType
  };
}

export default connect(
  mapStateToProps,
  { setFilterType, getRepos }
)(Filter);
