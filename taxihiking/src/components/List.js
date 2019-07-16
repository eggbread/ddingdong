import React, {Component} from 'react';

class List extends Component {
    render(){
        return(
            <h1>This is {this.props.name}</h1>
        );
    }
}

export default List;