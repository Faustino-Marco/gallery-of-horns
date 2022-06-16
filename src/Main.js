import React from 'react';
// import App from './App';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts =[];
    data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
        title={beast.title}
        description={beast.description}
        imageUrl={beast.image_url}
        key={idx}
        addHearts={this.props.addHearts}
      />)
    });
    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;