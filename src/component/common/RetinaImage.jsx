import React from 'react';
import PropTypes from 'prop-types';
// RetinaImage 组件

class RetinaImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
      extensions: '',
      currentDPR: 1,
      regularExpression: /(.*)\.(png|svg|jpg|gif)$/,
    };
    this.checkDpr = this.checkDpr.bind(this);
    this.transFormPath = this.transFormPath.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  componentWillMount() {
    // 匹配屏幕dpr
    this.checkDpr();
    // 检测出path和extensions
    this.transFormPath();
  }
  // 加载组件同时，监听resize动作，查看屏幕分辨率是是否发生变化。
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }
  // 移除组件的时候，同意移除对窗口resize动作的监听。
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }
  // 检测屏幕devicePixelRatio
  checkDpr() {
    const devicePixelRatio = window.devicePixelRatio;
    // 判断dpr，如果dpr过小就取1，如果dpr是小时，则往下取整。
    const currentDPR = devicePixelRatio < 1 ? 1 : Math.floor(devicePixelRatio);
    this.setState({
      currentDPR,
    });
  }
  // 利用正则表达式匹配出路径。
  transFormPath() {
    // 获取外部src属性.
    const outerSrc = this.props.src;
    const regularExpression = this.state.regularExpression;
    const match = outerSrc.match(regularExpression);
    const path = match[1];
    const extensions = match[2];
    this.setState({
      path,
      extensions,
    });
  }
  resizeHandler() {
    this.checkDpr();
    this.transFormPath();
  }
  // 匹配src路径
  render() {
    const { path, extensions, currentDPR } = this.state;
    const outerSrc = this.props.src;
    // 确定img 上的src属性.
    const src = currentDPR === 1 ? outerSrc : `${path}@${currentDPR}x.${extensions}`;
    return (
      <img src={src} alt="" />
    );
  }
}

RetinaImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default RetinaImage;
