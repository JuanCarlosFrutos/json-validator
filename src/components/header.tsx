import * as React from 'react';
import styled from 'styled-components';

// const logo = require('../logo.png');

interface HeadProps {

    theme?: object;
    className?: string;
    error?: boolean;

}

const Head: React.StatelessComponent<HeadProps> = (props: HeadProps) => (
    <div className={props.className}>
        <label>JSON
        	{
        		props.error===false &&
				<span>✔</span>
        	}
        	{
        		props.error===true &&
				<span>✘</span>        		
        	}

        </label>
    </div>
);

const StyledHead = styled(Head)`
	
	span {
		color: ${props => props.error ? 'red' : 'green'};
	}

	font-size: 4em;
	font-weight: bold;
	display: flex;
	justify-content: center;
	margin-top: 0px;
    width: 100%;
    background: ${props => props.theme.secondaryColor};
`;

export default StyledHead;