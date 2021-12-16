import React from "react";

import RoadMapButton from "../../components/scripts/RoadMapButton";

import '../styles/LearningPage.css'
import ether_img from '../../assets/images/ethereum.svg';
import solana_img from '../../assets/images/solana.svg';
import blockchain_img from '../../assets/images/blockchain.svg';

class LearingPage extends React.Component{

    render(){
        return(
            <div className="flex flex-column justify-between w-75 center">
                <div className="ma5 h5">
                    <header className="tc pa3">
                        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                            <strong>Learing by <mark className="f-color-gradient"> building </mark></strong>
                        </h1>
                        <h2 className="f5 f4-m f3-l fw2 black-90 mt0 lh-copy">
                            Follow proven paths to success. You are encouraged to complete as many goals as you can, take the skill tests, and leave feedback. Those of you who are able to graduate will receive the "Contributor" role. The first 1200 contributors will have their wallet addresses stored for future airdrops. ✈️ 
                        </h2>
                    </header>
                </div>
                <div className="flex w-100 justify-between debug h4">
                    <RoadMapButton text={'Roadmap to become an ETH Dev'} img={ether_img}/>
                    <RoadMapButton text={'Roadmap to become a SOL Dev'} img={solana_img}/>
                    <RoadMapButton text={'Blockchain basics'} img={blockchain_img}/>
                </div>
                <div></div>
                <div className="flex w-100 h4">
                    <p className="center"> and more...</p>
                </div>
                
            </div>
        );
    }
}
export default LearingPage;