import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const IconList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const Icon = styled(SVG)`
  display: block;
  width: 15px;
  margin-right: 5px;

  svg {
    width: 100%;
    fill: #333;
  }
`;
