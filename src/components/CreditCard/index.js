import React from "react";
import CreditCardStyle from "./index.style";

const CreditCard = ({
    name = "name",
    card_number = "---- ---- ---- ----",
    expire = "00/00",
    logo = "",
}) => {
    return (
        <CreditCardStyle>
            <div className="card">
                <div className="card-top">
                    <div className="card-top--chip card-text">CHIPS</div>
                    <div className="card-top--logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="card-number">
                    <div className="card-number--label">
                        <span className="card-label">Card Number</span>
                    </div>
                    <div className="card-number--section">
                        <span className="card-text">
                            {card_number
                                ? card_number.replace(/(_)/g, "")
                                : "---- ---- ---- ----"}
                        </span>
                    </div>
                </div>
                <div className="card-info">
                    <div className="card-info--name">
                        <span className="card-label">CardHolder Name</span>
                        <p className="card-text card-name">{name}</p>
                    </div>
                    <div className="card-info--expire">
                        <span className="card-label">VALID THRU</span>
                        <p className="card-text">{expire}</p>
                    </div>
                </div>
            </div>
        </CreditCardStyle>
    );
};

export default CreditCard;
