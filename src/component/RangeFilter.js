import React, { useState } from "react";
import "../css/RangeFilter.css";

function RangeFilter(props) {
    const priceGap = 10;
    const [minVal, setMinValue] = useState(20);
    const [maxVal, setMaxValue] = useState(40);
    const mingRange = (filterEventListener, event) => {
        let value = parseInt(event.target.value);
        if (maxVal - value < priceGap) {
            setMinValue(maxVal - priceGap)
        } else {
            setMinValue((value))
        }
        filterEventListener("cardPrice", { minVal: value, maxVal: maxVal })
    };
    const maxRange = (filterEventListener, event) => {
        let value = parseInt(event.target.value);
        if (value - minVal < priceGap) {
            setMaxValue(minVal + priceGap);
        } else {
            setMaxValue(value)
        }
        filterEventListener("cardPrice", { minVal: minVal, maxVal: value })
    };
    const { filterEventListener } = props
    return (
        <form className="wrapper">
            <div className="price-input">
                <div className="field">
                    <div className="input-min">€ {minVal}</div>
                </div>
                <div className="field">
                    <div className="input-max">€ {maxVal}</div>
                </div>
            </div>
            <div className="price-input-container">
                <div className="slider">
                    <div className="progress" style={{ left: `${minVal}%`, right: `${(100 - maxVal)}%` }} ></div>
                </div>
                <div className="range-input">
                    <input onChange={mingRange.bind(this, filterEventListener)} type="range" className="range-min" min="0" max="100" value={minVal} step="10" />
                    <input onChange={maxRange.bind(this, filterEventListener)} type="range" className="range-max" min="0" max="100" value={maxVal} step="10" />
                </div>
            </div>
        </form>
    );
}

export default RangeFilter;