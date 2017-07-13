import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import RedBike from './RedBike';
import MakeMenu from '../utils/MakeMenu';

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
      <Route path={`${url}/redBike`} component={RedBike} />
    </div>
  );
};
export default Bike;


Bike.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
    __proto__: PropTypes.object,
  }).isRequired,
};
