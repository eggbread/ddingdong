import React,{Component} from 'react';
import $ from 'jquery';

class Signin extends Component{
    receiveUserData(){
      var url = "http://ec2-54-180-102-176.ap-northeast-2.compute.amazonaws.com:5000/signup";
      // fetch(url,{
      //   type:'POST',
      //   headers:{
      //     "Content-Type": "application/json",
      //     "cache-control": "no-cache",
      //     "Postman-Token": "713172b7-07b2-4a7b-bde4-e7c2b349ff85"
      //   }
      // }).then(res=>{
      //   return res.json();
      // }).then(json =>{
      //   console.log(json);
      // })
      $.ajax({
        url:url,
        type:"GET",
        success:function(result){
          var data = JSON.parse(result);
          var name = document.getElementById("name").value;
          var age =document.getElementById("age").value;
          var found=false;
         
          for(var i=0;!found;i++){
            if(data.people[i][1]===name){
              if(data.people[i][2]===parseInt(age)){
                found=true;
              }
            }
          }
          document.location.href="/";
        }
      })
    }
    render(){
        return(
            <div>
            
              <span class="login100-form-logo">
                <i class="zmdi zmdi-landscape"></i>
              </span>

              <span class="login100-form-title p-b-34 p-t-27">
                Log in
              </span>

              <div class="wrap-input100 validate-input" data-validate = "Enter username">
                <input class="input100" id="name" type="text" name="username" placeholder="Username"></input>
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input class="input100" id="age" type="password" name="pass" placeholder="Password"></input>
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div class="contact100-form-checkbox">
                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={this.receiveUserData}>
                  Login
                </button>
              </div>

            
            </div>
        );
    }
}
export default Signin;