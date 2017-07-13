import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Bike from './Bike';
import Car from './Car';
import World from './World';
import simplify from '../config/simplify';
import BikeModels from '../models/BikeModels';
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
          <Route path="/Car" component={Car} />
          <Route path="/World" component={World} />
        </div>
      </Router>
    </Provider>
  );
};

export default Hello;
