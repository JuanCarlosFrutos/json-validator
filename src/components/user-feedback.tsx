import * as React from 'react';
import styled from 'styled-components';

interface UserFeedbackProps {

    userFeedback: string;
    className?: string;
    error: boolean|undefined;

}

/*
 * Page that shows UserFeedbacker and search-result-list.
 */

class UserFeedback extends React.Component <UserFeedbackProps, {}> {

    render () {
        return (
          <div className={this.props.className}>
            <label> {this.props.userFeedback} </label>
          </div>
        );
    }
}

const StyledUserFeedback = styled(UserFeedback)`
    padding: 0.5rem 0;
    margin: 10px;
    width: 80%;
    padding: 0.5em;
    background: ${props => props.error ? props.theme.primaryColorError : props.theme.primaryColorSucess};
    color: black;
    border-radius: 3px; 
    border-left: 5px solid;
    border-color: ${props => props.error ? props.theme.secondaryColorError : props.theme.secondaryColorSucess};
`;

export default StyledUserFeedback;