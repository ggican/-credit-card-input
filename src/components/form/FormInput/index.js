import React from "react";
import FormLabel from "../FormLabel";
import FormInputStyle from "./index.style";

const FormInput = ({
    label = "",
    errorMessage = "",
    children = null,
    options = {
        type: "text",
        placeholder: "Type Text in Here",
        onChange: () => {},
    },
}) => {
    // const [defaultValue, setDefaultValue] = React.useState();
    // const onChanveValue = e => {
    //     options.onChange(e);
    //     setDefaultValue()
    // };
    return (
        <FormInputStyle>
            {!!label && <FormLabel label={label} />}
            <div className="input-text">
                <input
                    {...options}
                    // onChange={onChanveValue}
                    // defaultValue={defaultValue}
                />
                {children !== null && children}
            </div>
            {!!errorMessage && <span>{errorMessage}</span>}
        </FormInputStyle>
    );
};

export default FormInput;
