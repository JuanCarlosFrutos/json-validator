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
    border-radius: 10px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: black;
    color: white;
    border: 2px solid white;
`;

export default StyledUserFeedback;