import React, { Component } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/index.css";
import Slider from "./Slider";
import Navbar from "./Navbar";
import MyCards from "./MyCards";
import Market from "./Market";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Slider />
        <MyCards />
        <Market />
      </div>

    );
  }
}
export default App;