import * as React from 'react';
import styled from 'styled-components';

interface ValidatorProps {

    className?: string;

}

/*
 * Page that shows header and search-result-list.
 */

class Validator extends React.Component <ValidatorProps, {}> {

    render () {
        return (
          <div className={this.props.className}>
            <textarea />
            <button>Link</button>
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