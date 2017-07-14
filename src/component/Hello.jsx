/* eslint import/no-unresolved: 0*/
/* eslint import/extensions: 0*/
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Car from 'bundle-loader?lazy!./Car';
import World from 'bundle-loader?lazy!./World';
import Bike from './Bike';
import simplify from '../config/simplify';
import BikeModels from '../models/BikeModels';
import MakeAsyncComponent from '../utils/bundle';
import '../style/style.less';

const app = simplify();
app.model(BikeModels);
const store = app.run();

const Hello = function Hello() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li><Link to="/Bike">Bike</Link></li>
            <li><Link to="/Car">Carrrrrr</Link></li>
            <li><Link to="/World">World</Link></li>
          </ul>
          <hr />
          <Route path="/Bike" component={Bike} />
          <Route path="/Car" component={MakeAsyncComponent(Car)} />
          <Route path="/World" component={MakeAsyncComponent(World)} />
        </div>
      </Router>
    </Provider>
  );
};

export default Hello;
