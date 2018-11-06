import React from 'react';
import One from './One';
import Loading from '../Loading';

class Vehicles extends One {

  constructor(props) {
    console.log(props)
    super(props);
  }
  
  render() {
    const { schema, error, isLoaded, one, count } = this.state;
    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
        return (
            <div className={schema + ' panel panel-one text-capitalize'}>
              <h2>{schema + ": " + one.name}</h2>
              <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Model: {one.model}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Class -> {one.vehicle_class}</h6>
                    <hr />
                    <p className="card-text">Manufacturer: {one.manufacturer}</p>
                    <p className="card-text">Capacity: {one.cargo_capacity}</p>
                    <p className="card-text">Length: {one.length}</p>
                    <p className="card-text">Max atmosphering speed: {one.max_atmosphering_speed}</p>
                </div>
              </div>
            </div>
          );
    }
  }
}

export default Vehicles;

