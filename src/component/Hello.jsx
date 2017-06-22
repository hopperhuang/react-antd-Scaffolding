import React from 'react';
import { Button } from 'antd';
import QQimage from '../images/icon_qq.png';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'hello' };
  }
  componentWillMount() {
    this.setState({ hello: 'abc' });
  }
  render() {
    const hello = this.state.hello;
    return (
      <div className="red">
        {hello}
        ddddd
        <Button className="test_button" type="primary">Primary</Button>
        <img src={QQimage} alt="" />
      </div>
    );
  }
}

export default Hello;
