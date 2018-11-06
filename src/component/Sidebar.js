import React from "react";
import { Link } from "react-router-dom";
import { pushRotate as Menu } from "react-burger-menu";

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {menuOpen: false}
  };
  
  
render(){
  return (
    // Pass on our props
    <Menu {...this.props} isOpen={ this.state.menuOpen }>
      <Link to="/all/films" className="menu-item">Films</Link>
      <Link to="/all/people" className="menu-item">People</Link>
        <Link to="/all/planets" className="menu-item">Planets</Link>
        <Link to="/all/species" className="menu-item"> Species</Link>
        <Link to="/all/starships" className="menu-item">Starships</Link>
        <Link to="/all/vehicles" className="menu-item">Vehicles</Link>
    </Menu>
  );
}
  

};