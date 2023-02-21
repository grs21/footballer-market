import React from "react";
import "../css/MarketMenu.css"
import UserConsumer from "../services/Provider";
import { BottomArrow } from "../assets/icons/assets";

function MarketMenu() {
    function marketFilter(market, filterType, filterValue, dispatcher, e) {
        market.map(card => {
            switch (filterType) {
                case "CARDTYPE":
                    if (card.cardType !== filterValue) {
                        market = market.filter(item => item.id !== card.id)
                    }
                    break;
                case "POSITION":
                    if (card.position !== filterValue) {
                        market = market.filter(item => item.id !== card.id)
                    }
                    break;
                case "PRICE":
                    if (card.price !== filterValue) {
                        market = market.filter(item => item.id !== card.id)
                    }
                    break;
                default:
                    break;
            }
        })
        dispatcher({ type: "SET_MARKET", payload: market });
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { filterMarketList, dispatcher, cardTypes, cardPositions, prices } = value;
                    return (
                        <div className="navigation">
                            <ul className="menu-list">
                                {/* ----------Card Type------------ */}
                                <input type="checkbox" id="check-type" />
                                <label htmlFor="check-type" id="check-label">
                                    <div className="filter-title-container">
                                        <div className="top-title">Card Type</div>
                                        <BottomArrow />
                                    </div>
                                </label>
                                <ul className="subType">
                                    {
                                        cardTypes.map(typeName =>
                                            <li><a onClick={marketFilter.bind(this, filterMarketList, "CARDTYPE", typeName, dispatcher)} className="sub-title">{typeName}</a></li>
                                        )
                                    }
                                </ul>
                                <hr className="line-style" />
                                {/* -------------Position--------------------- */}
                                <input type="checkbox" id="check-position" />
                                <label htmlFor="check-position" id="check-label">
                                    <div className="filter-title-container">
                                        <div className="mid-title">Position</div>
                                        <BottomArrow />
                                    </div>
                                </label>
                                <ul className="subPosition">
                                    {
                                        cardPositions.map(positionName =>
                                            < li > <a onClick={marketFilter.bind(this, filterMarketList, "POSITION", positionName, dispatcher)} className="sub-title">{positionName}</a></li>
                                        )
                                    }
                                </ul>
                                <hr className="line-style" />
                                {/* ------------------Price------------------------- */}
                                <input type="checkbox" id="check-price" />
                                <label htmlFor="check-price" id="check-label">
                                    <div className="filter-title-container">
                                        <div className="custom-title">Price</div>
                                        <BottomArrow />
                                    </div>
                                </label>
                                <ul className="subPrice">
                                    {
                                        prices.map(price =>
                                            <li><a onClick={marketFilter.bind(this, filterMarketList, "PRICE", price, dispatcher)} className="sub-title">€ {price}</a></li>
                                        )
                                    }
                                </ul>
                            </ul>
                        </div>
                    );
                }
            }
        </UserConsumer>
    );
}

export default MarketMenu;
