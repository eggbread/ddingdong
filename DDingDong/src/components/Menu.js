import React, {Component } from "react";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            contents:[
                {id:1,title:"OUTBACK",src:"outback.png"},
                {id:2,title:"VIPS",src:"vips.jpg"},
                {id:3,title:"ASHLEY",src:"ashley.jpg"}
            ]
        }
    }
 
    render(){
        return(
            <div>   
                <img src={require("../asset/images/"+this.state.contents[1].src)} alt="menu" height="400px"></img>
                <h1>{this.state.contents[0].title}</h1>
                <ul>
                    
                </ul>
            </div>
            
        );
    }
}
export default Menu;