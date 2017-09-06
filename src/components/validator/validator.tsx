import * as React from 'react';
import styled from 'styled-components';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/theme/dracula.css';
import StyledMenu from './menu';
require('codemirror/lib/codemirror.css');

interface ValidatorProps {

    className?: string;
    handleClickValidate: (event: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => void;
    handleChangeText: (text: string) => void;
    handleClickClear: any;
    text: string;
    error?: boolean|undefined;
    optionsCodeMirror: any;

}

interface ValidatorState {

    doc: CodeMirror.Doc;

}

/*
 * Page that shows header and search-result-list.
 */

class Validator extends React.Component <ValidatorProps, {}> {

    private codeMirror: ReactCodeMirror.ReactCodeMirror;

    componentDidMount () {

        // instance of codeMirror object, now I can configure it.
        let instanceCodeMirror: CodeMirror.Editor = this.codeMirror.getCodeMirror();

        let doc: CodeMirror.Doc = instanceCodeMirror.getDoc();

        instanceCodeMirror.setSize("100%","30em");

    }

    componentWillUpdate(nextProps: ValidatorProps, {}) {



    }

    render () {

        return (
          <div className={this.props.className}>
            <StyledMenu>
                <button onClick={this.props.handleClickValidate}>Validate</button>
                <button onClick={this.props.handleClickClear}> Clear </button>
            </StyledMenu>
            <div className="codemirror">
                <CodeMirror 
                        value={this.props.text} 
                        onChange={this.props.handleChangeText} 
                        options={this.props.optionsCodeMirror}
                        ref={(codeMirror: any) => {this.codeMirror = codeMirror}}
                />
            </div>
          </div>

        );
    }

}

const StyledValidator = styled(Validator)`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px;
    .codemirror {
        width: 50em;
        border-style: solid;
        border-width: 5px;
        border-color: ${props => props.error ? props.theme.secondaryColorError : props.theme.secondaryColorSucess};
        border-radius: 6px;
    }
`;

export default StyledValidator;