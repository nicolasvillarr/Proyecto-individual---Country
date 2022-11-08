import './App.css';
import React from 'react';
import Inicio from './component/inicio/inicio';
import Home from './component/home/home';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Details from './component/Details/Details';
import Activity from './component/ActivitiesCreate/activities';
function App() {
  return (
  <Router>
    {/* <Switch> */}
      <div className="App">
      
        <Route exact path={'/'}
          component={Inicio}>
        </Route>

        <Route exact path={'/home'}
        component={Home}>
        </Route>

        <Route exact path={'/activity'}
        component={Activity}>
        </Route>
        
        <Route exact path={'/home/:id'} 
        component={Details}>
        </Route>
        {/* <Route exact path={'/home/:id'}>
          <Details/>
        </Route> */}
      </div>
    {/* </Switch> */}
  </Router>  
  );
}

export default App;
