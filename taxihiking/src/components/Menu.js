import React, {Component } from "react";
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import axios from 'axios'
import { HorizontalBar} from 'react-chartjs-2'
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            item:{},
            isLoaded:false,      
            storeID:props.match.params.storeID,
            crawling:[]
        }
    }
    
    componentDidMount() {
        axios.post('http://localhost:4000/menu',{
            storeID:this.state.storeID
        }).then(res=>{
            window.sessionStorage.setItem('menu',JSON.stringify(res.data[0]))
            this.setState({
                item:res.data[0],
                isLoaded:true
            })
        }).then(()=>{
            axios.post('http://localhost:4000/menu/search',{
            data:this.state.item.storename+"후기"
        }).then(res=>{
            this.setState({
                crawling:res.data
            })
        })
        })
        
    }
      
    render(){
        var { isLoaded } =this.state;
        if(!isLoaded){
            return <div>Loading...</div>
                        
        }else{
            var temp = parseInt(0);
            var data=JSON.parse(this.state.item.menu);
                for(var i in data){
                    temp += parseInt(data[i].click);
                }
            const data2 = {
                labels : data.map((item)=>item.name),
                   
                datasets: [
                  {
                    label: '인기메뉴',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'black',//막대기
                    borderColor: 'rgba(75,192,192,1)',//인기메뉴 옆에 메뉴 보더
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: data.map((item)=>Math.round((item.click/temp)*100))
                  }
                ]
              };  
            
            return(
                <div>   
                {/* <img src={require("../asset/images/eggbread/4/1.jpg")} alt="menu" height="400px"></img> */}
                <div className="menu_storeName">
                    <h1>{this.state.item.storename}</h1>
                    <img src={require("../asset/images/"+this.state.item.userid+"/"+this.state.item.storeID+"/main.png")} alt=""></img>
                </div>
                <table className="menuTable">
                    <tbody>
                    <tr>
                        <td>사진</td><td>이름</td><td>가격</td>
                    </tr>
                   {data.map((item,index) =>

                   <tr key={index}>
                       <td>
            
                        <img src={require(("../asset/images/"+this.state.item.userid+"/"+this.state.item.storeID+"/"+(index+1)+".png")&&("../asset/images/"+this.state.item.userid+"/"+this.state.item.storeID+"/"+(index+1)+".jpg"))} alt="" width="150px" height="80px"/>
                       </td><td>{item.name}<br/> </td><td>{item.price}</td>
                   </tr>
                   )}
                   </tbody>

                </table>
               
                <div width={"50px"} height={"50px"}>
                    <HorizontalBar data={data2}  options={{maintainAspectRatio:false}}></HorizontalBar>
                </div>
                <div className="posting">
                        <table>
                            {this.state.crawling.map((item,index)=>
                                <tr>
                                    <td><img src={require('../asset/images/icon2.png')} width="50px" height="50px" alt=""></img></td><td><a href={item.link}>{item.title}</a>{item.passage}</td>
                                </tr>
                            )}
                        </table>

                </div>
                <div>
                    전화번호 : {this.state.item.tel} <br></br>
                    위치 : {this.state.item.location} <br></br>
                    영업시간 : {this.state.item.openinghours} <br></br>
                    가게 설명 : {this.state.item.description}
                </div>
                <button className="order_btn"><Link to={this.state.item.storeID+"/order"} >주문 하기</Link></button>
                
            </div>
            
            );
        }
    }
}
export default Menu;