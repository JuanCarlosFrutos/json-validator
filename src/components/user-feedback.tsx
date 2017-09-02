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
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 10px;
    width: 80%;
    background: green;
    color: white;
    border: 2px solid green;
`;

export default StyledUserFeedback;