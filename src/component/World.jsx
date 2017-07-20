import React from 'react';
import Country from './Country';

function Japan(props) {
  return (
    <p>{props.data.JapanName}</p>
  );
}

class NewCountry extends Country {
  constructor(props) {
    super(props);
    this.state.subComponent.push({ Comp: Japan, propsName: ['JapanName'] });
  }
  render() {
    return super.render();
  }
}

const World = function Wrold() {
  return (
    <div className="blue">
      World...dddddd
      <NewCountry data={{ chinaName: 'China', JapanName: 'Japan' }} />
    </div>
  );
};

export default World;
