import * as React from 'react';
import styled from 'styled-components';

const logo = require('../logo.png');

interface HeadProps {

    theme?: object;
    className?: string;

}

const Head: React.StatelessComponent<HeadProps> = (props: HeadProps) => (
    <div className={props.className}>
        <img height="75" width="150" src={logo}/>
    </div>
);

const StyledHead = styled(Head)`
	margin-top: 0px;
    width: 100%;
    background: ${props => props.theme.secondaryColor};
`;

export default StyledHead;