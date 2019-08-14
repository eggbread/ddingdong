import React, { Component } from "react";
import { BrowserRouter as withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";

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
        .post("http://localhost:4000/list", {
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
      .post("http://localhost:4000/list", {
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
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <Link to={"/list/koreanfood/"}>한식</Link>
              </Col>
              <Col>
                <Link to={"/list/westfood/"}>양식</Link>
              </Col>
              <Col>
                <Link to={"/list/japanfood/"}>일식</Link>
              </Col>
              <Col>
                <Link to={"/list/chinafood/"}>중식</Link>
              </Col>
              <Col>
                <Link to={"/list/chicken/"}>치킨</Link>
              </Col>
              <Col>
                <Link to={"/list/pizza/"}>피자</Link>
              </Col>
              <Col>
                <Link to={"/list/pigfoot/"}>족발&보쌈</Link>
              </Col>
              <Col>
                <Link to={"/list/boon/"}>분식</Link>
              </Col>
            </Row>
          </Container>
          <h3>근처 {seletedCategory}식당에 대한 검색결과입니다.</h3>

          <Container>
            {this.state.storeList.map((item, index) => (
              <Row key={item.storename}>
                <Col>
                  <img
                    src={require("../asset/images/" +
                      item.userid +
                      "/main.jpg")}
                    alt=""
                    width="150px"
                    height="80px"
                  />
                </Col>
                <Col>
                  <Link to={"/menu/" + item.storeID}>{item.storename}</Link>
                </Col>
                <Col>{item.location}</Col>
                <Col>{item.tel}</Col>
              </Row>
            ))}
          </Container>
        </div>
      );
    }
  }
}

export default List;
