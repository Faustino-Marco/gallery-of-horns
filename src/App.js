import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './App.css';
import data from './data.json';

class App extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     heart: 'test'
  //   }
  // }

  // addHearts = () => {
  //   this.setState({
  //     heart: this.state.heart + 'heart emoji'
  //   })
  // }

  render() {
    return(
      <>
      <Header />
      <Main data={data}/>
      <Footer />
      </>
    );
  }
}

export default App;
