import React from 'react';
import { connect } from 'react-redux';
import * as S from './styles';

const ErrorMessage = ({ as, userError, repoError, ...props }) => {
  return (
    <>
      {userError && (
        <S.ErrorText as={as} {...props}>
          {userError && 'Could not find that user'}
          {repoError && !userError && 'Could not fetch repos'}
          {props.children}
        </S.ErrorText>
      )}
    </>
  );
};

ErrorMessage.defaultProps = {
  as: 'span'
};

function mapStateToProps(state) {
  return {
    userError: state.user.error,
    repoError: state.repos.error
  };
}
export default connect(mapStateToProps)(ErrorMessage);
