
export const deleteUserFromList = (list, card) => {
    return (list.filter(user => card.id !== user.id));
};

export const addUserToList = (list, card) => {
    list.push(card)
};

export const cardCounterByType = (state, cardType, cardPosition, isDeleted) => {
    switch (cardType) {
        case "Gold":
            isDeleted ? state.cardsFilterCounts.goldCount-- :
                state.cardsFilterCounts.goldCount++;
            break;
        case "Silver":
            isDeleted ? state.cardsFilterCounts.silverCount-- :
                state.cardsFilterCounts.silverCount++;
            break;
        case "Bronze":
            isDeleted ? state.cardsFilterCounts.bronzeCount-- :
                state.cardsFilterCounts.bronzeCount++;
            break;
        default:
            break;
    }
    switch (cardPosition) {
        case "Goalkeeper":
            isDeleted ? state.cardsFilterCounts.goalkeeperCount-- :
                state.cardsFilterCounts.goalkeeperCount++;
            break;
        case "Defender":
            isDeleted ? state.cardsFilterCounts.defenderCount-- :
                state.cardsFilterCounts.defenderCount++;
            break;
        case "Midfielder":
            isDeleted ? state.cardsFilterCounts.midfielderCount-- :
                state.cardsFilterCounts.midfielderCount++;
            break;
        case "Forward":
            isDeleted ? state.cardsFilterCounts.forwardCount-- :
                state.cardsFilterCounts.forwardCount++;
            break;
        default:
            break;
    }
};
export const cardCounter = (state, isDeleted) => {
    state.myCards.map(card => {
        var cardType = card.cardType;
        var cardPosition = card.position;
        cardCounterByType(state, cardType, cardPosition, isDeleted)
    })
};

export const reducer = (state, action) => {
    let card = action.payload;
    switch (action.type) {
        case "BUY":
            ///Remove to budget
            state.budget.budget = (state.budget.budget - card.price);
            state.market = deleteUserFromList(state.market, card)
            addUserToList(state.myCards, action.payload);
            /// to set the filter counter when a new card is added or removed
            cardCounterByType(state, card.cardType, card.position, false);
            return (state.budget.budget)
        case "SELL":
            addUserToList(state.market, card);
            state.myCards = deleteUserFromList(state.myCards, card);
            ///Add to budget
            state.budget.budget = (state.budget.budget + card.price);
            cardCounterByType(state, card.cardType, card.position, true);
            return (state.budget.budget);
        ///for pagination
        case "CHANGE_PAGE_MARKET":
            if (state.marketPageNumber < action.payload) {
                state.marketPageNumber = state.marketPageNumber + (action.payload - state.marketPageNumber);
                return state.marketPageNumber;
            } else if (action.payload < state.marketPageNumber) {
                state.marketPageNumber = state.marketPageNumber - (state.marketPageNumber - action.payload);
                return state.marketPageNumber;
            }
        ///for pagination
        case "CHANGE_PAGE_MYCARDS":
            if (state.myCardsPageNumber < action.payload) {
                state.myCardsPageNumber = state.myCardsPageNumber + (action.payload - state.myCardsPageNumber);
                return state.myCardsPageNumber;
            } else if (action.payload < state.myCardsPageNumber) {
                state.myCardsPageNumber = state.myCardsPageNumber - (state.myCardsPageNumber - action.payload);
                return state.myCardsPageNumber;
            }
        ///For pagination arrow
        case "CHANGE_PAGE":
            if (action.payload === "MARKET") {
                state.marketPageNumber = state.marketPageNumber + 1;
                return state.marketPageNumber;
            } else if (action.payload === "MYCARDS") {
                state.myCardsPageNumber = state.myCardsPageNumber + 1;
                return state.myCardsPageNumber;
            }
        case "SET_MARKET":
            state.market = action.payload;
            return state.market;
        default:
            return "";
    }
}