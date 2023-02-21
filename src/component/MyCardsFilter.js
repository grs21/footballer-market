import React from "react";
import "../css/MycardsFilter.css"
import UserConsumer from "../services/Provider";
import ItemCount from "./helperComponent/ItemCount";
import RangeFilter from "./RangeFilter";
import { TopArrow } from "../assets/icons/assets";
function MyCardsFilter() {
    let selectedFilter = "all";
    let resetFilter = false;
    const marketCardList = document.getElementById("card-list-myCards");

    function setFilter(filterType, filtervalue, e) {    
        marketCardList.childNodes.forEach(element => {
            switch (filterType) {
                case "cardType":
                    let cardType = element.getAttribute("cardType");
                    if (selectedFilter !== filtervalue) {
                        if (cardType !== filtervalue) {
                            element.classList.add("display-none");
                        } else {
                            element.classList.remove("display-none")
                        }
                    } else {
                        element.classList.remove("display-none")
                        resetFilter = true
                    }
                    break;
                case "cardPrice":
                    let maxVal = filtervalue.maxVal;
                    let minVal = filtervalue.minVal;
                    let cardPrice = parseInt(element.getAttribute("cardPrice"));
                    if (minVal <= cardPrice && cardPrice <= maxVal) {
                        element.classList.remove("display-none")
                    } else {
                        element.classList.add("display-none");
                    }
                    break;
                case "cardPosition":
                    let cardPosition = element.getAttribute("cardPosition");
                    if (selectedFilter !== filtervalue) {
                        if (cardPosition !== filtervalue) {
                            element.classList.add("display-none");
                        } else {
                            element.classList.remove("display-none")
                        }
                    } else {
                        element.classList.remove("display-none")
                        resetFilter = true
                    }
                    break;
                default:
                    break;
            }
        });
        resetFilter ? selectedFilter = "" : selectedFilter = filtervalue;
        resetFilter = false;
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { cardsFilterCounts } = value;
                    return (
                        <div className="filter-wrapper">
                            <div className="filter-type">
                                <div className="filter-title-container">
                                    <div className="filter-title">Card Type</div>
                                    <TopArrow class={"top-arrow"} />
                                </div>
                                <ul className="filter-list">
                                    <li onClick={setFilter.bind(this, "cardType", "Gold")}>Gold <ItemCount count={cardsFilterCounts.goldCount} /></li>
                                    <li onClick={setFilter.bind(this, "cardType", "Silver")}>Silver <ItemCount count={cardsFilterCounts.silverCount} /></li>
                                    <li onClick={setFilter.bind(this, "cardType", "Bronze")}>Bronze <ItemCount count={cardsFilterCounts.bronzeCount} /></li>
                                </ul>
                                <hr className="line-style" />
                            </div>
                            <div className="filter-type">
                                <div className="filter-title-container">
                                    <div className="position-title">Position</div>
                                    <TopArrow class={"custom-top-arrow"} />
                                </div>
                                <ul className="filter-list">
                                    <li onClick={setFilter.bind(this, "cardPosition", "Goalkeeper")} >Goalkeeper <ItemCount count={cardsFilterCounts.goalkeeperCount} /></li>
                                    <li onClick={setFilter.bind(this, "cardPosition", "Defender")}>Defender <ItemCount count={cardsFilterCounts.defenderCount} /></li>
                                    <li onClick={setFilter.bind(this, "cardPosition", "Midfielder")}>Midfielder <ItemCount count={cardsFilterCounts.midfielderCount} /></li>
                                    <li onClick={setFilter.bind(this, "cardPosition", "Forward")} >Forward <ItemCount count={cardsFilterCounts.forwardCount} /></li>
                                </ul>
                                <hr className="line-style" />
                            </div>
                            <div className="price-container">
                                <div className="filter-title-container">
                                    <div className="position-title">Price</div>
                                    <TopArrow class={"custom-top-arrow"} />
                                </div>
                                <RangeFilter filterEventListener={setFilter} />
                            </div>
                        </div>
                    );
                }
            }
        </UserConsumer>
    );

}


export default MyCardsFilter;
