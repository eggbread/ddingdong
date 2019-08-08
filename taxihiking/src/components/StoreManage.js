import React,{Component} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import  Modal from "react-modal";
import DaumPostcode from 'react-daum-postcode'
import $ from 'jquery'
import io from 'socket.io-client'

var clickObj;
const customStyles = {
    content : {
      top                   : '25%',
      left                  : '40%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-20%, -20%)',
      width : '700px',
      height : '600px'
    }
  };
class StoreManage extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded:false,
            item:[],
            modalOpen:false,
            postOpen:false,
            addOpen:false,
            orderOpen:false,
            orderList:{},
            userId:null
        }
    }
    handleAddress = (data) => {
        console.log(data)
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.postClose();
        document.getElementById('address').value=fullAddress;  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      }
    componentDidMount(){
        axios.post('http://localhost:4000/',{
            token:window.sessionStorage.getItem('token')
        }).then(res=>{
            if(res.data){
                axios.post('http://localhost:4000/storemanage',{
                    token:window.sessionStorage.getItem('token')
                }).then(res=>{
                    if(res.data.length!==0){

                        this.setState({
                            item:res.data,
                            isLoaded:true,
                            userId:res.data[0].userid
                        })
                    }else{
                        console.log(window.sessionStorage.getItem('token'))
                        this.setState({
                            item:[],
                            isLoaded:true,
                            userId:window.sessionStorage.getItem('user')
                        })
                    }
                    this.receiveOrder()
                })
            }else{
                document.location.href="/"
            }
        })
    }
    receiveData(data){
        if(data){
            this.setState({
                orderOpen:true,
                orderList:data
            })     
        }else{
            alert("no data")
        }
        console.log(data)
    }
    receiveOrder(){
        var mystoreId = [];
                    this.state.item.map((item,index)=>
                        mystoreId[index]=item.storeID
                    )
                    var order = io('http://localhost:4000/storemanage');
                    for(var i in mystoreId){
                        order.on(mystoreId[i],(data)=>{
                           this.receiveData(data)
                        })
                    }
    }
    modalOpen(e){
        this.setState({
            modalOpen:true,
        })
        if(e.target.className==='modifyStore'){
            clickObj=this.state.item[parseInt(e.target.id)]
            this.setState({
               addOpen:true
            })
        }
    }
    postOpen(){
        this.setState({
            postOpen:true
        })
    }
    postClose(){
        this.setState({
            postOpen:false
        })
    }
    modalClose(){
        this.setState({
            modalOpen:false,
            orderOpen:false
        })
    }
    open(e){
        if(this.state.addOpen){
           
            $('[name="storename"]').val(clickObj.storename);
            $('[name="storetel"]').val(clickObj.tel)
            $('[name="address"]').val(clickObj.location)
            $('[name="storemenu"]').append(JSON.parse(clickObj.menu).map((item,index)=>
                '<li><img width="150px" height="150px"src='+require('../asset/images/'+clickObj.userid+"/"+clickObj.storeID+"/"+(index+1)+".jpg")+'></img><input type="file"></input><br/><input value='+item.name+'></input>  <input value='+item.price+'></input><button type="button" class="removebtn">삭제</button></button></li>'))
            $('[name="storetime"]').val(clickObj.openinghours)
            $('[name="storedesc"]').val(clickObj.description)
             $('[name="storeimg"]').attr('src',require('../asset/images/'+clickObj.userid+"/"+clickObj.storeID+"/main.png"))
        }else{
            $('#subbtn').html("추가하기")
        }
    }
    close(){
        this.setState({
            addOpen:false
        })
    }
    addbtn(){
        $('#storemenu').append('<li><input type="file"></input><br/><input type="text"></input><input type="text"></input><button type="button" class="removebtn">삭제</button></li>')
    }
    removebtn(){
        alert("rev")
    }
    makeorderList(){
        const temp=this.state.orderList.orderMenu;
        Object.keys(temp).map((item)=>
            $('#receiveOrderList').append('<li>이름 : '+temp[item].menuname+', 개수 : '+temp[item].menumany+'</li>')
        )
    }
    sendStoreData(){
        axios.post('http://localhost:4000/storemanage/fix',{

        }).then(res=>{
            console.log(res)
        })
    }
    render(){
        console.log(this.state.item)
        if(!this.state.isLoaded){
            return <div>Loading...</div>
        }else{

            return(
                <div>
                내 가게 보기 <br></br>
                <button onClick={this.modalOpen.bind(this)}>가게 추가하기</button>
                    {this.state.item.map((item,index)=>
                    <div>
                        <table>
                        <tbody>
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
                            </tbody>
                        </table>
                        <button onClick={this.modalOpen.bind(this)} className="modifyStore" id={index}>수정하기</button>
                        <br/>
                        </div>
                    )}
                <Modal isOpen={this.state.modalOpen} onAfterOpen={this.open.bind(this)} ariaHideApp={false} onAfterClose={this.close.bind(this)} style={customStyles}>
                    <button onClick={this.modalClose.bind(this)} style={{float:"right"}}>X</button>
                    <form action='http://localhost:4000/storemanage/fix' method='POST' encType='multipart/form-data'>
                        <p>ID : <input type="text" name="userId" value={this.state.userId}></input></p>
                        <p>가게이름 : <input type="text" name="storename" ></input></p>
                        <p>전화번호 : <input type="text" name="storetel"></input></p>
                        <p>위치 : <button type="button" onClick={this.postOpen.bind(this)} id="storelocation">주소 찾기</button></p>
                        <p><input type="text" name="address"></input></p>
                        <p>영업시간 : <input type="text" name="storetime"></input></p>
                        메뉴 : <ul id="storemenu"></ul><button type="button" onClick={this.addbtn}>메뉴 추가</button>
                        <p>설명 : <input type="text" name="storedesc"></input></p>
                        <p>메인 사진 : <input type="file" name='mainImg' id='mainImg' accept="image/*"></input></p>
                        <img src="" alt="" name="storeimg" width="150px" height="150px"></img> <br/>
                        <button type="submit" id="subbtn">수정하기</button>
                        
                    </form>
                </Modal>
                <Modal isOpen={this.state.postOpen}><DaumPostcode onComplete={this.handleAddress} autoClose={true}></DaumPostcode></Modal>
                <Modal isOpen={this.state.orderOpen} onAfterOpen={this.makeorderList.bind(this)}>
                <button onClick={this.modalClose.bind(this)} style={{float:"right"}}>X</button>
                    <h1>주문이 도착하였습니다</h1>
                    <p>{this.state.orderList.tableNumber}번 테이블에서 주문이 도착하였습니다.</p>
                    <div>
                        주문목록
                        <ul id="receiveOrderList"></ul>
                    </div>
                    <div><p>특별 주문입니다</p>{this.state.orderList.special}</div>
                    <p>합계는 {this.state.orderList.cost}원 입니다.</p>
                    
                </Modal>
          </div>
        );
    }
    }
}
export default StoreManage;