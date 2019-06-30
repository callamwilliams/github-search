import styled from 'styled-components';
import { device } from '../global';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
