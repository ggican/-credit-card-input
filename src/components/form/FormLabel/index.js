import React from "react";
import FormLabelStyle from "./index.style";

const FormLabel = ({ label = "text" }) => {
    return <FormLabelStyle>{label}</FormLabelStyle>;
};

export default FormLabel;
