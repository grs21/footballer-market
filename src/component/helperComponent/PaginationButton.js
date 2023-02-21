import React from "react";
import "../../css/PaginationButton.css"
import UserConsumer from "../../services/Provider";

function PaginationButton(props) {
    const { number, type } = props;
    function changeButton(dispatcher, totalPageNumber, pageNumber, type, e) {
        if (pageNumber <= totalPageNumber) {
            dispatcher({ type: "CHANGE_PAGE_" + type, payload: number });
        }
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { market, myCards, marketPageNumber, myCardsPageNumber, dispatcher } = value;
                    let itemList = type === "MARKET" ? market : myCards;
                    let pageNumber = type === "MARKET" ? marketPageNumber : myCardsPageNumber;
                    const totalPageNumber = Math.ceil(itemList.length / 10);
                    return (
                        <div onClick={changeButton.bind(this, dispatcher, totalPageNumber, pageNumber, type)} className={pageNumber === number ? "pagination-button red" : "pagination-button grey"}>
                            <div className="number">
                                {number}
                            </div>
                        </div>
                    );
                }
            }
        </UserConsumer>
    );
}

export default PaginationButton;
