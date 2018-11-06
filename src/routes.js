import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import SideBar from "./component/Sidebar";
import Home from './component/Home';
import All from './component/schema/All';
import Films from './component/schema/Films';
import People from './component/schema/People';
import Planets from './component/schema/Planets';
import Species from './component/schema/Species';
import Starships from './component/schema/Starships';
import Vehicles from './component/schema/Vehicles';

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div id="swapi">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"swapi"}/>
          <div id="page-wrap">
            <App />
            <div className="container mt-5">
              <Route exact path="/" component={Home} />
              <Route path="/all/:name" component={All} />
              <Route path="/one/films/:id" component={Films} />
              <Route path="/one/people/:id" component={People} />
              <Route path="/one/planets/:id" component={Planets} />
              <Route path="/one/species/:id" component={Species} />
              <Route path="/one/starships/:id" component={Starships} />
              <Route path="/one/vehicles/:id" component={Vehicles} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routes;