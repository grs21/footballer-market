import React, { Component } from "react";
import "../css/MyCards.css"
import CardItem from "./CardItem"
import MarketMenu from "./MarketMenu";
import UserConsumer from "../services/Provider";
import Pagination from "./Pagination";
export class Market extends Component {

    render() {
        const cardStatus = "onSell";
        return (
            <UserConsumer>
                {
                    value => {
                        const { market, marketPageNumber } = value;
                        const marketListMinrange = -10 + (marketPageNumber * 10);
                        const marketListMaxRange = marketPageNumber * 10;
                        return (
                            <div className="shower-wrapper">
                                <div className="page-title" id="marketTitle">Market</div>
                                <div className="shower-boady">
                                    <div className="options">
                                        <MarketMenu />
                                    </div>
                                    <div className="cards-container">
                                        <div className="card-list" id="card-list-market">
                                            {
                                                market !== undefined ?
                                                    market.length !== 0 ?
                                                        market.slice(marketListMinrange, marketListMaxRange).map(user =>
                                                            <CardItem key={user.id} cardStatus={cardStatus} card={user} />
                                                        )
                                                    : ""
                                                : ""
                                            }
                                        </div>
                                        {
                                            market.length < 10 ? "" : <Pagination type={"MARKET"} />
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        );
    }
}

export default Market;
