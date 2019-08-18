import React, {Component} from "react"
import NumericInput from 'react-numeric-input'
import $ from 'jquery'
import io from 'socket.io-client'
import { Container, Row, Col } from 'react-grid-system';
import axios from "axios";
import {ButtonToolbar,Button, FormGroup, FormControl} from 'react-bootstrap';
import './Order.css';

class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            item:JSON.parse(window.sessionStorage.getItem('menu')),
            menu:JSON.parse(JSON.parse(window.sessionStorage.getItem('menu')).menu),
            pay:0,
        }
    }
    addCart(){
        var cost = this.state.menu;
        var sum =0
        for(var i=0;i<$('.menu_Many').length;i++){
            sum += cost[i].price*$('.menu_Many')[i].value
        }
        $('#cost').html(sum)
    }
    order(){
        var send = window.confirm("주문하시겠습니까?");
        if(send){
            var menu_List = document.getElementsByClassName('menu_List');
            var orderList={
                tableNumber:$('#tableNumber').val(),
                orderMenu:{},
                cost:$('#cost').text(),
                special:$('#special_Order').val()
            }
            var count=0;
            Object.keys(menu_List).map((item,index)=>{
                if(menu_List[item].children[1].firstChild.value!=='0'){
                    orderList.orderMenu[count]={
                        menuname:menu_List[item].children[0].innerText,
                        menumany:menu_List[item].children[1].firstChild.value
                    }
                    count++;
                }
            })
            console.log(orderList.orderMenu[0])
            // axios.post('http://13.125.117.85:4000/order',{
            //     order:orderList.orderMenu,
            //     store:this.state.item.storename
            // }).then(res=>{
            //     console.log(res)
            // })
           
            const socket = io('http://13.125.117.85:4000/storemanage', {transports:['websocket']});
   
            socket.emit('order message',{
                storeID:this.state.item.storeID,
                order:orderList
            })
            alert('주문이 완료되었습니다.')
        }else{
            alert("취소되었습니다.");
        }
    }

    render(){
        console.log(this.state)
        return(
            <div className="orderform">
                <h1>주문하기</h1>
                <form onSubmit={this.order.bind(this)}>
                <Container id="orderList">
                    <Row>
                        <Col>
                           <FormGroup>
                             Table Number :
                             <FormControl
                             autoFocus
                             type="text"
                             id="tableNumber"
                             required
                             style={{marginTop: '5px', width: '70%'}}
                             />
                           </FormGroup>
                        </Col>
                    </Row>
                    {
                        this.state.menu.map((item,index)=>
                        <Row key={index}>
                            <Col><img src={require(("../asset/images/"+this.state.item.userid+"/"+item.img))} alt="" width="150px" height="80px"/></Col>
                        <Col className="menu_List"><div className="menu_Name">{item.name}</div><NumericInput className="menu_Many" value={0} min={0} step={1} onChange={this.addCart.bind(this)}></NumericInput></Col>
                       </Row>
                        )
                    }
                </Container>
                <FormGroup style={{width: '90%'}}>
                  특이 사항 :
                  <FormControl
                  autoFocus
                  type="textarea"
                  id="special_Order"
                  placeholder="특이사항을 적어주세요"
                  style={{width:"100%",height:"100px"}}
                  />
                </FormGroup>
                <div>합계 : <span id="cost">0</span></div>
                <Button
                  type="submit" value="주문하기"
                >
                  주문하기
                </Button>
                </form>
            </div>
        );
    }
}
export default Order;