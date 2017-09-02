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

}

class App extends React.Component <{}, stateApp> {

  constructor() {
    super();

    let initialState: stateApp = {text: '', userFeedback: ''}
    this.state = initialState;

  }

  render() {

    const theme: Theme = {
      primaryColor: '#AA3939',
      secondaryColor: '#FFFFFF',
      sucess: '#87FF74',
      error: '#FF747E'
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
          />
        </ThemeProvider>
          { this.state.userFeedback !== '' &&
            <ThemeProvider theme={theme}>
            <UserFeedback 
              userFeedback={this.state.userFeedback}
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

    try {

      validator.parse(this.state.text);
      newFeedback = 'JSON valid';

    }catch (e){

      newFeedback = e.message

    }

    this.setState ({
      userFeedback: newFeedback
    }) 

  }


  private handleChangeText = (event: any) => {

    this.setState({
      text: event.target.value
    })

  }


}

export default App;
