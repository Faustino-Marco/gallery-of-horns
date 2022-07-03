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

  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.name.value;
    let horns = event.target.selected.value;
    console.log(`username: ${username}`);
    console.log(`horns: ${horns}`);
    this.setState({
      howToSort: horns,
      name: username
    });
    console.log(`horns: ${horns}`);
  }

  handleHorn = (numHorns) => {
    console.log(numHorns);
    if (numHorns == "All") {
      this.props.searchedHorn(data);
    } else if (numHorns === "1") {
      console.log(data.filter(beast => beast.horns == 1));
      let hornCriteria = data.filter(beast =>
        beast.horns == 1);
      this.resultBeasts(hornCriteria);
    } else if (numHorns === "2") {
      console.log(data.filter(beast => beast.horns == 2));
      let hornCriteria = data.filter(beast =>
        beast.horns == 2);
      this.resultBeasts(hornCriteria);
    } else if (numHorns === "3") {
      console.log(data.filter(beast => beast.horns == 3));
      let hornCriteria = data.filter(beast =>
        beast.horns == 3);
      this.resultBeasts(hornCriteria);
    } else {
      console.log(data.filter(beast => beast.horns == 100));
      let hornCriteria = data.filter(beast =>
        beast.horns == 100);
      this.resultBeasts(hornCriteria);
    }
  };

  handleChange = event => {
    this.setState({
      chosenHorn: event.target.value
    });
    this.handleHorn(event.target.value);
  }

  resultBeasts = (newBeasts) => {
    this.setState({allBeasts: newBeasts});
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={this.state.allBeasts}
          handleOnShowModal={this.handleOnShowModal}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          // handleHorn={this.handleHorn} 
          />
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
