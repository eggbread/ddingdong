import React , { Component } from 'react';
import './Category.css'
import Menu from '../components/Menu';
import App from '../App';
import axios from 'axios';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:false,
        }
    }
    componentDidMount(){
        axios.post('http://localhost:4000/').then(res=>{
            console.log(res);
          if(res.data){
            this.setState({
                isLogin:true
            })
          }else{
            this.setState({
                isLogin:false
            })
          }
        })
      }
    
    logout(){
        axios.post('http://localhost:4000/logout')
        .then(res=>{
            if(res.status===200){
                console.log(res);
                //document.location.href="/";
            }
        })
    }
    render(){
        var componentLogin;
        if(this.state.isLogin){
            componentLogin=
                <p>

              <button className="login100-form-btn" onClick={this.logout}>관리자 로그아웃</button>
              <button className="login100-form-btn"><Link to="/signup">상점 관리</Link></button>
                </p>
              
            
        }else{
            componentLogin=
                <p>

              <button className="login100-form-btn"><Link to="/signin">관리자 로그인</Link></button>
              <button className="login100-form-btn"><Link to="/signup">관리자 회원가입</Link></button>
                </p>
              
            
        }
        console.log(this.state.isLogin);
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
                            <td><Link to="/list/koreanfood/"><img src={require("../asset/images/koreanfood.jpg")} alt="" height="150px" width="150px"></img></Link></td>
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
                {componentLogin}
                
            </div>
        );
    }
}


export default Category;