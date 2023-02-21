import React from "react";
import '../css/Card.css';
function Card(props) {
    const { card, imgUrl, changeToggleState } = props;
    function openToogle() {
        changeToggleState();
    }
    return (
        <div onClick={openToogle} >
            <div >
                <img src={imgUrl === undefined ? card.photoUrl : imgUrl} alt="" style={{ height: "286px", width: "198px" }} />
            </div>
        </div>
    );
}

export default Card;
