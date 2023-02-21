import React, { useState } from "react";
import logoImage from "../assets/images/logo.png";
import '../css/Navbar.css'
import UserConsumer from "../services/Provider";
import { Wallet } from "../assets/icons/assets";
function Navbar() {
    const [myCardsLine, setNMyCardsLine] = useState(true);
    const [marketLine, setMarketLine] = useState(false);
    return (
        <UserConsumer>
            {
                value => {
                    const { budget } = value;
                    const myCardsTitle = document.getElementById("myCardsTitle");
                    const marketTitle = document.getElementById("marketTitle");
                    function myCardscroll(target, e) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                        setNMyCardsLine(true)
                        setMarketLine(false)
                    }
                    function marketScroll(target, e) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                        setNMyCardsLine(false)
                        setMarketLine(true)
                    }
                    return (
                        <nav className="navbarContainer">
                            <div className="items">
                                <div className="logo-container">
                                    <img src={logoImage} alt="" className="logo-img" />
                                </div>
                                <ul className="tab-list">
                                    <li className="tab-container">
                                        <a onClick={myCardscroll.bind(this, myCardsTitle)} className="tab tab-font">MY CARDS</a>
                                        {myCardsLine ? <div className="rectangle"></div> : ""}
                                    </li>
                                    <li className="tab-container">
                                        <a onClick={marketScroll.bind(this, marketTitle)} className="tab tab-font">MARKET</a>
                                        {marketLine ? <div className="rectangle"></div> : ""}
                                    </li>
                                </ul>
                            </div>
                            <div className="remainder-container">
                                <div className="remainder-wrapper">
                                    <div className="wallet">
                                        <Wallet />
                                    </div>
                                    <div className="remainder">
                                        € <span>{budget.budget}.00</span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    )
                }
            }
        </UserConsumer>
    );
}

export default Navbar;
