import React, { Component } from "react";
import Card from "./Card";
import CardModal from "./CardModal.js";
import TradeModal from "./TradeModal.js";
import "../css/CardItem.css";
import UserConsumer from "../services/Provider";
import FaildTrade from "./FaildTrade";


class CardItem extends Component {

    state = {
        cardModalVisible: false,
        tradeModalVisible: false,
        faildTradeModalVisible: false,
    }
    failTaradeBackButtonEventListener = (e) => {
        this.setState({
            faildTradeModalVisible: !this.state.faildTradeModalVisible,
        })
    }
    //this function manages sell, buy on card and sell, buy on card toggle
    tradeButtonEventListener = (card, buttonStatus, budget, dispatcher, e) => {
        this.setState({
            tradeModalVisible: !this.state.tradeModalVisible,
        });
        if (buttonStatus === "buy") {
            if (card.price <= budget.budget) {
                dispatcher({ type: "BUY", payload: card })
            } else {
                this.setState({
                    faildTradeModalVisible: !this.state.faildTradeModalVisible,
                })
            }
        } else if (buttonStatus === "sell") {
            dispatcher({ type: "SELL", payload: card })
        }
    }
    //this function manages the toggle of the card
    manageState = (e) => {
        this.setState({
            cardModalVisible: !this.state.cardModalVisible,
        });
    }

    render() {
        const { cardStatus, card } = this.props;
        let { cardModalVisible, tradeModalVisible, faildTradeModalVisible } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { budget, dispatcher } = value;
                        return (
                            <div className="card-item" cardType={card.cardType} cardPrice={card.price} cardPosition={card.position}>
                                <Card card={card} changeToggleState={this.manageState} />
                                <div className="card-info">
                                    <div className="price">
                                        € {card.price}.00
                                    </div>
                                    <button className="card-button" onClick={this.tradeButtonEventListener.bind(this, card, cardStatus, budget, dispatcher)}>{cardStatus === "bought" ? "Sell" : "Buy"}</button>
                                </div>
                                {cardModalVisible ? <CardModal card={card} cardStatus={cardStatus} changeToggleState={this.manageState} tradeButtonEventListener={this.tradeButtonEventListener} /> : ""}
                                {tradeModalVisible ? <TradeModal card={card} cardStatus={cardStatus} tradeToggleState={this.tradeButtonEventListener} /> : ""}
                                {faildTradeModalVisible ? <FaildTrade faildToggleState={this.failTaradeBackButtonEventListener} /> : ""}
                            </div>
                        );
                    }
                }
            </UserConsumer>
        );
    }
}

export default CardItem;
