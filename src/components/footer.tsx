import * as React from 'react';
import styled from 'styled-components';

const logo = require('../logo.svg');

interface FooterProps {

    className?: string;

}

const Footer: React.StatelessComponent<FooterProps> = (props: FooterProps) => (
    <div className={props.className}>
        <img height="42" width="42" src={logo} />
    </div>
);

const StyledFooter = styled(Footer)`
    width: 100%;
    background: red;
`;

export default StyledFooter;