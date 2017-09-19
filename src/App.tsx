import * as React from 'react';
import * as validator from 'jsonlint';
import Validator from './components/validator/validator';
import Head from './components/header';
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
        theme: 'dracula',
        styleActiveLine: false,
        lineWrapping: true
    }

    let userFeedback: userFeedback = {error: undefined, message: 'info', id: shortid.generate()};
    let initialState: StateApp = {text: '', userFeedback: [userFeedback], error: undefined, optionsCodeMirror: options};
    this.state = initialState;

  }

  render() {
    let theme: Theme = noResquest;
    let error: boolean|undefined;
    //It use the first element in array notification, it is the last process text.
    if (this.state.error !== undefined) {
      theme = this.state.userFeedback[0].error === undefined ? noResquest : standarTheme;
      error = this.state.userFeedback[0].error;
    }

    return (

     <ThemeProvider theme={theme}>
      <div className="App">
          <Head 
              error={error}
              codeMirrorThemes={codeMirrorThemes}
              handleChangeCodeMirrorTheme={this.handleChangeCodeMirrorTheme}
          />
            <Validator 
                    text={this.state.text}
                    handleClickValidate={this.handleClickValidate}
                    handleChangeText={this.handleChangeText}
                    handleClickClear={this.handleClickClear}
                    error={error}
                    optionsCodeMirror={this.state.optionsCodeMirror}
                    userFeedback={this.state.userFeedback}
            />
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
      let string: string = e.message.split(':');
      let temp: Array<string> = string[0].split(' ');
      let lineNumber: number = +temp[temp.length - 1];
      newFeedback.numLine = lineNumber;
      newFeedback.message = e.message;
      newFeedback.error = true;

    }

    let textFormat = validator.formatter.formatJson(this.state.text);

    // Take current options.
    let currentOptions: any = this.state.optionsCodeMirror;
    // Add new value.
    currentOptions.value = textFormat;

    // @TODO solve this problem, know only save the las error or sucess message.

    let arrayFeedback: Array<userFeedback> = [];
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

  /*
   * Change text isnide codemirror and dissapear alert error or success because
   * text is different
   */

  private handleChangeText = (text: string) => {

    this.setState({
      error: undefined,
      text: text,
    });

  }

  private handleChangeCodeMirrorTheme = (event: any) => {
    console.log(event);
  }

}

export default App;