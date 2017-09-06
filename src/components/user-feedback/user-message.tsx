import * as React from 'react';
import styled from 'styled-components';

interface UserMessageProps {

    className?: string;
    theme?: any;
    message: string;
    error?: boolean|undefined;

}

const UserMessage: React.StatelessComponent<UserMessageProps> = (props: UserMessageProps) => (
    <div className={props.className}>
        {props.message}
    </div>
);

const StyledUserMessage = styled(UserMessage)`
    
    width: 80%;
    padding: 0.5rem;
    margin: 10px;
    heigth: auto;
    background: ${props => props.error ? props.theme.primaryColorError : props.theme.primaryColorSucess};
    color: black;
    border-radius: 3px; 
    border-left: 5px solid;
    border-color: ${props => props.error ? props.theme.secondaryColorError : props.theme.secondaryColorSucess};

`;

export default StyledUserMessage;