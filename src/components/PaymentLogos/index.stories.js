import React from "react";
import PaymentLogo from "./index";

export default {
    title: "Components|Payment Logos",
    component: PaymentLogo,
};

export const PaymentLogoDefault = () => {
    return (
        <div>
            <img style={{ width: 120 }} src={PaymentLogo.Amazon.image} alt="" />
        </div>
    );
};
export const PaymentLogoList = () => {
    return (
        <div>
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Amazon.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Bitcoin.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Americanexpress.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Cb.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Cirrus.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Mastercard.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Paypal.image}
                alt=""
            />
            <img
                style={{ width: 120, marginBottom: 10 }}
                src={PaymentLogo.Visa.image}
                alt=""
            />
        </div>
    );
};
