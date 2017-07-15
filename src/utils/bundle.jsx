import React, { Component } from 'react';

// 首次加载，触发componentWillMount方法。
// 触发load方法。
// setState， 因为再componentWillMount方法内，所以不用re-render
// 发送异步加载组件的请求
// 首次render
// 异步请求成功，setState
// 触发re-render,加载异步组件。
//
// 若果再次点击进入同样的路由， 触发路由组件的componentWillReceiveProps方法。
// 判断load属性是否与之前的load属性一样，是的则不触发Load方法进行更新。
//
// 总结：从新进入同一个路由，会触发路由组件的componentWillReceiveProps方法。并re-render。
//
// 若果路由组件的状态进行更新，路由内部组件出现re-render，则视为重新进入路由，触发componentWillReceiveProps等首次加载方法。
// 如果重新点击进入子路由，则触发上级路由的componentWillReceiveProps方法，子路由组件重新加载。
//
// componentWillReceiveProps方法被触发，是因为props里面的路由属性改变所引起的。
// 这个组件内的componentWillReceiveProps方法的促发，因为，它被withRouter方法包裹了一层，包含了路由的相关属性。

class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null,
    };
  }
  componentWillMount() {
    // console.log('willmount');
    this.load(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // console.log('recieveprops');
    // console.log(nextProps.load !== this.props.load);
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }
  load(props) {
    // console.log('load');
    this.setState({
      mod: null,
    });
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod,
      });
    });
  }
  render() {
    // console.log(this.state.mod);
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

function MakeAsyncComponent(bundleLoaderComponent) {
  return function AsyncComponent() {
    return (
      <Bundle load={bundleLoaderComponent}>
        {Asyncmodule => <Asyncmodule />}
      </Bundle>
    );
  };
}


export default MakeAsyncComponent;
