import React from 'react';
import { css } from '@emotion/core';

import { bpMaxSm } from '../lib/breakpoints';

const Container = (props) => {
    return (
        <div css={css`
            width: 750px; 
            margin: auto;
            box-sizing: border-box;
            ${bpMaxSm} {
                width: 100%;
                padding: 0px 20px;
            }
        `}>
            {props.children}
        </div>
    )
}

export default Container;