/* eslint import/no-unresolved: 0*/
/* eslint import/extensions: 0*/
import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RedBike from 'bundle-loader?lazy!./RedBike';
import MakeMenu from '../utils/MakeMenu';
import MakeAsyncComponent from '../utils/bundle';

const AsyncRedBike = MakeAsyncComponent(RedBike);
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
  const { bike } = props;
  return (
    <div>
      {MakeMenu(testData)}
      <Link to={`${url}/redBike`}>clikck here, go to redBike</Link>
      {bike.number}
      <hr />
      <Route path={`${url}/redBike`} component={AsyncRedBike} />
    </div>
  );
};
export default withRouter(connect(state => ({ bike: state.bike }))(Bike));
