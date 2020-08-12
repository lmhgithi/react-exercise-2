import React, { Component } from 'react';
import './PhoneList.css';
import PhoneElement from './PhoneElement';
import PropTypes from 'prop-types';

class PhoneList extends Component {
  render() {
    const { phoneList, handleAddCartValue } = this.props;
    // console.log(phoneList);
    return (
      <div className="phoneList">
        {phoneList.map((phone, index) => (
          <PhoneElement
            key={index}
            phone={phone}
            handleAddCartValue={handleAddCartValue}
          />
        ))}
      </div>
    );
  }
}

export default PhoneList;
PhoneList.propTypes = {
  phoneList: PropTypes.array,
  handleAddCartValue: PropTypes.func.isRequired,
};
