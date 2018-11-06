import React from 'react';

const regex = /[\d]+/;

const all = (results) => {

    return (
        <ul className="list-group list-group-flush">
            {results.items.map( (item, index) => (
                <li key={index} className="list-group-item font-weight-bold" >
                    <a href= {"/one/" + results.name + "/" +  item.url.match(regex)}> { typeof(item.title) == 'undefined' ? item.name : item.title } </a>
                </li>
            ))}
        </ul>
    );
}

export default all;