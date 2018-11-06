import React from 'react';
import One from './One';
import Loading from '../Loading';
import Pagination from "../Pagination";

class Species extends One {

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
                    <h5 className="card-title">Classification: {one.classification}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Designation {one.designation}</h6>
                    <hr />
                    <p className="card-text">Average height: {one.average_height}</p>
                    <p className="card-text">Average lifespan: {one.average_lifespan}</p>
                    <p className="card-text">Language: {one.language}</p>
                    <p className="card-text">Skin colors: {one.skin_colors}</p>
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

export default Species;

