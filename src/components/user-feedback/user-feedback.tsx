import * as React from 'react';
import styled from 'styled-components';
import StyledUserMessage from './user-message';
import { userFeedback } from '../../shared/interfaces';

interface UserFeedbackProps {

    userFeedback: Array<userFeedback>;
    className?: string;

}

/*
 * Page that shows UserFeedbacker and search-result-list.
 */

class UserFeedback extends React.Component <UserFeedbackProps, {}> {

    render () {

        return (
          <div className={this.props.className}>
            <ul className="list-group searchFeedContainer">
                { this.props.userFeedback.map((userFeedback: userFeedback) => (
                <li key={userFeedback.id}>
                    <StyledUserMessage 
                        message={userFeedback.message} 
                        error={userFeedback.error} 
                    />
                </li>
                ))}
            </ul>
          </div>
        );
    }
}

const StyledUserFeedback = styled(UserFeedback)`
    display: flex;
    width: 100%;

    ul {
      list-style: none;
    }
`
export default StyledUserFeedback;