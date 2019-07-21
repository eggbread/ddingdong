import React,{Component} from 'react';

class Signup extends Component{
    render(){
        return(
            <div>
                <span class="login100-form-title p-b-34 p-t-27">
                Sign Up
              </span>
              <div id="signupimg">
                <img id="img" src="" alt=""></img>
              </div>
              <div class="wrap-input100 validate-input" data-validate = "Enter username">
                <input class="input100" type="text" name="username" placeholder="Username"></input>
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input class="input100" type="password" name="pass" placeholder="Password"></input>
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              <div class="wrap-input100 validate-input" data-validate="Enter phonenumber">
                <input class="input100" pattern="(010)-\d{3,4}-\d{4}" type="text" name="phone" placeholder="Phonenumber"></input>
                <span class="focus-input100" data-placeholder="&#xf2b6;"></span>
              </div>



              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  SignUp
                </button>
              </div>
            </div>
        );
    }
}
export default Signup;