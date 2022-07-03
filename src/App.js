import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Modal from 'react-bootstrap/Modal';
// import Form from './Form';
import './App.css';
import data from './data.json';
import { ModalBody, ModalFooter } from 'react-bootstrap';

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

  handleOnShowModal = (name, description, img, likes) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      selectedDescription: description,
      selectedImg: img,
      selectedLikes: likes
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
            <Modal.Title>
              {this.state.selectedBeast}
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            {this.state.selectedLikes} ❤️ Likes
            <hr></hr>
            {this.state.selectedDescription}
            <hr></hr>
            <img src={this.state.selectedImg} alt="" width="100%"/>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
