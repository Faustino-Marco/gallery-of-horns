import React from 'react';

class Header extends React.Compoonent {
  render() {
    return(
      <header>
        <h1>Gallery of Horns{this.props.hearts}</h1>
      </header>
    )
  }
}

export default Header;