import "../css/CardModal.css"
import Attribute from "./helperComponent/Attribute";
import { Croos } from "../assets/icons/assets";
function CardModal(props) {
    const { card, cardStatus, changeToggleState, tradeButtonEventListener } = props;
    function closeToggle(e) {
        changeToggleState(true, this);
    }
    function tradeEventListener() {
        tradeButtonEventListener(card, cardStatus);
    }
    return (
        <div className="toggle-wrapper">
            <div className="sizer">
                {/* ---------Img------------ */}
                <div className="flex1">
                    <div className={`image-wrapper ${card.cardType}`} >
                        <div onClick={closeToggle}>
                            <Croos />
                        </div>
                        <img className="toggleImage" src={card.photoUrl} alt="" />
                    </div>
                </div>
                <div className="flex2">
                    {/* ---------Action-Part------------ */}
                    <div className="action-wrapper">
                        <div className="toggle-name-container">
                            <div className="name">
                                {card.name}
                            </div>
                            <div className="position">
                                {card.position}
                            </div>
                        </div>
                        <div className="toggle-cost-container">
                            <div className="toggle-cost">
                                € {card.price}.00
                            </div>
                            <button className="toggle-button" onClick={tradeEventListener}>
                                {cardStatus === "bought" ? "Sell" : "Buy"}
                            </button>
                        </div>
                    </div>
                    {/* ---------Attributes-Part------------ */}
                    <div className="attributes-wrapper">
                        <div className="attributes-container">
                            <div className="attributes-title">
                                ATTRIBUTES
                            </div>
                            <div className="attibutes">
                                {Object.keys(card.attributes).map((name, index) => (
                                    <Attribute key={card.id} name={name} point={card.attributes[name]} />

                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ---------Car-Status------------- */}
                    <div className="card-stattus-wrapper">
                        <div className="team-container">
                            <div className="status-blank">
                                <div className="status-title">
                                    Team
                                </div>
                                <div className="status-name">
                                    {card.team}
                                </div>
                            </div>
                        </div>
                        <div className="card-type-container">
                            <div className="status-blank">
                                <div className="status-title">
                                    Card Type
                                </div>
                                <div className="status-name">
                                    {card.cardType}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardModal;