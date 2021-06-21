import React from 'react'
import styled from 'styled-components'
import PopUp from '../../common/PopUp'

const Container = styled.div`
    padding: 40px 40px 25px 40px;
    background: #fafafa;
`;

const Title = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 30px;
`;

const SubTitle = styled.div`
    padding: 10px 0px;
    margin-bottom: 15px;
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.1);
`;

const DonationForm = styled.form``;

const InputField = styled.input`
    width: 98%;
    height: 50px;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid gainsboro;
`;

const OneLine = styled.div`
    display: flex;
    width: 100%;
    .one-line {
        :last-child {
            margin-left: 20px;
        }
    }
`;

const DonationButton = styled.button`
    width: 100%;
    height: 50px;
    color: #333;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px;
    border-radius: 4px;
    border: 1px solid rgb(224, 95, 21);
    :hover {
        color: #fff;
        background: rgb(224, 95, 21);
    }
`;

const DonationAmount = styled.div`
    display: flex;
    border: 1px solid rgb(224, 95, 21);
    .fa {
        left: 42%;
        color: #333;
        margin-top: 18px;
        font-size: 16px;
        position: absolute;
    }
`;

const Amount = styled.div`
    height: 50px;
    width: 40%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
    background: rgb(224, 95, 21);
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const EnterAmount = styled.input`
    width: 60%;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    padding-left: 30px;
`;

const DonationPopup = props => {
    return (
        <PopUp onClose={() => props.handleClose()} width={window.innerWidth < 468 ? 340 : 650}>
            <Container>
                <Title>Donation for Old Age Home</Title>
                <SubTitle>Personal Information</SubTitle>
                <DonationForm>
                    <OneLine>
                        <InputField type="text" placeholder="First Name" />
                        <InputField className="one-line" type="text" placeholder="Last Name" />
                    </OneLine>
                    <InputField type="text" placeholder="Email Address" />
                    <InputField type="number" placeholder="Phone" />
                    <SubTitle>Billing Details</SubTitle>
                    <InputField type="text" placeholder="State" />
                    <InputField type="text" placeholder="Address line 1" />
                    <InputField type="text" placeholder="Address line 2" />
                    <OneLine>
                        <InputField type="text" placeholder="City" />
                        <InputField className="one-line" type="text" placeholder="Zip / Postal Code" />
                    </OneLine>
                    <DonationAmount>
                        <Amount>Enter Amount : </Amount>
                        <EnterAmount type="number" placeholder="0.00" /><i className="fa fa-inr"></i>
                    </DonationAmount>
                    <DonationButton type="submit">Donate Now</DonationButton>
                </DonationForm>
            </Container>
        </PopUp>
    )
}

export default DonationPopup
