import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

import axios from 'axios';


class List extends Component {
  constructor(props){
    super(props);
    this.state={
      category:props.match.params.category,
      storeList:[],
    }
  }
  componentDidMount(){
    // fetch("http://localhost:4000/list")
    // .then((res)=>res.json())
    // .then((json)=>this.setState({
    //   storeList:json
    // }))
     
    // var a;
    // $.ajax({
    //   url:"http://localhost:4000/list",
    //   method:"POST",
    //   success:function(result){
    //     console.log(result)
    //   }
    // })

    axios.post('http://localhost:4000/list',{
      category:this.state.category
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
    var {storeList}=this.state.storeList;
    // console.log(this.state.storeList);
    
    return(
      <div>
                <h1>This is {this.state.category}</h1>
                <table>
                  <thead>

                  </thead>
                  <tbody>

                  {this.state.storeList.map((item,index)=>
                    <tr key={item.storename}>
                      <td>
                        <img src={require("../asset/images/"+item.userid+"/main.png")} alt="" width="150px" height="80px"/>
                      </td>
                      <td>
                          <Link to={{
                            pathname:'/menu/'+item.storename,
                            aboutProps:{
                              data:item,
                            }
                            }} >{item.storename}</Link>
                      </td>
                      <td>
                        {item.tel}
                      </td>
                    </tr>
                    
                    )}
                  
                  </tbody>
                </table>
            </div>
    );
  }
}




export default List;