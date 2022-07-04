import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// import Form from './Form';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 'test',
      showModal: false,
      selectedBeast: {},
      allBeasts: data,
      selectedLikes: 0,
    }
  }

  handleOnHide = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOnShowModal = (beast, likes) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
      selectedLikes: likes
    });
    console.log('i fired');
    console.log(this.state.showModal)
    console.log(this.state.selectedBeast);
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
      this.resultBeasts(data);
    } else if (numHorns === "1") {
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
        <SelectedBeast 
        handleOnHide={this.handleOnHide}
        showModal={this.state.showModal}
        selectedBeast={this.state.selectedBeast}
        selectedLikes={this.state.selectedLikes}
        />
      </>
    );
  }
}

export default App;
