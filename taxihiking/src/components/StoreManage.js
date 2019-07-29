import React,{Component} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

class StoreManage extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded:false,
            item:{}
        }
    }
    componentDidMount(){
        axios.post('http://localhost:4000/',{
            token:window.sessionStorage.getItem('token')
        }).then(res=>{
            if(res.data){
                axios.post('http://localhost:4000/storemanage',{
                    token:window.sessionStorage.getItem('token')
                }).then(res=>{
                    this.setState({
                        item:res.data,
                        isLoaded:true
                    })
                })
            }
        })
        // if(!window.sessionStorage.token){
        //     document.location.href="/"
        // }
    }
    render(){
        if(!this.state.isLoaded){
            return <div>Loading...</div>
        }else{

            return(
                <div>
                내 가게 보기 <br></br>
                
                    {this.state.item.map((item,index)=>
                    <div>
                        <table>
                            <tr>
                                <td>가게 이름</td>
                                <td>{item.storename}</td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>{item.tel}</td>
                            </tr>
                            <tr>
                                <td>위치</td>
                                <td>{item.location}</td>
                            </tr>
                            <tr>
                                <td>영업시간</td>
                                <td>{item.openinghours}</td>
                            </tr>
                            <tr>
                                <td>메뉴</td>
                                <td>{JSON.parse(item.menu).map((food)=>
                                    <div> 
                                        <p>음식이름 : {food.name}</p>
                                        <p>가격 : {food.price}</p>
                                    </div>
                                )}</td>
                            </tr>
                            <tr>
                                <td>설명</td>
                                <td>{item.description}</td>
                            </tr>
                        </table>
                        <br/>
                        </div>
                    )}
                
                {/* <button type="button" name="button" onclick="parsingStoreInfo()">입력값확인</button>
                <input type="text" id="storename" value="storename"/><br/>
                <input type="text" id="id" value="id"/><br/>
                <input type="text" id="tel" value="tel"/><br/>
                <input type="text" id="location" value="location"/><br/>
                <input type="text" id="openinghours" value="openinghours"/><br/>
            <input type="text" id="description" value="description"/><br/> */}
            </div>
        );
    }
    }
}
export default StoreManage;