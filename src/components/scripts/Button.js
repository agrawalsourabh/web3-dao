import React from "react";

import '../styles/Button.css';

class Button extends React.Component{
    render(){
        const {text, link} = this.props;
        return(
            <a className="f6 link no-underline br-pill ph3 pv2 mb2 button-bg" href={link} target="_blank">{text}</a>
        );
    }
}

export default Button;