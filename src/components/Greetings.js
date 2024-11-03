import React, { Component } from "react";

class Greetings extends Component{
    render(){
        return(
            <div style={ { color: 'red', backgroundColor:'yellow'}}>Greetings {this.props.name}</div>
        )
    }
}


export default Greetings