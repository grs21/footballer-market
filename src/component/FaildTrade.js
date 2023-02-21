import "../css/TradeModal.css"
function FaildTrade(props) {
    const { faildToggleState } = props
    function backButtonListener(e) {
        faildToggleState();
    }
    return (
        <div className="toggle-wrapper">
            <div className="toggle-container">
                <div className="message-container">
                    <div className="toggle-message">
                        You don't have enough money
                    </div>
                </div>
                <button onClick={backButtonListener} className="trade-toggle-buy-button">Back</button>
            </div>

        </div >
    );
}
export default FaildTrade;