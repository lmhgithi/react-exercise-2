import React, { Component } from 'react';
import imgURL from '../assets/cartIcon.jpg';
import './StoreHeader.css';
import PropTypes from 'prop-types';
class StoreHeader extends Component {
  render() {
    const { cartValue } = this.props;
    return (
      <div id="storeHeader">
        <h1>Store</h1>
        <div className="cartIcon">
          <img src={imgURL} alt="cartIcon" />
          <div className="cartValue">{cartValue}</div>
        </div>
      </div>
    );
  }
}

export default StoreHeader;
StoreHeader.propTypes = {
  cartValue: PropTypes.number,
};
