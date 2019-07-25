import React, { Component } from 'react';
import Icon from "../asset/images/bell.png"
import Search from "../asset/images/search.png"
import Pin from "../asset/images/pin.png"
import $ from "jquery";
import './Header.css'
import ReactTouchEvents from "react-touch-events";


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            location:null,
        }
    }
    componentDidMount(){
        this.setState({
            location:this.findLocation(),

        })
    }
    findLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var geocode = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyBgEzBTBpggPy6ouKjcIaKkNHlyAuKZ59Q";
                $.ajax({
                    url: geocode,
                    type: 'POST',
                    success: function(myJSONResult) {

                        if (myJSONResult.status === 'OK') {
                            
                            var tag = "";
                            tag += myJSONResult.results[2].formatted_address;
                            document.getElementById("searchInput").value = tag;
                            return tag;
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
                });
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    render() {
        

            return (
                <div className = "wrapper" >
        
            <div className = "icon" >
                <a href="/">
                    <img src = { Icon } alt = "mark"width = "50px"height = "50px" />
                    <p id = "iconName" > 띵동 </p> 
                </a>
            </div>
            <div></div>
            <div className = "search" >
                <ReactTouchEvents onTap = { this.findLocation.bind(this) }onSwipe = { this.findLocation.bind(this) } >
                    <img src = { Pin }alt = "mark"width = "50px"height = "50px"onClick = { this.findLocation }onTouchStart = { this.findLocation }/>
                </ReactTouchEvents> 
                <input type = "text" style = {{ width: "500px", height: "50px", fontSize: "30px" }} id = "searchInput"></input> 
                <img src = { Search }alt = "mark"width = "50px"height = "50px" />
            </div> 
        </div>
        );
    }
}
export default Header;