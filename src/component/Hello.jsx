import React from 'react';
import { Button } from 'antd';
import RetinaImage from './common/RetinaImage';
import QQimage from '../images/icon_qq.png';
import '../images/icon_qq@2x.png';
import '../images/icon_qq@3x.png';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
      src: QQimage,
      showImage: true,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentWillMount() {
    this.setState({ hello: 'abc' });
  }
  onClickHandler() {
    const showImage = this.state.showImage;
    this.setState({
      showImage: !showImage,
    });
  }
  render() {
    const hello = this.state.hello;
    const src = this.state.src;
    const img = this.state.showImage ? <RetinaImage src={src} /> : '';
    return (
      <div className="red">
        {hello}
        ddddd
        <Button
          className="test_button"
          type="primary"
          onClick={this.onClickHandler}
        >
          primary
        </Button>
        {img}
      </div>
    );
  }
}

export default Hello;
