import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Header from './Header';

const List=({match})=> {
    console.log(match.params);
        return(
            <div>
                <h1>This is {match.params.category}</h1>
                <ul>
                    <li><Link to="/menu/OUTBACK">아웃백 유성점</Link></li>

                </ul>
            </div>
        );
    
}

export default List;