import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

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
    <article>
      <h2>{this.props.title}</h2>
      <p>{this.state.likes} ❤️ Favorites</p>
      <p onClick={this.likeCard}>Favorite this one!</p>
      <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      <p>{this.props.description}</p>
      <Button variant="success">Bootstrap button</Button>
      <button>html button</button>
    </article>
    )
  }
}

export default HornedBeast;