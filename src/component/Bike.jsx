/* eslint import/no-unresolved: 0*/
/* eslint import/extensions: 0*/
import React from 'react';
import { Route, Link } from 'react-router-dom';
import RedBike from 'bundle-loader?lazy!./RedBike';
import MakeMenu from '../utils/MakeMenu';
import Bundle from '../utils/bundle';

const LazyRedBike = function LazyRedBike() {
  return (
    <Bundle load={RedBike}>
      {Component => <Component />}
    </Bundle>
  );
};

const testData = [
  {
    content: 'nanfang',
    child: [
      {
        content: 'guangdong',
        child: [
          {
            content: 'guangzhou',
          },
        ],
      },
      {
        content: 'guangxi',
      },
    ],
  },
  {
    content: 'beifang',
    child: [
      {
        content: 'beijing',
      },
      {
        content: 'shanghai',
      },
    ],
  },
];


const Bike = function Bike(props) {
  // 匹配上一级的url来产生子路由。
  const url = props.match.url;
  return (
    <div>
      {MakeMenu(testData)}
      <Link to={`${url}/redBike`}>clikck here, go to redBike</Link>
      <hr />
      <Route path={`${url}/redBike`} component={LazyRedBike} />
    </div>
  );
};
export default Bike;
