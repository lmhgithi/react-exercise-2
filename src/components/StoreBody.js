import React, { Component } from 'react';
import './StoreBody.css';
import PhoneList from './PhoneList';
import PropTypes from 'prop-types';

class StoreBody extends Component {
  render() {
    const { iPhoneList, huaweiList, handleAddCartValue } = this.props;
    return (
      <div id="storeBody">
        <h1>iPhone</h1>
        <div className="phoneList">
          <PhoneList
            phoneList={iPhoneList}
            handleAddCartValue={handleAddCartValue}
          />
        </div>
        <h1>HUAWEI</h1>
        <div className="phoneList">
          <PhoneList
            phoneList={huaweiList}
            handleAddCartValue={handleAddCartValue}
          />
        </div>
      </div>
    );
  }
}

export default StoreBody;
StoreBody.propTypes = {
  iPhoneList: PropTypes.array,
  huaweiList: PropTypes.array,
  handleAddCartValue: PropTypes.func.isRequired,
};
