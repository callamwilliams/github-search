import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from './styles';

const ErrorMessage = ({ as, userError, repoError, children }, ...props) => (
    <>
      {userError && (
        <S.ErrorText as={as} {...props}>
          {userError && 'Could not find that user'}
          {repoError && !userError && 'Could not fetch repos'}
          {children}
        </S.ErrorText>
      )}
    </>
  );

ErrorMessage.defaultProps = {
  as: 'span'
};

ErrorMessage.propTypes = {
  as: PropTypes.string,
  userError: PropTypes.string,
  repoError: PropTypes.string,
  children: PropTypes.element
}

function mapStateToProps(state) {
  return {
    userError: state.user.error,
    repoError: state.repos.error
  };
}
export default connect(mapStateToProps)(ErrorMessage);
