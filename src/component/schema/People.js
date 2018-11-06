import React from 'react';
import One from './One';
import Loading from '../Loading';
import Pagination from "../Pagination";

class People extends One {

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
                    <h5 className="card-title">birth year: {one.birth_year}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">...</h6>
                    <hr/>
                    <p className="card-text">Height: {one.height}</p>
                    <p className="card-text">Gender: {one.gender}</p>
                    <p className="card-text">Hair color: {one.hair_color}</p>
                    <p className="card-text">Skin color: {one.skin_color}</p>
                    <p className="card-text">Eyes color: {one.eye_color}</p>
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

export default People;

