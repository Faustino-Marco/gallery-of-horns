import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import data from './data.json';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      heart: 'test',
      showModal: false,
      allBeasts: data,
    }
  };

  likeCard = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  };

  handleTitleClick = () => {
    console.log('click heard');
    this.props.handleOnShowModal(this.props.clickedBeast, this.state.likes);
  };

  render() {
    return (
      <Col className="">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title onClick={this.handleTitleClick}>{this.props.clickedBeast.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" onClick={this.likeCard}>{this.state.likes} ❤️ Likes</Card.Subtitle>
          <Card.Img variant="top" src={this.props.clickedBeast.image_url}  onClick={this.handleTitleClick}/>
          <Card.Text onClick={this.handleTitleClick}>
            {this.props.clickedBeast.description}
          </Card.Text>
          <Button onClick={this.likeCard}>Like</Button>
        </Card.Body>
      </Card>
      </Col>



      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>{this.state.likes} ❤️ Favorites</p>
      //   <p onClick={this.likeCard}>Favorite this one!</p>
      //   <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      //   <p>{this.props.description}</p>
      //   <Button variant="success">Bootstrap button</Button>
      //   <button>html button</button>
      // </article>
    );
  };
};

export default HornedBeast;