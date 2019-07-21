import React,{Component} from 'react';


class Signin extends Component{
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
                <input class="input100" type="text" name="username" placeholder="Username"></input>
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input class="input100" type="password" name="pass" placeholder="Password"></input>
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div class="contact100-form-checkbox">
                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  Login
                </button>
              </div>

            
            </div>
        );
    }
}
export default Signin;