import React,{Component} from 'react';
import axios from 'axios';

class Signup extends Component{
    sendUserData(){
      var id = document.getElementById("id").value;
      var password = document.getElementById("password").value;
      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var birth = document.getElementById("birth").value;
     
      var data = {id:id, password:password, name:name,phone:phone,birth:birth};
       var obj = JSON.stringify(data);
       console.log(JSON.parse(obj));
      axios.post('http://localhost:4000/signup',{
        id : id,
        password:password,
        name:name,
        phone:phone,
        birth:birth
      })
    .then(result => {
      console.log(result)
      if(result){
        alert("회원가입이 되었습니다.");
        window.location.href="/"
      }else{
        alert("회원가입이 실패하였습니다.")
      }
    })
    
  }
    render(){
        return(
            <div>
                <span>
                Sign Up
              </span>
              <div>
                <input className="name" id="id" type="text" name="username" placeholder="ID를 입력해주세요"></input>
              </div>
              <div>
                <input className="name" id="password" type="password" name="username" placeholder="비밀번호를 입력해주세요"></input>
              </div>
              <div>
                <input className="name" id="name" type="text" name="username" placeholder="이름을 입력해주세요"></input>
              </div>
             
        
              
              <div>
                <input className="input100" pattern="(010)-\d{3,4}-\d{4}" type="text" id="phone" placeholder="Phonenumber"></input>
              </div>
              <div>
                <input className="name" id="birth" type="date" name="username"></input>
              </div>



              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.sendUserData}>
                  SignUp
                </button>
              </div>
            </div>
        );
    }
}
export default Signup;