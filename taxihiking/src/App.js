import React,{Component} from 'react';
import './App.css';
import Category from'./components/Category'
import List from './components/List';
import Menu from './components/Menu';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import Order from './components/Order';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      location:null,
    }
  }
  parentCallBack = (dataFromChild) => {
    this.setState({
      location:dataFromChild,
    })
  }
  render(){
        return (
          <div className="App">
            <div className="Head">
              <Header callback={this.parentCallBack.bind(this)}></Header>
            </div>
            <div className="body">
              <Router>
                <Route exact path="/" component={Category}/>
                <Route path="/list/:category" component={List}/>
                <Route exact path="/menu/:store" component={Menu}/>
                <Route path="/menu/:store/order" component={Order}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
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
