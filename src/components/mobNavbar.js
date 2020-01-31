import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { bpMaxSm } from '../lib/breakpoints';

const MobNavbar = () => {

    const [isToggleEnabled, setToggle] = useState(false);

    const toggle = () => {
        setToggle(!isToggleEnabled);
    }

    return(
        <>
            { isToggleEnabled && (
            <div css={css`
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: #fff;
                justify-content: center;
                flex-flow: column;
                display: none;
                ${bpMaxSm} {
                    display: flex;
                }
            `}>
                <ul css={css`
                    list-style: none; 
                    padding: 0px;
                    li {
                        padding: 10px;
                        text-align: center;
                    }
                    a {
                        color: #004d40;
                        text-decoration: none;
                        font-size: 22px;
                        padding: 10px;
                        border-radius: 5px;
                        display: inline-block;
                    }
                    a:hover {
                        background: #e0f2f1;
                    }
                    a.active {
                        color: #009688;
                    }
                `}>
                    <li><Link activeClassName="active" to="/">Home</Link> </li>
                    <li><Link activeClassName="active" to="/blog">Blog</Link> </li>
                    <li><Link activeClassName="active" to="/about">About</Link> </li>
                    <li><Link activeClassName="active" to="/contact">Contact</Link> </li>
                </ul>
            </div>
            ) }
            <button onClick={toggle} css={css`
            display: none;
            cursor: pointer;
            border: none;
            background: transparent;
            outline: none;
            position: absolute;
            top: 20px;
            right: 20px;
            height: 50px;
            ${bpMaxSm} {
                display: block
            }
           `}>
            <div css={css`
                position: relative;
                margin-top: -15px;
                display: block;
                background: ${isToggleEnabled ? 'transparent;' : '#009688;'}
                height: 4px;
                width: 35px;
                ::after{
                    content: "";
                    position: absolute;
                    top: 10px;
                    left: 0px;
                    width: 35px;
                    background: #009688;
                    height: 4px;
                    transform: ${isToggleEnabled ? 'rotate(-45deg);': 'rotate(0deg);'}
                    transition: transform .3s;
                }
                ::before{
                    content: "";
                    position: absolute;
                    top: ${isToggleEnabled ? '10px;' : '20px;'}
                    left: 0px;
                    width: 35px;
                    background: #009688;
                    height: 4px;
                    transform: ${isToggleEnabled ? 'rotate(45deg);': 'rotate(0deg);'}
                    transition: transform .3s;
                }
            
            `}>
            </div>
            </button>            
        </>)
}

export default MobNavbar;