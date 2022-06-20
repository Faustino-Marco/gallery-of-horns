import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import data from './data.json';
import HornedBeast from './HornedBeast';

let searchArr = [1, 2, 3, 100];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: '',
      searchedHorn: '',
      chosenHorn: searchArr,
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let horns = event.target.value;
    this.setState({
      searchedHorn: horns,
    });
  }

  handleChange = event => {
    this.setState({
      chosenHorn: event.target.value
    });
    this.handleHorn(event.target.value);
  }

  handleHorn = (numHorns) => {
    if (numHorns == "all") {
      this.props.searchedHorn(data);
    } else {
      
    }
  }

};

export default Form;