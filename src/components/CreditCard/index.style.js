import styled from "styled-components";

const CreditCardStyle = styled.div`
    background-color: #4aa5ec;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    .card {
        display: flex;
        flex-direction: column;
        padding: 16px;
        width: 100%;
        &-name {
            text-transform: uppercase;
        }
        &-label {
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #f9f9f9;
        }
        &-text {
            color: #f9f9f9;
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
        }
        &-top {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            &--logo {
                width: 80px;
            }
        }
        &-number {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            width: 100%;
            &--label {
                display: flex;
                flex-direction: row;
                width: 100%;
            }
            &--section {
                display: flex;
                flex-direction: row;

                width: 100%;
            }
        }
        &-info {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 30px;
            width: 100%;
            &--name {
                display: flex;
                flex-direction: column;
            }
            &--expire {
                display: flex;
                flex-direction: column;
            }
        }
    }
`;
export default CreditCardStyle;
