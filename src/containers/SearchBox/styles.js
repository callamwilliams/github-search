import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { device } from '../../global';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: #24292e;
  color: #ffffff;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Logo = styled(SVG)`
  display: block;
  width: 45px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }

  svg {
    width: 100%;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-left: auto;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: #fff;
  background-position: right 8px center;
  background-repeat: no-repeat;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  color: #24292e;
  font-size: 16px;
  line-height: 20px;
  min-height: 34px;
  outline: none;
  padding: 6px 8px;
  vertical-align: middle;

  @media ${device.tablet} {
    max-width: 500px;
    margin-left: 20px;
  }
`;

export const SearchButton = styled.button`
  position: relative;
  display: inline-block;
  min-width: 100px;
  padding: 3px 10px;
  background-position: -1px -1px;
  background-repeat: repeat-x;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  border-radius: 0.25em;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  appearance: none;
  font-weight: 600;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
`;
