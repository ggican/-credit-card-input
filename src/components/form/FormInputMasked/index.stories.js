import React from "react";
import FormInputMasked from "./index";

export default {
    title: "Components|Form|Form Input Masked",
    component: FormInputMasked,
};

export const FormInputMaskedDefault = () => {
    const _onCardChange = e => {
        console.log(e.target.value);
    };
    return (
        <FormInputMasked
            mask="1111 1111 1111 1111"
            name="creditCard"
            id="creditCard"
            onChange={_onCardChange}
        />
    );
};
export const FormInputMaskedWithLabel = () => {
    const _onCardChange = e => {
        console.log(e.target.value);
    };
    return (
        <FormInputMasked
            mask="1111 1111"
            label="Credit Card 8 Digit"
            name="creditCard"
            id="creditCard"
            onChange={_onCardChange}
        />
    );
};
export const FormInputMaskedWithType = () => {
    const _onCardChange = e => {
        console.log(e.target.value);
    };
    return (
        <FormInputMasked
            mask="1111 1111"
            label="Credit Card 8 Digit"
            name="creditCard"
            id="creditCard"
            onChange={_onCardChange}
        />
    );
};
