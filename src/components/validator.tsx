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
            <button onClick={this.props.handleClickValidate}>Link</button>
          </div>
        );
    }

}

const StyledValidator = styled(Validator)`
    border-radius: 10px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: red;
    color: black;
    border: 2px solid white;
`;

export default StyledValidator;