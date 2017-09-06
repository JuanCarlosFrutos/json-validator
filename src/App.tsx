import * as React from 'react';
import * as validator from 'jsonlint';
import Validator from './components/validator/validator';
import Head from './components/header';
import UserFeedback from './components/user-feedback/user-feedback';
import { ThemeProvider } from 'styled-components';
import { userFeedback } from './shared/interfaces';
import Theme from './theme';
import { standarTheme, noResquest, codeMirrorThemes } from './shared/themes';
import './App.css';
require('codemirror/theme/json.css');
require('codemirror/addon/selection/active-line.js');
import * as shortid from 'shortid';

interface StateApp {

  className?: string;
  userFeedback: Array<userFeedback>;
  optionsCodeMirror: any;
  error: boolean|undefined;
  text: string;

}

class App extends React.Component <{}, StateApp> {

  // It holds default menssage info , it appears when doesnt exists previous precess 
  // messages and it explains how app works.
  private userFeedback: userFeedback;

  constructor() {
    super();

    // Config default message.

    this.userFeedback = {id: shortid.generate(), message: 'Instructions:', error: undefined}

    // Config codemirror.

    let options: any = {
        lineNumbers: true,
        autofocus: true,
        theme: 'json',
        styleActiveLine: false,
        lineWrapping: true
    }

    let userFeedback: userFeedback = {error: undefined, message: 'info', id: shortid.generate()};
    let initialState: StateApp = {text: '', userFeedback: [userFeedback], error: undefined, optionsCodeMirror: options};
    this.state = initialState;

  }

  render() {

    //It use the first element in array notification, it is the last process text.
    const theme: Theme = this.state.userFeedback[0].error === undefined ? noResquest : standarTheme;
    let error: boolean|undefined = this.state.userFeedback[0].error;

    return (

     <ThemeProvider theme={theme}>
      <div className="App">
          <Head 
              error={error}
              codeMirrorThemes={codeMirrorThemes}
              handleChangeCodeMirrorTheme={this.handleChangeCodeMirrorTheme}
          />
          <div className='board'>
            <Validator 
                    text={this.state.text}
                    handleClickValidate={this.handleClickValidate}
                    handleChangeText={this.handleChangeText}
                    handleClickClear={this.handleClickClear}
                    error={error}
                    optionsCodeMirror={this.state.optionsCodeMirror}
            />
            { this.state.userFeedback.length > 0 &&
              <UserFeedback 
                userFeedback={this.state.userFeedback}
              />
            }
          </div>
      </div>
    </ThemeProvider>
    );
  }

  private handleClickValidate = (event: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): void => {

    let newFeedback: userFeedback = {id: shortid.generate(), message: '', error: false};
    let error: boolean = false;

    try {

      validator.parse(this.state.text);
      newFeedback.message = 'JSON valid';

    }catch (e) {

      newFeedback.message = e.message;
      newFeedback.error = true;

    }

    let textFormat = validator.formatter.formatJson(this.state.text);

    // Take current options.
    let currentOptions: any = this.state.optionsCodeMirror;
    // Add new value.
    currentOptions.value = textFormat;

    let arrayFeedback: Array<userFeedback> = this.state.userFeedback;
    arrayFeedback.unshift(newFeedback);

    this.setState ({
      userFeedback: arrayFeedback,
      error: error,
      text: textFormat,
      optionsCodeMirror: currentOptions
    });

  }

  private handleClickClear = (event: MouseEvent) => {

    this.setState({
      userFeedback: [this.userFeedback],
      error: undefined,
      text: '',
    });

  }

  private handleChangeText = (text: string) => {

    this.setState({
      text: text
    });

  }

  private handleChangeCodeMirrorTheme = (event: any) => {
    console.log(event);
  }

}

export default App;