import * as React from 'react';
import styled from 'styled-components';

const logo = require('../logo.png');

interface HeadProps {

    theme?: object;
    className?: string;

}

const Head: React.StatelessComponent<HeadProps> = (props: HeadProps) => (
    <div className={props.className}>
        <img height="190" width="190" src={logo}/>
    </div>
);

const StyledHead = styled(Head)`
    width: 100%;
    background: ${props => props.theme.primaryColor};
`;

export default StyledHead;