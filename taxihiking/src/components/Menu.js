import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import Loader from 'react-loader'
import {Button} from 'react-bootstrap';
import './Menu.css'
import { Table,TableBody,TableCell,TableRow } from '@material-ui/core'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      isLoaded: false,
      storeID: props.match.params.storeID,
      crawling: [],
      postReady: false
    };
  }

  componentWillMount() {
    axios
      .post("http://13.125.117.85:4000/menu", {
        storeID: this.state.storeID
      })
      .then(res => {
        window.sessionStorage.setItem("menu", JSON.stringify(res.data[0]));
        this.setState({
          item: res.data[0],
          isLoaded: true
        });
      })
      .then(() => {
        axios
          .post("http://13.125.117.85:4000/menu/search", {
            data: this.state.item.storename + "후기"
          })
          .then(res => {
            this.setState({
              crawling: res.data,
              postReady: true
            });
            console.log(res);
          });
      });
  }
  render() {
    if (!this.state.isLoaded||!this.state.postReady) {
      return (
      <div style={{height:"300px"}}><Loader/></div>
      );
    } else {
      var temp = parseInt(0);
      var data = JSON.parse(this.state.item.menu);
      console.log(data)
      for (var i in data) {
        temp += parseInt(data[i].click);
      }
      const data2 = {
        labels: data.map(item => item.name),
        datasets: [
          {
            label: "인기메뉴",
            fill: true,
            lineTension: 0.1,
            backgroundColor:  '#'+ Math.round(Math.random()*0xffffff).toString(16),
            //막대기
            borderColor: "rgba(75,192,192,1)", //인기메뉴 옆에 메뉴 보더
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map(item => Math.round((item.click / temp) * 100))
          }
        ]
      };
      
      return (
        <div>
          {/* <img src={require("../asset/images/eggbread/4/1.jpg")} alt="menu" height="400px"></img> */}
          <div className="menu_storeName">
            <h1>{this.state.item.storename}</h1>
            <img
              src={require("../asset/images/" +
                this.state.item.userid +
                "/main.jpg")}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <Table className="menuTable">
            <TableBody>
              <TableRow>
                <TableCell>사진</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>가격</TableCell>
              </TableRow>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell style={{width: '200px'}}>
                    <img
                      src={require("../asset/images/" +
                        this.state.item.userid +
                        "/" +
                        item.img)}
                      alt=""
                      className="MenuImg"
                    />
                  </TableCell>
                  <TableCell>
                    {item.name}
                    
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div width={"50px"} height={"50px"}>
            <HorizontalBar
              data={data2}
              options={{ maintainAspectRatio: false }}
            />
          </div>
         
            <Table className="posting">
              <TableBody>
                {this.state.crawling.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={item.image}
                        width="100px"
                        height="100px"
                        alt=""
                      />
                    </TableCell>
                    <TableCell>
                      <h4>
                        <a href={item.link}>{item.title}</a>
                      </h4>
                      {item.passage}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          
          <div>
            <Table className="storeData">
              <TableBody>
                <TableRow>
                <TableCell>전화번호 : </TableCell><TableCell>{this.state.item.tel}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>위치 : </TableCell><TableCell>{this.state.item.location}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>영업시간 : </TableCell><TableCell>{this.state.item.openinghours}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>가게 설명 : </TableCell><TableCell>{this.state.item.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="orderBtn">
            <img src={require("../asset/images/pointer.png")} alt="" width="40px" height="40px"></img>
            <Button variant="warning" className="order_btn">
              <Link to={this.state.item.storeID + "/order"}>주문 하기</Link>
            </Button>
          </div>
        </div>
      );
    }
  }
}
export default Menu;