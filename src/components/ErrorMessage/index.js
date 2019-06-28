import React from 'react';
import * as S from './styles';

const ErrorMessage = ({ as, ...props }) => {
  return (
    <S.ErrorText as={as} {...props}>
      {props.children}
    </S.ErrorText>
  );
};

ErrorMessage.defaultProps = {
  as: 'span'
};

export default ErrorMessage;
