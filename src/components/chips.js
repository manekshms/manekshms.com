import React from 'react';
import { css } from '@emotion/core';

const Chips = (props) => {
    return (
        <span css={css`
            color: ${props.color? props.color : 'inherit'};
            background: ${props.background? props.background : 'transparent'};
            padding: 5px 8px;
            border-radius: 5px;
            margin-right: 10px;
            font-size: 14px;
            a {
                text-decoration: none;
                color: ${props.color? props.color : 'inherit'};
                :hover {
                    color: ${props.hoverColor? props.hoverColor : 'inherit'};
                }
            }
        `}>{props.children}</span>
    )
}

export default Chips;