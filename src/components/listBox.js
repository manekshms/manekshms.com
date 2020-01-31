import React from 'react';
import { css } from '@emotion/core';

const ListBox = (props) => {
    return (
        <div css={css`
            padding: 10px;
            border: 1px solid ${props.borderColor? props.borderColor: '#ddd' };
            background: ${props.background? props.background : 'transparent'};
            margin-bottom: 20px;
            border-radius: 5px;}
        `} >
            {props.title && (<h3>{props.title}</h3>)}
            {props.content && <p>{props.content}</p> }
            {props.children}
        </div>
    );
}

export default ListBox;