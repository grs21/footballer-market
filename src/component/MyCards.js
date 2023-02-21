import React, { Component } from "react";
import "../css/MyCards.css"
import CardItem from "./CardItem";
import MyCardsFilter from "./MyCardsFilter";
import UserConsumer from "../services/Provider";
import Pagination from "./Pagination"

export class MyCards extends Component {
    static propTypes = {};

    render() {
        const cardStatus = "bought";
        return (
            <UserConsumer>
                {
                    value => {
                        const { myCards, myCardsPageNumber } = value;
                        return (
                            <div className="shower-wrapper">
                                <div className="page-title" id="myCardsTitle">MY CARDS</div>
                                <div className="shower-boady">
                                    <div className="options">
                                        <MyCardsFilter />
                                    </div>
                                    <div className="cards-container">
                                        <div className="card-list" id="card-list-myCards">
                                            {myCards.slice(-10 + (myCardsPageNumber * 10), myCardsPageNumber * 10).map(card =>
                                                <CardItem key={card.id} cardStatus={cardStatus} card={card} />
                                            )}
                                        </div>
                                        {
                                            myCards.length < 10 ? "" : <Pagination type={"MYCARDS"} />
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

export default MyCards;
