import * as React from 'react';
import Validator from './components/validator';
import Head from './components/header';
import Footer from './components/footer';
import UserFeedback from './components/user-feedback';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import './App.css';

class App extends React.Component <{}, {}> {

  render() {

    const theme: Theme = {
      primaryColor: 'grey'
    };

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Head />
        </ThemeProvider>
        <Validator />
        <UserFeedback />
        <Footer />
      </div>
    );
  }
}

export default App;
