import React, {Component} from "react"
import InputNumber from 'react-input-number';
import NumericInput from 'react-numeric-input'
class Order extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="메뉴"></input><br/>
                <NumericInput type="number" id="myNumber" value={2} step={1}/>
                <br/><button>주문하기</button>
            </div>

        );
    }
}
export default Order;