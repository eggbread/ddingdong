import React,{Component} from 'react';
import $ from "jquery";
import axios from 'axios';

class Signup extends Component{
    sendUserData(){
      var id = document.getElementById("id").value;
      var password = document.getElementById("password").value;
      var name = document.getElementById("name").value;
      var storename = document.getElementById("storename").value;
      var phone = document.getElementById("phone").value;
      var birth = document.getElementById("birth").value;
     
      var data = {id:id, password:password, name:name,storename:storename,phone:phone,birth:birth};
       var obj = JSON.stringify(data);
       console.log(JSON.parse(obj));
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
      //var url = "http://ec2-54-180-102-176.ap-northeast-2.compute.amazonaws.com:5000/user?name="+name+"&age="+String(age);
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
      // $.ajax({
      //   url:url,
      //   type:"POST",
      //   success:function(result){
      //     if(result.Status==="Success"){
      //       alert("회원가입이 되었습니다.")
      //       document.location.href="/";
      //     }else{
      //       alert("회원가입 실패");
      //     }
      //   }
      // })
      axios.post('http://localhost:4000/signup',{
        id : id,
        password:password,
        name:name,
        storename:storename,
        phone:phone,
        birth:birth
      })
    .then(result => {
      if(result.statusText==="OK"){
        alert("OK");
      }else{

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
                <input className="name" id="storename" type="text" name="username" placeholder="가게이름을 입력해주세요"></input>
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