import React,{Component} from 'react';
import $ from "jquery";
import { restElement } from '@babel/types';

class Signup extends Component{
    sendUserData(){
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      // var settings = {
      //   "async": true,
      //   "crossDomain": true,
      //   "url": "http://192.168.35.23:9000/user?name="+name+"&age="+age,
      //   "method": "POST",
      //   "headers": {
      //     "Content-Type": "application/json",
      //     "cache-control": "no-cache",
      //     "Postman-Token": "713172b7-07b2-4a7b-bde4-e7c2b349ff85"
      //   },
      //   "processData": false,
      //   "data": "{\n    \"Email\": null,\n    \"UserName\": null,\n    \"Password\": null\n}"
      // }
      
      // $.ajax(settings).done(function (response) {
      //   console.log(response);
      // });
      // var settings = {
      //   "async": true,
      //   "crossDomain": true,
      //   "url": "http://ec2-54-180-102-176.ap-northeast-2.compute.amazonaws.com:5000/review/hello",
      //   "method": "GET",
      //   "headers": {
      //     "Content-Type": "application/json",
          
      //     "Accept": "*/*",
      //     "Cache-Control": "no-cache",
      //     "Postman-Token": "0bbfd45e-45e8-4bfb-95bd-f3e9ed7809f5,aa5c5b0c-af40-4a55-b117-5b066d1f9065",
          
          
          
      //     "cache-control": "no-cache"
      //   },
      //   "processData": false,
      //   "data": "{\n    \"Email\": null,\n    \"UserName\": null,\n    \"Password\": null\n}"

      // }
      // $.ajax(settings).done(function (response) {
      //   var data = JSON.parse(response);
      //   alert(data.item[0].title);
      //     // alert(data[0].title)
      //   });
      var url = "http://ec2-54-180-102-176.ap-northeast-2.compute.amazonaws.com:5000/user?name="+name+"&age="+String(age);
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
        type:"POST",
        success:function(result){
          if(result.Status==="Success"){
            alert("회원가입이 되었습니다.")
          }else{
            alert("회원가입 실패");
          }
        }
      })
    }
    render(){
        return(
            <div>
                <span className="login100-form-title p-b-34 p-t-27">
                Sign Up
              </span>
              <div id="signupimg">
                <img id="img" src="" alt=""></img>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Enter username">
                <input className="name" id="name" type="text" name="username" placeholder="Username"></input>
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Enter age">
                <input className="input100" id="age" type="number" name="pass" placeholder="Age"></input>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              {/* <div className="wrap-input100 validate-input" data-validate="Enter phonenumber">
                <input className="input100" pattern="(010)-\d{3,4}-\d{4}" type="text" name="phone" placeholder="Phonenumber"></input>
                <span className="focus-input100" data-placeholder="&#xf2b6;"></span>
              </div> */}



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