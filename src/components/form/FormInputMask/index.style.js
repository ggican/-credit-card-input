import styled from "styled-components";

export const StyledCard = styled.div`
    flex: 0 0 auto;
    font-family: "Space Mono", monospace;
    height: 200px;
    padding: 0 1em;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    width: 320px;

    .card {
        background: linear-gradient(45deg, #343a40, #666666, #343a40);
        border-radius: 8px;
        box-shadow: 1px 1px #aaa3a3;
        color: #fff;
        height: 100%;

        .cardNumber {
            display: flex;
            font-size: 1.2em;
            justify-content: space-between;
            letter-spacing: 2px;
            padding: 0 1em;
            position: relative;
            top: 75px;
            word-spacing: 4px;
        }

        .cardInfo {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            letter-spacing: 1px;
            line-height: 18px;
            padding: 0 1em;
            position: relative;
            text-transform: uppercase;
            top: 110px;

            span {
                font-size: 11px;
            }

            p {
                font-size: 16px;
                margin-top: 8px;
            }

            .cardExpiry {
                text-align: right;
            }
        }
    }
`;

export const StyledTextInput = styled.div`
    color: #343a40;

    label {
        display: inline;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        outline: none;
        border: 1px solid #ebecee;
        padding: 10px;
        margin: 10px 0;
    }

    input:focus {
        border-color: #64b5f6;
    }
`;

export const StyledCardForm = styled.div`
    background-color: #e0e0e0;
    border-radius: 8px;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
    flex: 1 0 auto;
    max-width: 400px;
    overflow: hidden;
    padding: 1em 2em;

    h2 {
        border-bottom: 1px solid #aeaeae;
        color: #343a40;
        margin: 0;
        padding-bottom: 0.75em;
        padding-top: 0.25em;
    }

    ul {
        list-style: none;
        padding: 0;

        li:not(:last-child) {
            margin-bottom: 15px;
        }
    }
`;

export const StyledApp = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3em;

    & > div:not(:last-child) {
        margin-bottom: 2em;
    }
`;
