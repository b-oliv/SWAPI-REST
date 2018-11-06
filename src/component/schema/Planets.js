import React from 'react';
import One from './One';
import Loading from '../Loading';
import Pagination from "../Pagination";

class Planets extends One {

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
                    <h5 className="card-title">Climate: {one.climate}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Population {one.population}</h6>
                    <hr />
                    <p className="card-text">Diameter: {one.diameter}</p>
                    <p className="card-text">Gravity: {one.gravity}</p>
                    <p className="card-text">Surface Water: {one.surface_water}</p>
                    <p className="card-text">Terrain: {one.terrain}</p>
                </div>
                <nav className='paginationOne' aria-label="Pagination">
                    <Pagination activePage={one.url} totalItems={count} callback={this}/>     
                </nav>
              </div>
            </div>
          );
    }
  }
}

export default Planets;

