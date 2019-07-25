import React,{Component} from 'react';
import axios from 'axios';

class Signin extends Component{
    receiveUserData(){
      var id = document.getElementById('id').value;
      var password = document.getElementById('password').value;
      axios.post('http://localhost:4000/signin',{
        id:id,
        password:password
      }).then(res=>{
        if(res.status===200){
          var data = res.data;
          console.log(data);
          if(data==="success"){
            console.log("HI")
            document.location.href="/";
          }else{
            alert("비밀번호가 틀렸습니다");
          }
        }
      })
      
    }
    render(){
        return(
            <div>
            
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape"></i>
              </span>

              <span className="login100-form-title p-b-34 p-t-27">
                Log in
              </span>

              <div>
                <input className="name" id="id" type="text" name="username" placeholder="ID를 입력해주세요"></input>
              </div>
              <div>
                <input className="name" id="password" type="password" name="username" placeholder="비밀번호를 입력해주세요"></input>
              </div>


              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.receiveUserData}>
                  Login
                </button>
              </div>

            
            </div>
        );
    }
}
export default Signin;