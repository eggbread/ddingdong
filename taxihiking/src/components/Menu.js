import React, {Component } from "react";
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            contents:[
                {id:1,title:"OUTBACK",src:"outback.png"},
                {id:2,title:"VIPS",src:"vips.jpg"},
                {id:3,title:"ASHLEY",src:"ashley.jpg"}
            ],
            items:[],
            isLoaded:false,
            contactData: [
                {id:1,name: "TOMAHAWK STEAK", price: "100g 당 20,000원"},
                {id:2,name: "BLACK LABEL STEAK", price: "커플 세트 86,000원 패밀리 세트 128,000원"},
                {id:3,name: "SIGNATURE STEAK", price: "39,900원"},
                {id:4,name: "BABY RIP", price: "400g 35,900원 550g 39,900원"}
            ],
        }
    }
    componentDidMount() {

        fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0144b3bce128c91a94e5a39b1ec00d60')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items:json,
                isLoaded:true,
            })
        });

    }
      
    render(){
        console.log(this.props.data);
        var { isLoaded } =this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return(
                <div>   
                {/* <img src={require("../asset/images/"+this.state.contents[0].src)} alt="menu" height="400px"></img> */}
                <h1>{this.state.contents[0].title}</h1>
                <table>
                    <tbody>

                   {this.state.contactData.map((item,index) =>
                   <tr>

                       <td key={index}>{item.name} {item.price}</td>
                   </tr>
                   )}
                   </tbody>

                </table>
                <p>This is clickpoint</p>
                <p>This is blog</p>
                <p>This is storedata</p>
                <button><Link to={this.state.contents[0].title+"/order"}>주문 하기</Link></button>
                {/* <p>{weather.city.name}</p> */}
            </div>
            
            );
        }
    }
}
export default Menu;