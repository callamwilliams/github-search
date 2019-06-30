import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
  }, []);

  return (
    <S.RadioGroup>
      <S.RadioItem>
        <label>Username</label>
        <input
          type="radio"
          name="search_type"
          value={'username'}
          checked={activeType === 'username'}
          onChange={onChange}
        />
      </S.RadioItem>
      <S.RadioItem>
        <label>Organisation</label>
        <input
          type="radio"
          name="search_type"
          value={'organisation'}
          checked={activeType === 'organisation'}
          onChange={onChange}
        />
      </S.RadioItem>
    </S.RadioGroup>
  );
};

export default connect(
  null,
  { setUserType }
)(UserType);
