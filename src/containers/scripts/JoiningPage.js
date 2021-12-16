import React from "react";

import Button from "../../components/scripts/Button";

import urls from '../../assets/Resources/URLs.json';

class JoiningPage extends React.Component{
    render(){
        return(
            <div className="flex flex-column justify-between w-50 center">
                <div className="ma5 h5">
                    <header className="tc pa3">
                        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                            <strong>Join the team. <mark className="f-color-gradient"> 100% free. </mark>
                            Earn NFTs and governance token</strong>
                        </h1>
                        <h2 className="f4-m f3-l fw2 black-50 mt0 lh-copy">
                        Mission: become a self-taught web3.0 developer with others.
                        </h2>
                        
                    </header>
                </div>
                <div className="h4 center ">
                    <Button text={'Join The Discord️'} link={urls.link.discord}/>
                </div>
                
            </div>
        );
    }
}

export default JoiningPage;