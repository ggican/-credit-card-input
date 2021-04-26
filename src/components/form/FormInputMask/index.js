import React from "react";
import {
    StyledApp,
    StyledCardForm,
    StyledTextInput,
    StyledCard,
} from "./index.style";
import { getDisplayCardNumber } from "./input.function";

const TextInput = ({ label, type = "text", id, value, ...props }) => (
    <StyledTextInput>
        {label && <label htmlFor={id}>{label}</label>}
        <input id={id} type={type} value={value} {...props} />
    </StyledTextInput>
);

const CreditCard = ({ cardInfo }) => {
    const { name, number, expiryMonth, expiryYear } = cardInfo;
    let cardNumber = getDisplayCardNumber(number);
    let cardName = name < 1 ? "Name" : name;
    let expiry =
        expiryMonth < 1 && expiryYear < 1
            ? "00/00"
            : `${expiryMonth}/${expiryYear}`;

    return (
        <StyledCard>
            <div className="card">
                <div className="cardNumber">
                    <span className="numberSection">{cardNumber[0]}</span>
                    <span className="numberSection">{cardNumber[1]}</span>
                    <span className="numberSection">{cardNumber[2]}</span>
                    <span className="numberSection">{cardNumber[3]}</span>
                    {cardNumber[4] && (
                        <span className="numberSection">{cardNumber[4]}</span>
                    )}
                </div>
                <div className="cardInfo">
                    <div className="cardName">
                        <span>Card Holder</span>
                        <p>{cardName}</p>
                    </div>
                    <div className="cardExpiry">
                        <span>Expires</span>
                        <p>{expiry}</p>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
};

const CardForm = ({
    cardInfo: { name, number, expiryMonth, expiryYear, cvv },
    onChange,
}) => {
    return (
        <StyledCardForm>
            <h2>Card Details</h2>
            <form>
                <ul>
                    <li>
                        <TextInput
                            label="Card Holder Name"
                            id="name"
                            type="text"
                            value={name}
                            onChange={e =>
                                onChange({ key: "name", value: e.target.value })
                            }
                            minLength="1"
                            maxLength="40"
                            required
                        />
                    </li>
                    <li>
                        <TextInput
                            label="Card Number"
                            id="number"
                            type="text"
                            value={number}
                            onChange={e =>
                                onChange({
                                    key: "number",
                                    value: e.target.value,
                                })
                            }
                            placeholder="**** **** **** ****"
                            minLength="12"
                            maxLength="19"
                            required
                        />
                    </li>
                    <li>
                        <TextInput
                            label="Expiry Month"
                            id="expiryMonth"
                            type="text"
                            value={expiryMonth}
                            onChange={e =>
                                onChange({
                                    key: "expiryMonth",
                                    value: e.target.value,
                                })
                            }
                            placeholder="MM"
                            minLength="2"
                            maxLength="2"
                            required
                        />
                    </li>
                    <li>
                        <TextInput
                            label="Expiry Year"
                            id="expiryYear"
                            type="text"
                            value={expiryYear}
                            onChange={e =>
                                onChange({
                                    key: "expiryYear",
                                    value: e.target.value,
                                })
                            }
                            placeholder="YY"
                            minLength="2"
                            maxLength="4"
                            required
                        />
                    </li>
                    <li>
                        <TextInput
                            label="CVV"
                            id="cvv"
                            type="text"
                            value={cvv}
                            onChange={e =>
                                onChange({ key: "cvv", value: e.target.value })
                            }
                            minLength="3"
                            maxLength="4"
                        />
                    </li>
                </ul>
            </form>
        </StyledCardForm>
    );
};

const FormInputMask = () => {
    const initialState = {
        name: "",
        number: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
    };

    const inputReducer = (state, action) => {
        return { ...state, [action.key]: action.value };
    };

    const [cardInfo, handleOnChange] = React.useReducer(
        inputReducer,
        initialState,
    );

    return (
        <StyledApp>
            <CreditCard cardInfo={cardInfo} />
            <CardForm cardInfo={cardInfo} onChange={handleOnChange} />
        </StyledApp>
    );
};

export default FormInputMask;
