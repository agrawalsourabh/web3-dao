import React from "react";

import '../styles/ToolsPage.css';

import ethereum_text_img from '../../assets/images/ethereum_text.svg';
import javscript_img from '../../assets/images/javascript.svg';
import react_img from '../../assets/images/react.svg';
import solana_gradient from '../../assets/images/solana_gradient.svg';


class ToolsPage extends React.Component{
    render(){
        return(
            <div className="flex flex-column justify-between w-100 center bg-black">
                <div className="ma5 h5">
                    <header className="tc ">
                        <h1 className="f3 f2-m f1-l fw2 white mv3">
                            <strong>Build <mark className="f-color-gradient"> alongside  </mark>
                            others</strong>
                        </h1>
                        <h2 className="f4-m f3-l fw2 white mt0 lh-copy">
                        Learn the tools required to be successful in Web3.0
                        </h2>
                        
                    </header>
                </div>
                <div className="h5 center flex flex-column w-75 ma2">
                    <div className="flex w-100 h-50 pa3">
                        <div className="w-50">
                            <img src={ethereum_text_img} />
                        </div>
                        <div className="w-50">
                            <img src={javscript_img} />
                        </div>
                    </div>
                    <div className="flex w-100 h-50 pa3 justify-center">
                    <div className="w-50">
                            <img src={solana_gradient} />
                        </div>
                        <div className="w-50">
                            <img src={react_img} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ToolsPage;
