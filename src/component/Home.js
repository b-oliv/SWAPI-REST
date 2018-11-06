import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Home">
        <div className="panel mt-2">
            <h1>API SWAPI</h1>
            <hr class="separated_laser_blue"/>
            <p className="mt-5">Welcome to the swapi application, the Star Wars API! This is an application that uses SWAPI Api - https://swapi.co/</p>
        </div>
        <div className="panel mt-2">
            <h2>Process REST</h2>
            <hr class="separated_laser_green"/>
            <p className="mt-5">To simplify the implementation, only the GET method is used</p>
            <p>Find the code on github -> https://github.com/Manipovore/SWAPI-REST.git</p>
        </div>
        <div className="panel mt-2">
            <h2>Technology</h2>
            <hr class="separated_laser_red"/>
            <p className="mt-5">REACT</p>
            <p>React-router</p>
            <p>Bootstrap</p>
            <hr />
            <p><b>I do not use a backend node js for this project</b></p>
        </div>
      </div>
    );
  }
}

export default Home;

