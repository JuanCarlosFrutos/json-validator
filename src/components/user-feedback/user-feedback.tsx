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
            <ul>
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
    
    width: 100%;

    ul {
        display: flex;
        flex-direction: column;
    }

    li {
      width: 100%;
      display: flex;
      align-items: flex-start;
      list-style: none;
    }
`
export default StyledUserFeedback;