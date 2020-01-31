import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';

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
  const title = props.title || "Maneksh M S";
  const description = props.description || "Maneksh M S is a software developer living in India. Interested in Node.js and Javascript Frontend tools.";
  return (
    <div css={css`display: flex; flex-flow: column; justify-content: space-between; min-height: 100; height: 100%;`}>
      <Helmet
        title={title}
        meta={[{name: `description`, content: description }]}
      >
        <meta name="theme-color" content="#e0f2f1"></meta>
      </Helmet>
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