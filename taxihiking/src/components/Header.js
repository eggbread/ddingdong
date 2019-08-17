import React, { Component } from "react";
import Icon from "../asset/images/icon1.png";
import Search from "../asset/images/search.png";
import $ from "jquery";
import { BrowserRouter as withRouter, Link } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button, Image } from 'react-bootstrap';
import './Header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationOpen: false,
      location: null
    };
  }

  findLocation(des){
            var geocode = "https://maps.googleapis.com/maps/api/geocode/json?address="+des+"&key=AIzaSyBgEzBTBpggPy6ouKjcIaKkNHlyAuKZ59Q";
            $.ajax({
                url: geocode,
                type: 'POST',
                success: function(myJSONResult) {
                    if (myJSONResult.status === 'OK') {
                        for(var i=0;i<myJSONResult.results[0].address_components.length;i++){
                            if(myJSONResult.results[0].address_components[i].types[0]==="postal_code"){
                                window.sessionStorage.setItem('location',myJSONResult.results[0].address_components[i].long_name.replace("-",""))
                                break;
                            }
                        }

                    } else if (myJSONResult.status === 'ZERO_RESULTS') {
                        alert("지오코딩이 성공했지만 반환된 결과가 없음을 나타냅니다.\n\n이는 지오코딩이 존재하지 않는 address 또는 원격 지역의 latlng을 전달받는 경우 발생할 수 있습니다.")
                    } else if (myJSONResult.status === 'OVER_QUERY_LIMIT') {
                        alert("할당량이 초과되었습니다.");
                    } else if (myJSONResult.status === 'REQUEST_DENIED') {
                        alert("요청이 거부되었습니다.\n\n대부분의 경우 sensor 매개변수가 없기 때문입니다.");
                    } else if (myJSONResult.status === 'INVALID_REQUEST') {
                        alert("일반적으로 쿼리(address 또는 latlng)가 누락되었음을 나타냅니다.");
                    }
                }
            })

  };

  
  render() {
    const google=(
      <GooglePlacesAutocomplete
                                      onSelect={({ description }) => {
                                        this.findLocation(description)
                                      }}
                                      inputStyle={{ fontWeight: 'bold'}}
                                      onChange={this.findLocation.bind(this)}
                                      placeholder="현재 주소를 검색하세요"
                                    />
    )
    var styles;
    if(this.props.location.pathname!=="/"){
      styles={
        width:"100%",
        height:"200px"
      }
      return (
        <section class="d-flex align-items-center" id="section_two">
           <Link to="/" className="IconLink"> <Image id="LogoIcon_two" src={ Icon } width="100px" height="100px"/> </Link>
          <div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-md-12">
                      <div class="slider-title_box">
      
                          <div class="row d-flex justify-content-center">
                              <div class="col-md-10">
                                  <form className="form-wrap" id="searchBar" >
                                  
                                  <div className="search justify-content-center">
                                  
                                    {google}
  
                                    <Link to={"/list/all/"} inputStyle={{height:'100%'}}>
                                    <Button variant="light" className="btn-search" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24">
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </Button>
                                    </Link>
                                  </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      );
    }else{
      styles={
        width:"100%",
        height:"730px"
      }
      return (
        <section class="slider d-flex align-items-center" style={{width:'100vw',height:'100vh'}}>
          <div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-md-12">
                      <div class="slider-title_box">
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="slider-content_wrap">
                                      <div class="col-md-12">
                                        <img src={Icon} alt="DDing Dong" className="LogoIcon"/>
                                      </div>
                                      <h5 style={{color: '#00A100', fontWeight: 'bold'}}>Eat tasty, Order Easily.</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="row d-flex justify-content-center">
                              <div class="col-md-10">
                                  <form class="form-wrap mt-4">
                                  <div className="search justify-content-center">
  
                                    {google}
  
                                    <Link to={"/list/all/"} inputStyle={{height:'100%'}}>
                                    <Button variant="light" className="btn-search" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24">
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </Button>
                                    </Link>
                                  </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      );
    }
    // return (
    //   <section class="slider d-flex align-items-center" style={styles}>
    //     <div class="container">
    //         <div class="row d-flex justify-content-center">
    //             <div class="col-md-12">
    //                 <div class="slider-title_box">
    //                     <div class="row">
    //                         <div class="col-md-12">
    //                             <div class="slider-content_wrap">
    //                                 <div class="col-md-12">
    //                                   <img src={Icon} alt="DDing Dong" className="LogoIcon"/>
    //                                 </div>
    //                                 <h5 style={{color: '#00A100', fontWeight: 'bold'}}>Eat tasty, Order Easily.</h5>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="row d-flex justify-content-center">
    //                         <div class="col-md-10">
    //                             <form class="form-wrap mt-4">
    //                             <div className="search justify-content-center">

    //                               <GooglePlacesAutocomplete
    //                                 onSelect={({ description }) => {
    //                                   this.findLocation(description)
    //                                 }}
    //                                 inputStyle={{ fontWeight: 'bold'}}
    //                                 onChange={this.findLocation.bind(this)}
    //                                 placeholder="현재 주소를 검색하세요"
    //                               />

    //                               <Link to={"/list/all/"} inputStyle={{height:'100%'}}>
    //                               <Button variant="light" className="btn-search" type="button">
    //                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24">
    //                                     <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    //                                   </svg>
    //                               </Button>
    //                               </Link>
    //                             </div>
    //                             </form>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    // );
  }
}
export default Header;
