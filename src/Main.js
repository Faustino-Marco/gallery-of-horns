import React from 'react';
import HornedBeast from './HornedBeast';
import BeastForm from './BeastForm';
import './Main.css';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {

  render() {
    let beasts = this.props.data.map((beast, idx) => (
      <HornedBeast
        clickedBeast={beast}
        key={idx}
        handleOnShowModal={this.props.handleOnShowModal}
      />)
    );

    return (
      <main>
        <BeastForm 
        handleSubmit={this.props.handleSubmit}
        handleChange={this.props.handleChange}
        />
        <Container>
          <Row lg={4}>
          {beasts}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;