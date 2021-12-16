import React from "react";

import '../styles/Button.css';

class Button extends React.Component{
    render(){
        const {text} = this.props;
        return(
            <a className="f6 grow no-underline br-pill ph3 pv2 mb2 button-bg" href="#">{text}</a>
        );
    }
}

export default Button;