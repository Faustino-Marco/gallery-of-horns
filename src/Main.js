import React from 'react';
import HornedBeast from './HornedBeast';
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