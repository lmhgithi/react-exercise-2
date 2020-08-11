import React, { Component } from 'react';
import HolderURL from '../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';

class PhoneElement extends Component {
  render() {
    console.log(this.props);
    const { phone, handleAddCartValue } = this.props;

    return (
      <div>
        <h3>{phone.name}</h3>
        <img src={HolderURL} alt="holder" />
        <div className="price add to cart">
          <p>{phone.price}</p>
          <button onClick={handleAddCartValue}>add to cart</button>
        </div>
      </div>
    );
  }
}

export default PhoneElement;
PhoneElement.propTypes = {
  phone: PropTypes.array,
  handleAddCartValue: PropTypes.func.isRequired,
};