import React from 'react';
import { FormGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import data from './data.json';
// import HornedBeast from './HornedBeast';

let searchArr = [1, 2, 3, 100];

class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: '',
      searchedHorn: '',
      chosenHorn: searchArr,
      sortedData: data,
    };
  };

  render() {
    return (
      <>
        <Form.Select onChange={this.props.handleChange} onSubmit={this.props.handleSubmit} aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="All">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">100</option>
        </Form.Select>


        {/* <form onSubmit={this.props.handleSubmit}>
          <label>Name:
            <input type="text" name="name" />
          </label>
          <fieldset>
            <legend>Sort by Number of Horns</legend>
            <select name="selected" onChange={this.props.handleChange}>
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </select>
          </fieldset>
          <button type="submit">Submit</button>
        </form> */}
      </>
    );
  };

};

export default BeastForm;