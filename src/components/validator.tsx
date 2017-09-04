import * as React from 'react';
import styled from 'styled-components';

interface ValidatorProps {

    className?: string;
    handleClickValidate: (event: any) => void;
    handleChangeText: (event: any) => void;
    handleClickClear: (event: any) => void;
    text: string;
    userFeedback: string;
    error?: boolean|undefined;

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
                    placeholder='Enter your text'
            />
            <button className='btn-4' onClick={this.props.handleClickValidate}>Validate</button>
            <button onClick={this.props.handleClickClear}> Clear </button>
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

    #example-one {
        width: 80%;
        border-style: solid;
        border-color: black;
        border-width: 5px;
    }

    textarea {
        resize: none;
        border-style: solid;
        border-width: 5px;
        border-color: ${props => props.error ? props.theme.secondaryColorError : props.theme.secondaryColorSucess};
        width: 80%;
        height: 30em;
    }

    button {
        background: ${props => props.theme.secondaryColor};
        color: black;
        font-size: 1.5em;
        padding: 0.25em 1em;
        margin: 0.5em;
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

export default StyledValidator;