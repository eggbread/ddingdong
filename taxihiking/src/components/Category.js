import React , { Component } from 'react';
import './Category.css'
import Menu from '../components/Menu';
import App from '../App';
import axios from 'axios';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import {ButtonToolbar,Button} from 'react-bootstrap'


class Category extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isLogin:false,
    //     }
    // }
    // componentDidMount(){
    //     axios.post('http://localhost:4000/',{
    //         token:window.sessionStorage.getItem('token')
    //     }).then(res=>{
    //       if(res.data){
    //         this.setState({
    //             isLogin:res.data
    //         })
    //         console.log(res.data)
    //       }else{
    //         this.setState({
    //             isLogin:false
    //         })
    //       }
    //     })
    //   }
   
    // logout(){
    //     window.sessionStorage.removeItem('token');
    //     window.location.reload();
    // }
    render(){
        // var componentLogin;
        // if(this.state.isLogin){
        //     componentLogin=
        //         <ButtonToolbar>
        //             {this.state.isLogin} 님 안녕하세요
        //             <Button bsstyle="warning" className="login100-form-btn" onClick={this.logout}>사장님 로그아웃</Button>
        //             <Button bsstyle="warning" className="login100-form-btn"><Link to="/storemanage" >상점 관리</Link></Button>
        //         </ButtonToolbar>
              
            
        // }else{
        //     componentLogin=
        //         <ButtonToolbar>
        //             <Button bsstyle="warning" className="login100-form-btn"><Link to="/signin">사장님 로그인</Link></Button>
        //             <Button bsstyle="warning" className="login100-form-btn"><Link to="/signup">사장님 회원가입</Link></Button>
        //         </ButtonToolbar>
              
            
        // }
        return(
            <div id="list">
            <Container>
                <Row>
                    <Col><Link to={"/list/koreanfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">한식</div><img className="categoryImg" src={require("../asset/images/koreanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                    <Col><Link to={"/list/westfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">양식</div><img className="categoryImg" src={require("../asset/images/westfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                    <Col><Link to={"/list/japanfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">일식</div><img className="categoryImg" src={require("../asset/images/japanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                    <Col><Link to={"/list/chinafood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">중식</div><img className="categoryImg" src={require("../asset/images/chinafood.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                </Row>
                <Row>
                    <Col><Link to={"/list/chicken/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">치킨</div><img className="categoryImg" src={require("../asset/images/chicken.png")} alt="" height="100%" width="100%"></img></div></Link></Col>
                    <Col><Link to={"/list/pizza/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">피자</div><img className="categoryImg" src={require("../asset/images/pizza.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                    <Col><Link to={"/list/pigfoot/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">족발&보쌈</div><img className="categoryImg" src={require("../asset/images/pigfoot.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                    <Col><Link to={"/list/boon/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">분식</div><img className="categoryImg" src={require("../asset/images/boon.jpg")} alt="" height="100%" width="100%"></img></div></Link></Col>
                </Row>
            </Container>
                {/* <table className="category">
                    <thead>
                        <tr>
                            <td colSpan="4">Menu List</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to={"/list/koreanfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">한식</div><img className="categoryImg" src={require("../asset/images/koreanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                            <td><Link to={"/list/westfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">양식</div><img className="categoryImg" src={require("../asset/images/westfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                            <td><Link to={"/list/japanfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">일식</div><img className="categoryImg" src={require("../asset/images/japanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                            <td><Link to={"/list/chinafood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">중식</div><img className="categoryImg" src={require("../asset/images/chinafood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={"/list/chicken/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">치킨</div><img className="categoryImg" src={require("../asset/images/chicken.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                            <td><Link to={"/list/pizza/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">피자</div><img className="categoryImg" src={require("../asset/images/pizza.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                            <td><Link to={"/list/pigfoot/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">족발&보쌈</div><img className="categoryImg" src={require("../asset/images/pigfoot.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                            <td><Link to={"/list/boon/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">분식</div><img className="categoryImg" src={require("../asset/images/boon.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
                        </tr>
                    </tbody>
                </table> */}
                {/* {componentLogin} */}
                {/* <Link to="/signin">사장님 로그인</Link> */}
            </div>
        );
    }
}


export default Category;