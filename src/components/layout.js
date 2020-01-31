import React from 'react';
import { Global, css } from '@emotion/core';

import reset from '../lib/reset.css';
import Header from './header';
import Footer from './footer';
import MobNavbar from './mobNavbar';

const globalStyles = css`
  ${reset}
  * {
    font-family: Sans-serif;
  }

  html, body, div#___gatsby , div#___gatsby > div {
    height: 100vh;
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #424242;
  }

  p {
    color: #616161;
    font-size: 18px;
    line-height: 30px;
  }
  ::selection {
    color: #fff;
    background: #00796b;
  }
`;

const Layout = (props) => {
  return (
    <div css={css`display: flex; flex-flow: column; justify-content: space-between; min-height: 100; height: 100%;`}>
      <MobNavbar />
      <Global styles={globalStyles} />
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;