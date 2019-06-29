import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Repo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #eee;
  list-style: none;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: left;
  a {
    margin-right: auto;
    color: #0366d6;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  width: 100%;
`;

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
