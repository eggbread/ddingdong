import React,{Component} from 'react';
import axios from 'axios';
import './Signup.css';
import {ButtonToolbar, Button, FormGroup, FormControl} from 'react-bootstrap';


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
      axios.post('http://13.125.117.85:4000/signup',{
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
          <div className="SignupForm Login" style={{margin:'10px 0 10px 0'}}>
          
          <br/>

          <h2> Sign up </h2>
          <br/>
          <br/>
  <div className="form">
    <FormGroup controlId="id" bsSize="large">
      <label>ID</label>
      <FormControl
        type="id"
        id="id"
        
      />
    </FormGroup>
    <FormGroup controlId="password" bsSize="large">
      <label>Password</label>
      <FormControl
        id="password"
        type="password"
        
      />
    </FormGroup>
    <FormGroup controlId="text" bsSize="large">
      <label>Name</label>
      <FormControl
        type="text"
        id="name"
        
      />
    </FormGroup>
    <FormGroup controlId="number" bsSize="large">
      <label>Phone Number</label>
      <FormControl
        type="number"
        id="phone"
        
        pattern="(010)-\d{3,4}-\d{4}"
      />
    </FormGroup>
    <FormGroup controlId="date" bsSize="large">

      <label>Birth</label>
      <FormControl
        type="date"
        id="birth"
      />
    </FormGroup>
      <br/>
    <Button
      block
      bsSize="large"
      type="submit"
      onClick={this.sendUserData}
    >
      Sign up
    </Button>
    <br/>
    </div>
</div>
        );
    }
}
export default Signup;