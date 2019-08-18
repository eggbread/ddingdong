import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ButtonToolbar, Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signin.css";
import Icon from "../asset/images/icon2.png";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
    this.keyPress = this.keyPress.bind(this);
  }
  keyPress(e) {
    if (e.keyCode === 13) {
      this.receiveUserData();
    }
  }
  componentWillMount() {
    // fetch('http://13.125.117.85:4000/',{
    //   method:"POST"
    // }).then(res=>{
    //   console.log(res)
    // })
    axios
      .post("http://13.125.117.85:4000/", {
        token: window.sessionStorage.getItem("token")
      })
      .then(res => {
        debugger
        console.log(res)
        if (res.data) {
          this.setState({
            isLogin: res.data
          });
          console.log(res.data);
          window.sessionStorage.setItem("user", res.data);
        } else {
          this.setState({
            isLogin: false
          });
        }
      });
    $("#id_Input").focus();
  }
  logout() {
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("token");
    window.location.reload();
  }
  receiveUserData() {
    var id = document.getElementById("id_Input").value;
    var password = document.getElementById("password_Input").value;
    debugger
    axios
      .post("http://13.125.117.85:4000/signin", {
        id: id,
        password: password
      })
      .then(res => {
        debugger
        if (res.status === 200) {
          debugger
          var data = res.data;
          console.log(data);
          window.sessionStorage.setItem("token", data.token);
          if (data === "id") {
            alert("아이디가 틀렸거나 존재하지 않는 아이디입니다.");
          } else if (data === "pass") {
            alert("비밀번호가 옳바르지 않습니다.");
          } else {
            window.sessionStorage.setItem("user", data.user);
            document.location.href = "/storemanage";
          }
        }
      });
  }
  render() {
    var componentLogin;
    if (this.state.isLogin) {
      componentLogin = (
        <ButtonToolbar>
          <div
            className="successLogInDiv"
            style={{
              textAlign: "center",
              marginTop: "5px",
              marginBottom: "5px"
            }}
          >
            <div className="innerSuccessLogInDiv">
              <h4 textAlign="center"> Hello! </h4>
              {this.state.isLogin} 님 안녕하세요
              <br />
              <br />
              <Button className="login100-form-btn" onClick={this.logout}>
                사장님 로그아웃
              </Button>{" "}
              &nbsp;
              <Button className="login100-form-btn">
                <Link
                  to="/storemanage"
                  style={({ textDecoration: "none" }, { color: "white" })}
                >
                  상점 관리
                </Link>
              </Button>
            </div>
          </div>
        </ButtonToolbar>
      );
    } else {
      componentLogin = (
        <div className="SigninForm">
          <br />
          <br />
          <h2> Log in </h2>
          <br />
          <br />
          <div className="form">
            <FormGroup>
              <label>ID</label>
              <FormControl 
              autoFocus 
              type="id" id="id_Input" 
              />
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <FormControl onKeyDown={this.keyPress} id="password_Input" type="password" />
            </FormGroup>
            <br />
            <Button block type="submit" onClick={this.receiveUserData}>
              Login
            </Button>
          
          <Button
            block
            className="ownerSignUpButton"
            >
            <Link
              to="/signup"
              className="ownerSignUpButton"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "white" }}>사장님 회원가입</span>
            </Link>
          </Button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {/* <span className="login100-form-logo">
          <i className="zmdi zmdi-landscape" />
        </span> */}

        <div>
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
