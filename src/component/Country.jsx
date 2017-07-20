import React from 'react';
import China from './China';
import America from './America';

// shell.js
class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subComponent: [{ Comp: China, propsName: ['chinaName'] }, America] };
  }
  render() {
    const { subComponent } = this.state;
    const subComp = subComponent.map((Sub) => {
      const { Comp } = Sub;
      if (Comp) {
        const componentProps = {};
        const { propsName } = Sub;
        for (let propsNameIndex = 0; propsNameIndex < propsName.length; propsNameIndex += 1) {
          componentProps[propsName[propsNameIndex]] = this.props.data[propsName[propsNameIndex]];
        }
        return <Comp key={`${Comp.name + Math.random()}`} data={componentProps} />;
      }
      return <Sub key={`${Sub.name + Math.random()}`} />;
    });
    return (
      <div>
        {subComp}
      </div>
    );
  }
}


export default Country;
