import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
    <div>
      <div>
        <label>Username</label>
        <input
          type="radio"
          name="search_type"
          value={'username'}
          checked={activeType === 'username'}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Organisation</label>
        <input
          type="radio"
          name="search_type"
          value={'organisation'}
          checked={activeType === 'organisation'}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default connect(
  null,
  { setUserType }
)(UserType);
