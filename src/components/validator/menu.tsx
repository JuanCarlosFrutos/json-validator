import * as React from 'react';
import styled from 'styled-components';

interface MenuProps {

    className?: string;
    children?: any;
    theme?: any;

}

const Menu: React.StatelessComponent<MenuProps> = (props: MenuProps) => (
    <div className={props.className}>
        {props.children}
    </div>
);

const StyledMenu = styled(Menu)`

    display: flex;
    flex-direction: column;

    button {
        background: ${props => props.theme.secondaryColor};
        color: black;
        font-size: 1.5em;
        padding: 0.25em 1em;
        margin: 0.5em;
        margin-left: 1em;
        width: 80%;
        border-radius: 6px;
        border-bottom: 3px solid grey;
        border-right: 3px solid grey;
    }

    button:active {
        border-top: 3px solid grey;
        border-left: 3px solid grey;
        border-bottom: none;
        border-right: none;
    }

    button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

export default StyledMenu;