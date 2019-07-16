import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header'
import {Router,Route,Link} from 'react-router-dom';
import Category from './components/Category'
import List from './components/List'
ReactDOM.render(<Header/>, document.getElementById('header'));
// ReactDOM.render( (
//     <Router>
//         <Route path="/" component={Category}>
//             <Route path="list" component={List}></Route>
//         </Route>
//     </Router>
// ),document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
