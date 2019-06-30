import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const device = {
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`
};

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html {
    width: 100%;
    height: 100%;
    margin: 0 0 1px;
    padding: 0;
    background: $base-secondary;
    box-sizing: border-box;
    font-synthesis: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 16px;
    width: 100%;
    height: auto;
    margin: 0;
    background-color: #fff;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: left;
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }

    font-synthesis: inherit;
    font-smoothing: inherit;
  }

  address {
    font-style: inherit;
  }

  figure {
    margin: 0;
  }

  .touch {
    cursor: pointer;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
    transition: all 100ms ease-out;

    &:hover {
      opacity: 0.7;
    }
  }

  p {
    margin: 0 0 10px;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: $reg;
    line-height: inherit;
  }

  ul {
    padding: 0;
  }

  li {
    font-family: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px;
    font-family: inherit;
    font-weight: $reg;
  }

  ::selection {
    background-color: $brand-primary;
    color: $base-secondary;
  }

  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 30px 0;
  border-radius: 0;

  > li {
    display: inline;
    > a,
    > span {
      position: relative;
      float: left;
      padding: 10px;
      margin-left: -1px;
      line-height: 20px;
      color: #000;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #eee;

      &:hover,
      &:focus {
        z-index: 2;
        color: #fff;
        background-color: #6cc644;
        border-color: #6cc644;
        cursor: pointer;
      }
    }
    &:first-child {
      > a,
      > span {
        margin-left: 0;
      }
    }
  }

  > .active > a,
  > .active > span {
    &,
    &:hover,
    &:focus {
      z-index: 3;
      color: #fff;
      cursor: default;
      background-color: #4078c0;
      border-color: #4078c0;
    }
  }

  > .disabled {
    > span,
    > span:hover,
    > span:focus,
    > a,
    > a:hover,
    > a:focus {
      color: #d3d3d3;
      cursor: disabled;
      background-color: #ececec;
      border-color: #ececec;
    }
  }
}

`;
