import React,{Component} from 'react';
import './App.css';
import Category from'./components/Category'
import List from './components/List';
import Menu from './components/Menu';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import Order from './components/Order';
import MetaTags from 'react-meta-tags';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import StoreMange from './components/StoreManage'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      location:null,
      isLogin:false,
    }
  }
  
  render(){
        return (
          <div className="App">
            

              <meta name="viewport" content="width=device-width, initial-scale=1"/>
            
            <div className="Head">
           
           
              <Header></Header>
            </div>
            <div className="body">
              <Router>
                <Route exact path="/" component={Category}/>
                <Route path="/list/:category" component={List}/>
                <Route exact path="/menu/:storeID" component={Menu}/>
                <Route path="/menu/:store/order" component={Order}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/storemanage" component={StoreMange}/>
              </Router>
                {this.state.location}
              
            </div>
            <footer>

            </footer>
         </div>
      );
    } 
}

export default App;
