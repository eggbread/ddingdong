import React,{Component} from 'react';
import './App.css';
import Category from'./components/Category'
import List from './components/List'
import About from './About';
import Home from './Home';
import Repos from './Repos';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  // constructor(){
  //   super(...arguments);
  //   this.state={
  //     route:window.location.hash.substr(1)
  //   };
  // }
  // componentDidMount(){
  //   window.addEventListener('hashchange',()=>{
  //     this.setState({
  //       route:window.location.hash.substr(1)
  //     });
  //   });
  // }
  render(){
    // var Child;
    // switch(this.state.route){
    //     case '/list':
    //     Child=List;
    //     break;
    //     default:
    //       Child=Category;
    //     }
        return (
          <div className="App">
        
        <div className="body">
          <Router>
            <Route exact path="/" component={Category}/>
            <Route path="/list/:category" component={List}/>           
          </Router>
          
          {/* <Menu menuName="OUTBACK" src={Outback}></Menu> */}
          {/* <Child name={"정우"}/> */}
            {this.props.children}
          
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
