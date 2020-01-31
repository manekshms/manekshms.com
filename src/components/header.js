import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/manekshms.png';
import { bpMaxSm } from '../lib/breakpoints';

const NavLink = styled(Link)`
    padding: 10px;
    margin-right: 20px;
    text-decoration: none;
    border-radius: 3px;
    color: #000;
    &:hover {
        background: #e0f2f1;
        color: #00695c;
    }
    &.active {
        color: #00695c;
    }
`;

const Header = () => {
    return (
        <header css={css`
            padding: 15px 0px;
            margin-bottom: 30px;
            border-bottom: 1px solid #ddd;
        `}>
            <div css={css`
                display: flex;
                width: 750px; 
                margin: auto;
                justify-content: space-between;
                box-sizing: border-box;
                ${bpMaxSm}{
                    width: 100%;
                    padding: 0px 20px;
                }
            `}>
                <div>
                    <Link css={css`display: flex; align-items: center; text-decoration: none; color: #000;`} to="/">
                        <img src={logoImg} alt="logo" css={css`width: 50px; height: 50px; border-radius: 80px; margin-right: 10px;`} />
                        <span css={css`font-size: 22px;`}>Maneksh M S</span>
                    </Link>
                </div>
                <div css={css`
                    ${bpMaxSm} {
                        display: none;
                    } 
                `}>
                    <nav css={css`height: 100%;`}>
                        <ul css={css`
                            height: 100%;
                            list-style: none; 
                            display: flex;
                            margin: 0px;
                        `}>
                            <li css={css`display: flex; height: 100%; align-items: center;`}>
                                <NavLink to="/" activeClassName="active" >Home</NavLink>
                            </li>
                            <li css={css`display: flex; height: 100%; align-items: center;`} >
                                <NavLink to="/blog" activeClassName="active" >Blog</NavLink>
                            </li>
                            <li css={css`display: flex; height: 100%; align-items: center;`} >
                                <NavLink to="/about" activeClassName="active" >About</NavLink>
                            </li>
                            <li css={css`display: flex; height: 100%; align-items: center;`} >
                                <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;