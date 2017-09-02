import * as React from 'react';
import styled from 'styled-components';

interface ValidatorProps {

    className?: string;
    handleClickValidate: (event: any) => void
    handleChangeText: (event: any) => void
    text: string;
    userFeedback: string;

}

/*
 * Page that shows header and search-result-list.
 */

class Validator extends React.Component <ValidatorProps, {}> {

    render () {
        return (
          <div className={this.props.className}>
            <textarea 
                    onChange={this.props.handleChangeText}
                    value={this.props.text}
            />
            <button onClick={this.props.handleClickValidate}>Validate</button>
            <button> Clear </button>
          </div>
        );
    }

}

const StyledValidator = styled(Validator)`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 100%;

    textarea {
        resize: none;
        border-style: solid;
        border-width: 5px;
        border-color: black;
        width: 80%;
        height: 30em;
    }

    button {
        background: ${props => props.theme.secondaryColor};
        color: 'palevioletred';
        font-size: 1.5em;
        padding: 0.25em 1em;
        margin: 0.5em;
        border-radius: 6px;
        width: 80%;
    }

`;

export default StyledValidator;