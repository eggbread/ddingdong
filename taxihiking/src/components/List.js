import React, {Component} from 'react';

const List=({match})=> {
    console.log(match.params);
        return(
            <h1>This is {match.params.category}</h1>
        );
    
}

export default List;