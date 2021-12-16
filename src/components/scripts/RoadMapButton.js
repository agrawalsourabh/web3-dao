import React from "react";

import '../styles/RoadMapButton.css';

class RoadMapButton extends React.Component{
    render(){
        const {text, img} = this.props;
        return(
            <a className=" no-underline br3 ph3 pv2 ma2 black w-25 bg-color-gradient inline-flex justify-between items-center" href="#">
                <span className="f6">{text}</span>
                <img className="w-50" alt="img" src={img}/>    
            </a>
        );
    }
}

export default RoadMapButton;