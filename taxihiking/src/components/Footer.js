import React,{Component} from 'react';
import axios from 'axios';
import {ButtonToolbar,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div>
                만든이 : 김경민, 김정우, 정민우, 정태용<br/>
                대전광역시 유성구 대학로 99 공5호관 306호
                <ButtonToolbar>
                    <Button bsstyle="warning" className="login100-form-btn"><Link to="/signin">사장님 페이지</Link></Button>
                </ButtonToolbar>
            </div>
            );
    }
}

 export default Footer;