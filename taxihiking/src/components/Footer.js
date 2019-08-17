import React,{Component} from 'react';
import axios from 'axios';
import {ButtonToolbar,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import "./Footer.css"


class Footer extends Component{
    render(){
        return(
            <div>
                <div className="main-block dark-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                        <p>Copyright &copy; 김경민, 김정우, 정민우, 정태용<br/>
                                               대전광역시 유성구 대학로 99 공5호관 306호</p>
                                               <Button variant="Link"  className="login100-form-btn"><Link to="/signin">사장님페이지</Link></Button>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

 export default Footer;
