import React, { Component } from 'react';
import './App.scss';
import StoreHeader from './components/StoreHeader';
import StoreBody from './components/StoreBody';
class App extends Component {
  state = {
    cartValue: 0,
    iPhoneList: [],
    huaweiList: [],
  };

  handleAddCartValue = () => {
    this.setState({
      cartValue: this.state.cartValue + 1,
    });
  };

  async getJsonData() {
    const URL = 'http://localhost:3000/products';
    try {
      const promise = await fetch(URL);
      const data = await promise.json();
      const tmpIPhone = [];
      const tmpHUAWEI = [];

      data.forEach((phone) => {
        if (phone.category === 'iPhone') {
          tmpIPhone.push(phone);
        } else if (phone.category === 'HUAWEI') {
          tmpHUAWEI.push(phone);
        }
      });

      this.setState({
        iPhoneList: tmpIPhone,
        huaweiList: tmpHUAWEI,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.getJsonData();
    // const tmpIPhone = [];
    // const tmpHUAWEI = [];
    // const URL = 'http://localhost:3000/products';
    // fetch(URL).then((res) => {
    //   if (res.status === 200) {
    //     return res.json();
    //   }
    //   return Promise.reject('error');
    // }).then(data => {
    //   data.forEach((item) => {
    //     if (item.category === 'iPhone')
    //       tmpIPhone.push(item)
    //     else
    //       tmpHUAWEI.push(item)
    //   })
    //   this.setState({
    //     iPhoneList: tmpIPhone,
    //     huaweiList: tmpHUAWEI,
    //   });
    // })
  }

  render() {
    return (
      <main className="app">
        <StoreHeader cartValue={this.state.cartValue} />
        <StoreBody
          iPhoneList={this.state.iPhoneList}
          huaweiList={this.state.huaweiList}
          handleAddCartValue={this.handleAddCartValue}
        />
      </main>
    );
  }
}

export default App;
