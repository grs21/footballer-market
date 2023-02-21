import React from "react";
import UserConsumer from "../services/Provider";
import PaginationButton from "./helperComponent/PaginationButton";
import { RightArrow } from "../assets/icons/assets";
function Pagination(props) {
    function rightArrowClickListener(dispatcher, e) {
        const paginationButtonContainer = document.getElementsByClassName("pagination-button-continer")[0];
        let isLastPaginationButton = paginationButtonContainer.lastChild.className.includes("red");
        if (!isLastPaginationButton) {
            dispatcher({ type: "CHANGE_PAGE", payload: props.type });
        }
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { type } = props;
                    const { market, myCards, dispatcher } = value;
                    let itemList = type === "MARKET" ? market : myCards;
                    let totalPaginationCount = Math.ceil(itemList.length / 10);
                    return (
                        <div className="pagination">
                            <div className="lef-arrow">
                            </div>
                            <div className="pagination-button-continer">
                                {
                                    Array.from(Array(totalPaginationCount), (e, i) => {
                                        return <PaginationButton number={i + 1} type={type} />
                                    })
                                }
                            </div>
                            <div className="right-arrow" onClick={rightArrowClickListener.bind(this, dispatcher)}>
                                <RightArrow />
                            </div>
                        </div>
                    );
                }
            }
        </UserConsumer>
    );
}

export default Pagination;
