import React, { Component } from "react";
import Icon from "../asset/images/icon2.png";
import Search from "../asset/images/search.png";
import $ from "jquery";
import "./Header.css";
import { BrowserRouter as withRouter, Link } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

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
    return (
      <div className="header_Wrapper">
        <div className="icon">
          <Link to="/">
            <img src={Icon} alt="mark" width="140px" height="140px" />
          </Link>
        </div>
        <div />
        <div className="search">
          <GooglePlacesAutocomplete
            onSelect={({ description }) => {
              this.findLocation(description)
            }}
            onChange={this.findLocation.bind(this)}
            placeholder="현재 주소를 검색하세요"
            
          />
          
          <Link to={"/list/all/"}>
            <img src={Search} alt="mark" width="50px" height="50px" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
