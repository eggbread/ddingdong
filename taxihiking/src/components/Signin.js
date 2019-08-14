import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {ButtonToolbar,Button} from 'react-bootstrap'


class Signin extends Component{
  constructor(props){
    super(props);
    this.state={
      isLogin:false,
    };
    this.keyPress = this.keyPress.bind(this);
  }
  keyPress(e){
    if(e.keyCode===13){
      this.receiveUserData();
    }
  }
  componentDidMount(){
    // fetch('http://localhost:4000/',{
    //   method:"POST"
    // }).then(res=>{
    //   console.log(res)
    // })
    axios.post('http://localhost:4000/',{
            token:window.sessionStorage.getItem('token')
        }).then(res=>{
          if(res.data){
            this.setState({
                isLogin:res.data
            })
            console.log(res.data)
            window.sessionStorage.setItem('user',res.data)
          }else{
            this.setState({
                isLogin:false
            })
          }
        })
    $('#id_Input').focus();
    
  }
  logout(){ 
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('token');
    window.location.reload();
}
    receiveUserData(){
      
      var id = document.getElementById('id_Input').value;
      var password = document.getElementById('password_Input').value;
      axios.post('http://localhost:4000/signin',{
        id:id,
        password:password
      }).then(res=>{
        if(res.status===200){
          var data = res.data;
          console.log(data);
          window.sessionStorage.setItem('token',data.token)
          if(data==="id"){
            alert("아이디가 틀렸거나 존재하지 않는 아이디입니다.");
          }else if(data==="pass"){
            alert("비밀번호가 옳바르지 않습니다.")
          }else{
            window.sessionStorage.setItem('user',data.user)
            document.location.href="/storemanage";
          }
        }
      })
      
    }
    render(){
      var componentLogin;
            if(this.state.isLogin){
                componentLogin=
                    <ButtonToolbar>
                        {this.state.isLogin} 님 안녕하세요
                        <Button bsstyle="warning" className="login100-form-btn" onClick={this.logout}>사장님 로그아웃</Button>
                        <Button bsstyle="warning" className="login100-form-btn"><Link to="/storemanage" >상점 관리</Link></Button>
                    </ButtonToolbar>  
            }else{
                componentLogin=
                <div>
                  <span>Log in</span>
                  <div>
                    <input className="name" id="id_Input" type="text" name="username" placeholder="ID를 입력해주세요"></input>
                  </div>
                  <div>
                    <input onKeyDown={this.keyPress} className="name" id="password_Input" type="password" name="username" placeholder="비밀번호를 입력해주세요"></input>
                  </div>
                  <button className="login100-form-btn" onClick={this.receiveUserData}>Login</button>
                  <Button bsstyle="warning" className="login100-form-btn"><Link to="/signup">사장님 회원가입</Link></Button>
                </div>         
            }
        return(
            <div>
            
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape"></i>
              </span>

              


              <div className="container-login100-form-btn">
                {/* <button className="login100-form-btn" onClick={this.receiveUserData}>
                  Login
                </button> */}
                {componentLogin}
              </div>

            
            </div>
        );
    }
}
export default Signin;