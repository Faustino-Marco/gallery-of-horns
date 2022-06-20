import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

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
        // addHearts={this.props.addHearts}
      />)
    );

    return (
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;