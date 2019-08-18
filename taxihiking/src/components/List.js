import React, { Component } from "react";
import { BrowserRouter as withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
import Loader from 'react-loader'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Table,TableBody,TableCell,TableRow } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import './List.css'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.match.params.category,
      storeList: null,
      switch: false
    };
    
  }
  componentWillMount() {
    if (!window.sessionStorage.getItem("location")) {
      alert("주소를 먼저 입력해주세요");
      window.location.href = "/";
    } else {
      axios
        .post("http://13.125.117.85:4000/list", {
          category: this.props.match.params.category,
          location: window.sessionStorage.getItem("location")
        })
        .then(result => {
          if (result.statusText === "OK") {
            this.setState({
              storeList: result.data
            });
          } else {
          }
        });
    }
  }

  componentWillReceiveProps(next) {
    axios
      .post("http://13.125.117.85:4000/list", {
        category: next.match.params.category,
        location: window.sessionStorage.getItem("location")
      })
      .then(result => {
        if (result.statusText === "OK") {
          this.setState({
            storeList: result.data
          });
        } else {
        }
      });
  }

  render() {
    var seletedCategory;
    switch (this.props.match.params.category) {
      case "koreanfood":
        seletedCategory = "한식";
        break;
      case "westfood":
        seletedCategory = "양식";
        break;
      case "japanfood":
        seletedCategory = "일식";
        break;
      case "chinafood":
        seletedCategory = "중식";
        break;
      case "chicken":
        seletedCategory = "치킨";
        break;
      case "pigfoot":
        seletedCategory = "족발&보쌈";
        break;
      case "pizza":
        seletedCategory = "피자";
        break;
      case "boon":
        seletedCategory = "분식";
        break;
      default:
        seletedCategory = "모든 ";
        break;
    }
    
    if (!this.state.storeList) {
      return <Loader/>;
    } else {
      return (
        <div>
          
         <Navbar collapseOnSelect bg="light" expand="lg" style={{borderBottom: '1px solid black', width:'100vw'}}>
    <Navbar.Brand style={{color: '#60A186', fontWeight:'bold'}}>Category</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{textAlign:'center'}}>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/koreanfood/"} style={{textAlign:'center'}}>한식</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/westfood/"}>양식</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/japanfood/"}>일식</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/chinafood/"}>중식</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/chicken/"}>치킨</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/pizza/"}>피자</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/pigfoot/"}>족발&보쌈</Link></Nav.Item>
      <Nav.Item style={{marginRight:"50px",marginBottom:"10px"}}><Link to={"/list/boon/"}>분식</Link></Nav.Item>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  <br/>
          <h5>근처 {seletedCategory}식당에 대한 검색결과입니다.</h5>
  
          <Table style={{width: '100vw',padding:"none"}}>
            <TableBody>
            {this.state.storeList.map((item, index) => (
              <TableRow key={item.storename}>
                <TableCell className="storeList">
                  <img
                    src={require("../asset/images/" +
                      item.userid +
                      "/main.jpg")}
                    alt=""
                    width="100px"
                    height="80px"
                  />
                </TableCell>
                <TableCell className="StoreName storeList" padding="none">
                  <Link to={"/menu/" + item.storeID}>{item.storename}</Link>
                </TableCell>
              
                  <TableCell className="listTable storeList" padding="none"><div>{item.location}</div></TableCell>
                  <TableCell  padding="none">{item.tel}</TableCell>
  
              </TableRow>
            ))}
            </TableBody>
          </Table>
          </div>
        
      );
    }
  }
}

export default List;
