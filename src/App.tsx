import * as React from 'react';
import * as validator from 'jsonlint';
import Validator from './components/validator';
import Head from './components/header';
import Footer from './components/footer';
import UserFeedback from './components/user-feedback';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import './App.css';

interface stateApp {

  text: string;
  userFeedback: string;
  error: boolean|undefined;

}

class App extends React.Component <{}, stateApp> {

  constructor() {
    super();

    let initialState: stateApp = {text: '', userFeedback: '', error: undefined}
    this.state = initialState;

  }

  render() {

    const theme: Theme = {
      primaryColor: '#AA3939',
      secondaryColor: '#FFD9D9',
      sucess: '#87FF74',
      error: '#FF747E',
    };

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Head />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Validator 
                  text={this.state.text}
                  userFeedback={this.state.userFeedback}
                  handleClickValidate={this.handleClickValidate}
                  handleChangeText={this.handleChangeText}
                  handleClickClear={this.handleClickClear}
                  error={this.state.error}
          />
        </ThemeProvider>
          { this.state.userFeedback !== '' &&
            <ThemeProvider theme={theme}>
            <UserFeedback 
              userFeedback={this.state.userFeedback}
              error={this.state.error}
            />
            </ThemeProvider>
          }
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </div>
    );
  }

  private handleClickValidate = (event: any) => {

    let newFeedback: string = '';
    let error: boolean = false;

    try {

      validator.parse(this.state.text);
      newFeedback = 'JSON valid';

    }catch (e){

      newFeedback = e.message
      error = true;

    }

    this.setState ({
      userFeedback: newFeedback,
      error: error
    }) 

  }

  private handleClickClear = (event: any) => {

    this.setState({
      error: undefined,
      text: '',
      userFeedback: ''
    })

  }

  private handleChangeText = (event: any) => {

    this.setState({
      text: event.target.value
    })

  }


}

export default App;
