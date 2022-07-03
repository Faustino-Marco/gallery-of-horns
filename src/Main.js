import React from 'react';
import HornedBeast from './HornedBeast';
import BeastForm from './BeastForm';
import './Main.css';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let beasts = this.props.data.map((beast, idx) => (
      <HornedBeast
        title={beast.title}
        description={beast.description}
        imageUrl={beast.image_url}
        key={idx}
        handleOnShowModal={this.props.handleOnShowModal}
      // addHearts={this.props.addHearts}
      />)
    );

    return (
      <main>
        <BeastForm 
        handleSubmit={this.props.handleSubmit}
        handleChange={this.props.handleChange}
        // handleHorn={this.props.handleHorn}
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