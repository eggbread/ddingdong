import React , { Component } from 'react';
import './Category.css'
import Menu from '../components/Menu';
import App from '../App';
import List from './List';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import {render} from 'react-dom';

class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            
            <div id="list">
                <table>
                    <thead>
                        <tr>
                            <td colSpan="4">Menu List</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#/list"><img src={require("../asset/images/koreanfood.jpg")} alt="" height="150px" width="150px"></img></a></td>
                            <td><a href="#/list"><img src={require("../asset/images/westfood.jpg")} alt="" height="150px" width="150px"></img></a></td>
                            <td><a href="#/list"><img src={require("../asset/images/japanfood.jpg")} alt="" height="150px" width="150px"></img></a></td>
                            <td><a href="#/list"><img src={require("../asset/images/chinafood.png")} alt="" height="150px" width="150px"></img></a></td>
                        </tr>
                        <tr>
                            <td><a href="#/list"><img src={require("../asset/images/chichken.png")} alt="" height="150px" width="150px"></img></a></td>
                            <td><a href="#/list"><img src={require("../asset/images/pizza.jpg")} alt="" height="150px" width="150px"></img></a></td>
                            <td><a href="#/list"><img src={require("../asset/images/pigfoot.jpg")} alt="" height="150px" width="150px"></img></a></td>
                            <td><a href="#/list"><img src={require("../asset/images/boon.jpg")} alt="" height="150px" width="150px"></img></a></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Category;