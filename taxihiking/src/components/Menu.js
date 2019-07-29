import React, {Component } from "react";
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import axios from 'axios'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            item:{},
            isLoaded:false,      
            storeID:props.match.params.storeID
        }
    }
    componentDidMount() {

        // fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0144b3bce128c91a94e5a39b1ec00d60')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         items:json,
        //         isLoaded:true,
        //     })
        // });
        axios.post('http://localhost:4000/menu',{
            storeID:this.state.storeID
        }).then(res=>{
            console.log(res)
            this.setState({
                item:res.data[0],
                isLoaded:true
            })
        })

    }
      
    render(){
        
       // console.log(this.props.data);
        var { isLoaded } =this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }else{
            var data=JSON.parse(this.state.item.menu);
            var temp = 0;
            for(var i in data){
                temp += parseInt(data[i].click);
            }
            return(
                <div>   
                {/* <img src={require("../asset/images/"+this.state.contents[0].src)} alt="menu" height="400px"></img> */}
                <h1>{this.state.item.storename}</h1>
                <table>
                    <tbody>

                   {data.map((item,index) =>
                       
                   <tr>
                       <td key={index}>{item.name} {item.price}</td>
                   </tr>
                   )}
                   </tbody>

                </table>
                <ul>
                    {data.map((item,index)=>
                        <li>{item.name}   {Math.round((item.click/temp)*100)}%</li>
                    )}
                </ul>
                <p>This is blog</p>
                <div>
                    전화번호 : {this.state.item.tel} <br></br>
                    위치 : {this.state.item.location} <br></br>
                    영업시간 : {this.state.item.openinghours} <br></br>
                    가게 설명 : {this.state.item.description}
                </div>
                <button><Link to={this.state.item.storeID+"/order"}>주문 하기</Link></button>
                {/* <p>{weather.city.name}</p> */}
                
            </div>
            
            );
        }
    }
}
export default Menu;