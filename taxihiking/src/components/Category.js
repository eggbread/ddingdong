import React, { Component } from "react";
import { BrowserRouter as withRouter, Link } from "react-router-dom";
import "./Category.css";

class Category extends Component {
  render() {
    return (
      <div id="listWrapper">
        <div id="list">
          <div>
            <Link to={"/list/koreanfood/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">한식</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/koreanfood.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/list/westfood/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">양식</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/westfood.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/list/japanfood/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">일식</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/japanfood.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/list/chinafood/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">중식</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/chinafood.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>

          <div>
            <Link to={"/list/chicken/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">치킨</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/chicken.png")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/list/pizza/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">피자</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/pizza.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/list/pigfoot/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">족발&보쌈</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/pigfoot.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/list/boon/"} className="categoryInner">
              <div height="100%" className="categoryWrapper">
                <div className="categoryText">분식</div>
                <img
                  className="categoryImg"
                  src={require("../asset/images/boon.jpg")}
                  alt=""
                  height="100%"
                  width="100%"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
