import * as React from 'react';
import styled from 'styled-components';
import StyledUserFeedback from '../user-feedback/user-feedback';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/theme/dracula.css';
import StyledMenu from './menu';
import { userFeedback } from '../../shared/interfaces';
require('./codemirror.css');

interface ValidatorProps {

    className?: string;
    handleClickValidate: (event: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => void;
    handleChangeText: (text: string) => void;
    handleClickClear: any;
    text: string;
    error?: boolean|undefined;
    optionsCodeMirror: any;
    userFeedback: Array<userFeedback>;

}

/*
 * Page that shows header and search-result-list.
 */

class Validator extends React.Component <ValidatorProps, {}> {

    private codeMirror: ReactCodeMirror.ReactCodeMirror;
    private docCodeMirror: CodeMirror.Doc;

    componentDidMount () {

        // instance of codeMirror object, now I can configure it.
        let instanceCodeMirror: CodeMirror.Editor = this.codeMirror.getCodeMirror();

        this.docCodeMirror = instanceCodeMirror.getDoc();

        instanceCodeMirror.setSize("100%","30em");

    }

    componentWillUpdate(nextProps: ValidatorProps, {}) {

        if (nextProps.error === true && nextProps.userFeedback[0].numLine !== undefined) {
            console.log(nextProps.userFeedback[0].numLine);
            let position: any = {line:nextProps.userFeedback[0].numLine, ch: 0};
            this.docCodeMirror.setCursor(position);
            let instance: CodeMirror.Editor = this.codeMirror.getCodeMirror();
            instance.setOption('styleActiveLine', true);

        }
        
    }

    render () {

        return (
          <div className={this.props.className}>
            <StyledMenu>
                <button onClick={this.props.handleClickValidate}>Validate</button>
                <button onClick={this.props.handleClickClear}> Clear </button>
            </StyledMenu>
            <CodeMirror 
                    value={this.props.text} 
                    onChange={this.props.handleChangeText} 
                    options={this.props.optionsCodeMirror}
                    ref={(codeMirror: any) => {this.codeMirror = codeMirror}}
            />
            <StyledUserFeedback
                    userFeedback={this.props.userFeedback}
            />
          </div>

        );
    }

}

const StyledValidator = styled(Validator)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export default StyledValidator;