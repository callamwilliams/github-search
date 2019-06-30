import styled from 'styled-components';
import { device } from '../../global';

export const Wrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;

  @media ${device.tablet} {
    flex: 0 1 25%;
    padding: 10px 10px 10px 0;
  }
`;

export const UserName = styled.h1`
  width: 100%;
  font-size: 26px;
  line-height: 30px;
`;

export const UserList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 5px;
  }
`;

export const UserImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  object-fit: contain;
`;
