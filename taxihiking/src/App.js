import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Category from'./components/Category'
import {render} from 'react-dom';
import List from './components/List'

class App extends Component {
  constructor(){
    super(...arguments);
    this.state={
      route:window.location.hash.substr(1)
    };
  }
  componentDidMount(){
    window.addEventListener('hashchange',()=>{
      this.setState({
        route:window.location.hash.substr(1)
      });
    });
  }
  render(){
    var Child;
    switch(this.state.route){
        case '/list':
        Child=List;
        break;
        default:
          Child=Category;
    }
    return (
      <div className="App">
        
        <div className="body">
          
          {/* <Menu menuName="OUTBACK" src={Outback}></Menu> */}
          <Child name={"chicken"}/>
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}


export default App;
