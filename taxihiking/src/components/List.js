import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';
var this_category;

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      category:props.match.params.category,
      location:props.match.params.location,
      storeList:[],
      switch:false
    }
  }
  componentDidMount(){
    axios.post('http://localhost:4000/list',{
      category:this.state.category,
      location:this.state.location
    })
    .then(result => {
      if(result.statusText==="OK"){
        this.setState({
          storeList:result.data,
        })
      }else{

      }
    }
      
    )
  
  }
  refresh(){
    this.setState({
      category:this.props.match.params.category
    })
    console.log(this.state.category)
  }
  componentDidUpdate(nextProps){
    axios.post('http://localhost:4000/list',{
      category:this_category,
      location:this.state.location
    })
    .then(result => {
      if(result.statusText==="OK"){
        this.setState({
          storeList:result.data,
        })
      }else{

      }
    }
      
    )
  }
  render(){
    var seletedCategory;
    this_category=this.props.match.params.category
    console.log(this.state.category)
    switch(this_category){
      case "koreanfood":
          seletedCategory="한식";
      break;
      case "westfood":
          seletedCategory="양식";
      break;
      case "japanfood":
          seletedCategory="일식";
      break;
      case "chinafood":
          seletedCategory="중식";
      break;
      case "chicken":
          seletedCategory="치킨";
      break;
      case "pigfoot":
          seletedCategory="족발&보쌈";
      break;
      case "pizza":
          seletedCategory="피자";
      break;
      case "boon":
          seletedCategory="분식";
      break;
      default:
        seletedCategory="모든 "
        break;
    }
    return(
      <div>
        <Container>
          <Row>
            <Col><Link to={"/list/koreanfood/"+this.state.location}>한식</Link></Col>
            <Col><Link to={"/list/westfood/"+this.state.location}>양식</Link></Col>
            <Col><Link to={"/list/japanfood/"+this.state.location}>일식</Link></Col>
            <Col><Link to={"/list/chinafood/"+this.state.location}>중식</Link></Col>
            <Col><Link to={"/list/chicken/"+this.state.location}>치킨</Link></Col>
            <Col><Link to={"/list/pizza/"+this.state.location}>피자</Link></Col>
            <Col><Link to={"/list/pigfoot/"+this.state.location}>족발&보쌈</Link></Col>
            <Col><Link to={"/list/boon/"+this.state.location}>분식</Link></Col>
          </Row>
        </Container>
                <h3>근처 {seletedCategory}식당에 대한 검색결과입니다.</h3>
                
                <Container>
  

                  {this.state.storeList.map((item,index)=>
                    <Row key={item.storename} >
                      <Col>
                        
                        <img src={require(("../asset/images/"+item.userid+"/"+item.storeID+"/main.png")||("../asset/images/"+item.userid+"/"+item.storeID+"/main.jpg"))} alt="" width="150px" height="80px"/>
                      </Col>
                      <Col>
                          <Link to={'/menu/'+item.storeID} >{item.storename}</Link>
                      </Col>
                      <Col>
                        {item.location}
                      </Col>
                      <Col>
                        {item.tel}
                      </Col>
                    </Row>
                    )}
                   
                  
                </Container>
            </div>
    );
  }
}




export default List;