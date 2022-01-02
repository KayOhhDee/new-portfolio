import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.button`
    outline: none;
    background-color: var(--color-tertiary);
    border: 0;
    color: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.size !== 'small' ? '48px' : '38px'};
    width: ${props => props.size !== 'small' ? '132px' : '88px'};
    font-size: var(--font-size-xsmall);
    font-family: var(--font-secondary);
    border-radius: .3rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--color-quaternary);
    }

    a {
        color: var(--color-secondary) !important;
        font-size: var(--font-size-xsmall) !important;
        font-family: var(--font-secondary) !important;
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        width: inherit;
    }

`

const Button = ({children, size}) => {
    return (
        <Wrapper size={size}>
            {children}
        </Wrapper>
    )
}

export default Button
