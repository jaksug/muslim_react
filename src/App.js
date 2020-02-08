import React from "react";
import 'antd/dist/antd.css'; 
import Doa from "./pages/doa"
import DetailDoa from "./pages/detail_doa"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>

        <Switch>
        <Route path="/detail_doa">
            <DetailDoa/>
          </Route>
        <Route path="/doa">
            <Doa/>
          </Route>
          <Route path="/">
            <p>Anjay</p>
          </Route>
         
          
        </Switch>
      </div>
    </Router>
  );
}


