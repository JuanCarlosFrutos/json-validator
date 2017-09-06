import * as React from 'react';
import styled from 'styled-components';
import * as Select from 'react-select';
import 'react-select/dist/react-select.css';

// const logo = require('../logo.png');

interface HeadProps {

    theme?: object;
    className?: string;
    error?: boolean;
    codeMirrorThemes?: Array<any>;
    handleChangeCodeMirrorTheme: (event: any) => void;

}

const Head: React.StatelessComponent<HeadProps> = (props: HeadProps) => (
    <div className={props.className}>
        <Select
              name="codeMirrorThemes"
              value="Type"
              options={props.codeMirrorThemes}
              onChange={props.handleChangeCodeMirrorTheme}
        />
        <label>JSON
            {
                props.error === false &&
                <span>✔</span>
            }
            {
                props.error === true &&
                <span>✘</span>              
            }

        </label>
    </div>
);

const StyledHead = styled(Head)`
    
    span {
        color: ${props => props.error ? props.theme.secondaryColorError : props.theme.secondaryColorSucess};
    }

    border-radius: 6px;
    font-size: 1em;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    margin-top: 0px;
    width: 100%;
    background: ${props => props.error ? props.theme.primaryColorError : props.theme.primaryColorSucess};
`;

export default StyledHead;