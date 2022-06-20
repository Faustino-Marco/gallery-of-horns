import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  likeCard = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  render() {
    return (
      <Card style={{ width: '18rem' }} onClick={this.likeCard}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" onClick={this.likeCard}>{this.state.likes} ❤️ Favorites</Card.Subtitle>
          <Card.Img variant="top" src={this.props.imageUrl} />

          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button variant="success">Bootstrap button</Button>
        </Card.Body>
      </Card>



      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>{this.state.likes} ❤️ Favorites</p>
      //   <p onClick={this.likeCard}>Favorite this one!</p>
      //   <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      //   <p>{this.props.description}</p>
      //   <Button variant="success">Bootstrap button</Button>
      //   <button>html button</button>
      // </article>
    )
  }
}

export default HornedBeast;