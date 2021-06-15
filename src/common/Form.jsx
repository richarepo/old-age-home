import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 98%;
border: 1px solid #606060;
padding: 20px;
border-radius: 0px;
font-weight: bold;
font-size: 16px;
color: #2d4d5f;
background: #d8d8d8;
    input, textarea {
        width: 98%;
        outline: none;
        border: none;
        height: 30px;
        font-size: 14px;
        padding-left: 15px;
    }
    textarea {
        padding-top: 10px;
        min-height: 120px;
    }
    .input-label {
        :after {
            content: "*";
            color: red;
        }
        padding-bottom: 10px;
    }
`;

const InputWrapper = styled.div`
    padding: 10px;
`;

const SubmitButton = styled.div`
    padding-left: 10px;
    padding-bottom: 20px;
    button {
        color: #fff;
        padding: 10px;
        border: none;
        outline: none;
        font-size: 16px;
        background: #930912;
        :hover {
            cursor: pointer;
            background: #51030b;
        }
    }
`;

const Form = () => {
    return (
        <Container>
            <InputWrapper>
                <div className="input-label">Name </div>
                <input type="text" />
            </InputWrapper>
            <InputWrapper>
                <div className="input-label">Email </div>
                <input type="text" />
            </InputWrapper>
            <InputWrapper>
                <div className="input-label">Phone </div>
                <input type="number" />
            </InputWrapper>
            <InputWrapper>
                <div className="input-label">Subject </div>
                <input type="text" />
            </InputWrapper>
            <InputWrapper>
                <div className="input-label">Message </div>
                <textarea type="text" />
            </InputWrapper>
            <SubmitButton>
                <button>Submit</button>
            </SubmitButton>
        </Container>
    )
}

export default Form
