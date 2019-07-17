import React , { Component } from 'react';
import './Category.css'
import Menu from '../components/Menu';
import App from '../App';
import List from './List';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

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
                            <td><Link to="/list/koreanfood"><img src={require("../asset/images/koreanfood.jpg")} alt="" height="150px" width="150px"></img></Link></td>
                            <td><Link to="/list/westfood"><img src={require("../asset/images/westfood.jpg")} alt="" height="150px" width="150px"></img></Link></td>
                            <td><Link to="/list/japanfood"><img src={require("../asset/images/japanfood.jpg")} alt="" height="150px" width="150px"></img></Link></td>
                            <td><Link to="/list/chinafood"><img src={require("../asset/images/chinafood.png")} alt="" height="150px" width="150px"></img></Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/list/chicken"><img src={require("../asset/images/chicken.png")} alt="" height="150px" width="150px"></img></Link></td>
                            <td><Link to="/list/pizza"><img src={require("../asset/images/pizza.jpg")} alt="" height="150px" width="150px"></img></Link></td>
                            <td><Link to="/list/pigfoot"><img src={require("../asset/images/pigfoot.jpg")} alt="" height="150px" width="150px"></img></Link></td>
                            <td><Link to="/list/boon"><img src={require("../asset/images/boon.jpg")} alt="" height="150px" width="150px"></img></Link></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}


export default Category;