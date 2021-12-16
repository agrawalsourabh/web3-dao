import React from "react";

import Button from "../../components/scripts/Button";
import '../styles/Nav.css';

class Nav extends React.Component{
    render(){
        return(
            <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l bg-color">
                <nav className="flex justify-between">
                    <a className="link white-70 hover-white no-underline flex items-center pa3" href="">🚀  Web3DAO</a>
                    <div className="flex-grow pa3 flex items-center">
                        <a className="f6 link dib white dim mr0 mr4-ns" href="#" title="Home">FAQ</a>
                        <Button text={'Join The Discord'}/>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Nav;