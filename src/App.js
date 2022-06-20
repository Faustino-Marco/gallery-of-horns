import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Modal from 'react-bootstrap/Modal';
import Form from './Form';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 'test',
      showModal: false,
      selectedBeast: '',
      allBeasts: data,
    }
  }

  // addHearts = () => {
  //   this.setState({
  //     heart: this.state.heart + 'heart emoji'
  //   })
  // }

  resultBeasts = (newBeasts) => {
    this.setState({allBeasts: newBeasts});
  }

  handleOnHide = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOnShowModal = (name) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal} />
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.title}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
