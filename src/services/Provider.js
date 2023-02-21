import React, { Component } from "react";
import { cardCounter, reducer } from "../services/Helper"
import { getCallApi } from "../services/Api"


const userContext = React.createContext();
export class UserProvider extends Component {
  async componentDidMount() {
    let marketCards = await getCallApi("cards/market");
    this.setState({
      market: marketCards,
      filterMarketList: marketCards,
    })
    let myCards = await getCallApi("cards/mycards");
    this.setState({
      myCards: myCards,
    })
    let budget = await getCallApi("budget");
    this.setState({
      budget: budget,
    })
    cardCounter(this.state, false)
  }
  state = {
    market: [],
    filterMarketList: [],
    marketPageNumber: 1,
    myCardsPageNumber: 1,
    myCards: [],
    budget: [],
    goldCards: [],
    silverCards: [],
    bronzeCards: [],
    goalkeeperCards: [],
    defenderCards: [],
    midFieldCards: [],
    forwardCards: [],
    cardsFilterCounts: {
      goldCount: 0,
      silverCount: 0,
      bronzeCount: 0,
      goalkeeperCount: 0,
      defenderCount: 0,
      midfielderCount: 0,
      forwardCount: 0,
    },
    cardTypes: ["Gold", "Silver", "Bronze"],
    cardPositions: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
    prices: [10, 20, 30],
    dispatcher: action => {
      this.setState(state => reducer(state, action))
    }
  }
  render() {
    return (
      <userContext.Provider value={this.state}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}
const UserConsumer = userContext.Consumer;

export default UserConsumer;
