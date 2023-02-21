import "../css/TradeModal.css"
import UserConsumer from "../services/Provider";
function CardModal(props) {
    const { card, cardStatus, tradeToggleState } = props;
    function tradeButtonEventListener(process, budget, dispatcher, e) {
        tradeToggleState(card, process, budget, dispatcher);
    }
    return (
        <UserConsumer>
            {
                value => {
                    const { budget, dispatcher } = value;
                    return (
                        <div className="toggle-wrapper">
                            <div className="toggle-container">
                                <div className="message-container">
                                    <div className="toggle-message">
                                        Would you like to {cardStatus === "bought" ? "Sell" : "Buy"} the card for
                                    </div>
                                    <div className="trade-toggle-cost">
                                        € {card.price}.00
                                    </div>
                                </div>
                                <button onClick={tradeButtonEventListener.bind(this, cardStatus === "bought" ? "sell" : "buy", budget, dispatcher)} className="trade-toggle-buy-button">{cardStatus === "bought" ? "Sell" : "Buy"}</button>
                                <button onClick={tradeButtonEventListener.bind(this, "cancel", dispatcher)} className="trade-toggle-cancel-button">Cancel</button>
                            </div>
                        </div >
                    );
                }
            }
        </UserConsumer>
    );
}
export default CardModal;