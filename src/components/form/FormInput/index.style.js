import styled from "styled-components";

const FormInputStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    .input-text {
        position: relative;
        > input {
            border: 1px solid #ddd;
            border-radius: 4px;
            display: flex;
            font-size: 16px;
            height: 40px;
            outline: none;
            padding: 12px;
            transition: all ease-in 0.3s;
            width: 100%;
            &:focus {
                border: 1px solid #03a9f4;
                transition: all ease-in 0.3s;
            }
        }
    }
    > span {
        color: red;
        font-size: 12px;
        margin-top: 5px;
    }
`;
export default FormInputStyle;
