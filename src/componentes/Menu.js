import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Reportes from '../pages/Reportes';

function Menu(){
    return(
     <div>  
    <Router>
      <div className="container">

        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Home
          </Link>
          <Link to="/productos" className="btn btn-dark">
            Productos
          </Link>
          <Link to="/Reportes" className="btn btn-dark">
            Reportes
          </Link>
      </div>
      <hr/>

      <div id="miSwitch">
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/productos'>
            <Productos/>
          </Route>
          <Route path='/reportes'>
            <Reportes/>
          </Route>
        </Switch>
      </div>
    </div>

    </Router>
    </div> 
    );
}

export default Menu;

