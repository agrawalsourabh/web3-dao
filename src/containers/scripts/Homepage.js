import React from "react";

import Button from "../../components/scripts/Button";
import '../styles/HomePage.css';
import background_img from '../../assets/images/background.svg';

class HomePage extends React.Component{
    render(){
        return(
            <div className="flex justify-center mt6-m mt6-ns bg-color-black w-100 h-640">
                <div className="w-50 ma5 pl3  flex flex-column justify-between">
                    <div className="w-75 ">
                            <h1 className="mv2 bold f-color f-heading">
                            Start your <mark className="f-color-gradient">web3</mark> developer journey.
                            </h1>
                    </div>
                    <div className="w-80">
                        <p className="mv2 bold f-color">
                        From zero to hero, we will take you from setting up your first crypto-wallet all the way to creating a DAO.
                        </p>
                    </div>
                    <div className="w-100">
                        <Button text={'Join The Discord'}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="w-100"></div>
                    <div className="w-100"></div>
                    <div className="w-100"></div>
                </div>
                <div className="w-50 ">
                    <img src={background_img} alt="A bright blue sky" className="mw5 db" />
                </div>
                
            </div>
        );
    }
}

export default HomePage;

