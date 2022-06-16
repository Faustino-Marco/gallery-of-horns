import React from 'react';
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
      <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      <p>{this.props.description}</p>
    </article>
    )
  }
}

export default HornedBeast;