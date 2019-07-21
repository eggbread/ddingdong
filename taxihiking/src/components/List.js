import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Header from './Header';
import $ from 'jquery';
function a(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://ec2-54-180-102-176.ap-northeast-2.compute.amazonaws.com:5000/review/hello",
        "method": "GET",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          "Postman-Token": "0bbfd45e-45e8-4bfb-95bd-f3e9ed7809f5,aa5c5b0c-af40-4a55-b117-5b066d1f9065",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": "{\n    \"Email\": null,\n    \"UserName\": null,\n    \"Password\": null\n}"
      }
      $.ajax(settings).done(function (response) {
        var data = JSON.parse(response);
        document.getElementById("img").src=data.item[0].img;
      });
}
const List=({match})=> {
    console.log(match.params);
        return(
            <div>
                <h1>This is {match.params.category}</h1>
                <ul>
                    <li><Link to="/menu/OUTBACK">아웃백 유성점</Link></li>
                    <button onClick={a}>Hi</button>
                    <img id="img" src="" alt=""></img>
                </ul>
            </div>
        );
    
}

export default List;