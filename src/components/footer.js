import React from 'react';
import { css } from '@emotion/core';

const Footer = () => {
    return (
        <footer css={css`
            text-align: center;
            border-top: 1px solid #ddd;
            p {
                font-size: 12px;
                color: #757575;
                margin: 0px;
            }
            a {
                text-decoration: none;
                color: #009688;
                :hover {
                    color: #4db6ac;
                }
            }
        `} >
            <p>&copy; Copyright 2020 <a href="http://manekshms.com" >Maneksh M S</a></p>
        </footer>
    )
}

export default Footer;