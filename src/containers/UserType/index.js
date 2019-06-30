import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from './styles';
import { setUserType } from '../../store/actions/userType';

const UserType = ({ setUserType }) => {
  const [activeType, setActiveType] = useState('username');

  const onChange = e => {
    const type = e.target.value;
    setActiveType(type);
    setUserType(type);
  };

  useEffect(() => {
    setUserType();
  }, [setUserType]);

  return (
    <S.RadioGroup>
      <S.RadioItem>
        <label htmlFor="username">Username</label>
        <input
          type="radio"
          name="search_type"
          id="username"
          value="username"
          checked={activeType === 'username'}
          onChange={onChange}
        />
      </S.RadioItem>
      <S.RadioItem>
        <label htmlFor="organisation">Organisation</label>
        <input
          type="radio"
          name="search_type"
          id="organisation"
          value="organisation"
          checked={activeType === 'organisation'}
          onChange={onChange}
        />
      </S.RadioItem>
    </S.RadioGroup>
  );
};

UserType.propTypes = {
  setUserType: PropTypes.func
};

export default connect(
  null,
  { setUserType }
)(UserType);
