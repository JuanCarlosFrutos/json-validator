import * as React from 'react';
import styled from 'styled-components';

interface UserFeedbackProps {

    userFeedback: string;
    className?: string;

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
    background: ${props => props.theme.error};
    color: white;
    border-radius: 3px;
    border-left: 5px solid red;
`;

export default StyledUserFeedback;