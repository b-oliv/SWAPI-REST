import React from 'react';
import One from './One';
import Loading from '../Loading';
import Pagination from "../Pagination";

class Films extends One {

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
              <h2>{schema + ": " + one.title}</h2>
              <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Created at: {one.release_date}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">By {one.director}</h6>
                    <p className="card-text">{one.opening_crawl}</p>
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

export default Films;

