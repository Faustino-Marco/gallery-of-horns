import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      heart: 'test'
    }
  }

  addHearts = () => {
    this.setState({
      heart: this.state.heart + 'heart emoji'
    })
  }

  render() {
    return(
      <>
      <Header 
        hearts={this.state.heart}
        />
      <Main />
      <Footer />
      </>
    );
  }
}

export default App;
