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
      secondaryColor: '#7B829A'
    };

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Head className='header'/>
        </ThemeProvider>
        <div className='board'>
          <Validator 
                  text={this.state.text}
                  userFeedback={this.state.userFeedback}
                  handleClickValidate={this.handleClickValidate}
                  handleChangeText={this.handleChangeText}
          />
          { this.state.userFeedback !== '' &&
            <UserFeedback 
              userFeedback={this.state.userFeedback}
            />
          }
        </div>
        <ThemeProvider theme={theme}>
          <Footer className='footer' />
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
