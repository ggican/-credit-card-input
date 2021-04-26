import React from "react";
import FormInput from "./index";

export default { title: "Components|Form|Form Input", component: FormInput };

export const FormInputDefault = () => {
    return <FormInput></FormInput>;
};

export const FormInputLabel = () => {
    return <FormInput label="Name"></FormInput>;
};

export const FormInputPlaceholder = () => {
    return (
        <FormInput
            options={{ type: "text", placeholder: "Ikhsan Mahendri" }}
            label="Name"
        ></FormInput>
    );
};
export const FormInputTypeNumber = () => {
    return (
        <FormInput
            options={{ type: "number", placeholder: "Ikhsan Mahendri" }}
            label="Name"
        ></FormInput>
    );
};
