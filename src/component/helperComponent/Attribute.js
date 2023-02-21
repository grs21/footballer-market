import React from "react";
import "../../css/Attribute.css"

function Attribute(props) {
    let { name, point } = props;
    return (
        <div className="attribute">
            <div className="atribute-container">
                <div className="attribute-name">
                    {name}
                </div>
                <div className="attribute-point">
                    <div className="point">
                        {point}
                    </div>
                    <div className="percentage">
                        /100
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attribute;
