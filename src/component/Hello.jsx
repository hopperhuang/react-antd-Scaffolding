import React from 'react';
import { Button } from 'antd';

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
        <Button className="test_button" type="primary">Primary</Button>
      </div>
    );
  }
}

export default Hello;
