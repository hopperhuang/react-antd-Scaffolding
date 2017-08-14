import React from 'react';
import { Button } from 'antd';

class Football extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.addNumber = this.addNumber.bind(this);
  }
  addNumber() {
    let { number } = this.state;
    number += 1;
    this.setState({ number });
  }
  render() {
    return (
      <div>
        hey
        Football: {this.state.number}
        <Button onClick={this.addNumber}>addNumber</Button>
      </div>
    );
  }
}
export default Football;
