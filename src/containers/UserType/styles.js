import styled from 'styled-components';

export const RadioGroup = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 10px;
`;

export const RadioItem = styled.div`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  label {
    margin-right: 5px;
  }
`;
