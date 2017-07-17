/* eslint import/no-unresolved: 0*/
/* eslint import/extensions: 0*/
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Button } from 'antd';
import Car from 'bundle-loader?lazy!./Car';
import World from 'bundle-loader?lazy!./World';
import Bike from 'bundle-loader?lazy!./Bike';
import Football from './football';
import simplify from '../config/simplify';
import BikeModels from '../models/BikeModels';
import MakeAsyncComponent from '../utils/bundle';
import '../style/style.less';

const app = simplify();
app.model(BikeModels);
const store = app.run();

const AsyncBike = MakeAsyncComponent(Bike);
const AsyncCar = MakeAsyncComponent(Car);
const AsyncWorld = MakeAsyncComponent(World);

const Hello = function Hello() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li><Link to="/Bike"><Button>Bike</Button></Link></li>
            <li><Link to="/Car"><Button>car</Button></Link></li>
            <li><Link to="/World"><Button>world</Button></Link></li>
            <li><Link to="/Football"><Button>football</Button></Link></li>
          </ul>
          <hr />
          <Route path="/Bike" component={AsyncBike} />
          <Route path="/Car" component={AsyncCar} />
          <Route path="/World" component={AsyncWorld} />
          <Route path="/Football" component={Football} />
        </div>
      </Router>
    </Provider>
  );
};

export default Hello;
