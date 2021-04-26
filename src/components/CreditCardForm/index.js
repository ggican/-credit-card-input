import React from "react";
import CreditCardFormStyle from "./index.style";
import Grid from "../grid";
import CreditCard from "../CreditCard";
import FormInputMasked from "../form/FormInputMasked";
import PaymentLogos from "../PaymentLogos";
import FormInput from "../form/FormInput";
import { Formik } from "formik";
import { creditCardType } from "./index.function";
import * as Yup from "yup";

const CreaditCardForm = () => {
    const [payment, setPayment] = React.useState("Blank");
    const [valueCard, setValue] = React.useState({
        name: "name",
        card_number: "---- ---- ---- ----",
        expire: "00/00",
        image: "",
    });

    const onGetValueCreditCard = async (e, handleChange) => {
        const getValue = e.target.value;
        await onGetValue(e, handleChange);
        const checkPayment = await creditCardType(
            getValue.replace(/(_)|( )/g, ""),
        );
        setPayment(checkPayment);
    };

    const onGetValue = (e, handleChange) => {
        setValue(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
        handleChange(e);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(e.target.value);
            }, 750);
        });
    };

    return (
        <CreditCardFormStyle>
            <Grid align="center">
                <Grid.Col lg={6} sm={12} xs={12} md={6}>
                    <CreditCard
                        {...valueCard}
                        logo={PaymentLogos[payment].image}
                    ></CreditCard>
                </Grid.Col>
                <Grid.Col lg={6} sm={12} xs={12} md={6}>
                    <Formik
                        initialValues={{
                            name: "",
                            card_number: "",
                            cvv: "",
                            expire: "",
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .required("Please Type Your Name")
                                .matches(
                                    /\s/,
                                    "You need type first name and last name",
                                ),
                            card_number: Yup.string()
                                .min(16, "Must be exactly 4 digits")
                                .max(20, "Must be exactly 4 digits")
                                .required("Please Type Your Name"),
                            expire: Yup.string()
                                .test(
                                    "test-credit-card-expiration-date",
                                    "Invalid Expiration Date has past",
                                    expirationDate => {
                                        if (!expirationDate) {
                                            return false;
                                        }

                                        const today = new Date();
                                        const monthToday = today.getMonth() + 1;
                                        const yearToday = today
                                            .getFullYear()
                                            .toString()
                                            .substr(-2);
                                        const [
                                            expMonth,
                                            expYear,
                                        ] = expirationDate.split("/");

                                        if (
                                            Number(expYear) < Number(yearToday)
                                        ) {
                                            return false;
                                        } else if (
                                            Number(expMonth) < monthToday &&
                                            Number(expYear) <= Number(yearToday)
                                        ) {
                                            return false;
                                        }

                                        return true;
                                    },
                                )
                                .test(
                                    "test-credit-card-expiration-date",
                                    "Invalid Expiration Month",
                                    expirationDate => {
                                        if (!expirationDate) {
                                            return false;
                                        }
                                        const [expMonth] = expirationDate.split(
                                            "/",
                                        );

                                        if (Number(expMonth) > 12) {
                                            return false;
                                        }

                                        return true;
                                    },
                                ),
                            cvv: Yup.string()
                                .min(4, "Must be exactly 4 digits")
                                .max(4, "Must be exactly 4 digits")
                                .required("Required"),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ errors, handleChange }) => (
                            <form className="form-input-credit-card" action="">
                                <FormInput
                                    label="Name"
                                    errorMessage={errors.name}
                                    options={{
                                        name: "name",
                                        placeholder: "Your name type in here",
                                        onChange: e =>
                                            onGetValue(e, handleChange),
                                    }}
                                ></FormInput>
                                <FormInputMasked
                                    errorMessage={errors.card_number}
                                    label="Card Number"
                                    mask="1111 1111 1111 1111 1111"
                                    name="card_number"
                                    id="card_number"
                                    onChange={e => {
                                        onGetValueCreditCard(e, handleChange);
                                    }}
                                >
                                    <div className="card-logo">
                                        <img
                                            src={PaymentLogos[payment].image}
                                            alt=""
                                        />
                                    </div>
                                </FormInputMasked>

                                <Grid>
                                    <Grid.Col lg={6} sm={6} xs={6} md={6}>
                                        <FormInputMasked
                                            errorMessage={errors.expire}
                                            label="Month / Year"
                                            mask="11/11"
                                            name="expire"
                                            id="expire"
                                            onChange={e =>
                                                onGetValue(e, handleChange)
                                            }
                                        />
                                    </Grid.Col>
                                    <Grid.Col lg={6} sm={6} xs={6} md={6}>
                                        <FormInputMasked
                                            errorMessage={errors.cvv}
                                            withSecure
                                            label="CVV"
                                            mask="1111"
                                            name="cvv"
                                            id="cvv"
                                            type="password"
                                            onChange={e =>
                                                onGetValue(e, handleChange)
                                            }
                                        />
                                    </Grid.Col>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Grid.Col>
            </Grid>
        </CreditCardFormStyle>
    );
};

export default CreaditCardForm;
