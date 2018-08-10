import React, { Component } from 'react';

class Header extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {

    return (
      <div className='header-container'>
        <p>{`Hello, ${this.props.name}`}</p>
      </div>
    )

  }

}

export default Header;
