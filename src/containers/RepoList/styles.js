import styled from 'styled-components';
import { device } from '../../global';

export const Repos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 1 100%;
  padding: 0 20px;

  @media ${device.tablet} {
    flex: 0 1 75%;
    padding: 0 0;
  }
`;
