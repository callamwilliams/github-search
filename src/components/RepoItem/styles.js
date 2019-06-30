import styled from 'styled-components';

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
  padding: 30px 10px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

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
