import React, { useEffect } from 'react'
import styled from 'styled-components';
import Form from '../../common/Form';
import LifetimeModel from '../../common/LifetimeModel';
import PaymentModel from '../../common/PaymentModel';


const Container = styled.div`
    width: 88%;
    padding: 60px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 0px 20px 20px 20px;
        flex-direction: column;
    }
`;

const Heading = styled.h1`
    font-size: 36px;
`;

const SubContainer = styled.div`
    width: 100%;
    max-width: 75%;
    ul {
        color: #333;
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const EnquiryForm = styled.div`
    max-width: 20%;
    @media (max-width: 768px) {
        max-width: 97%;
    }
    @media (max-width: 500px) {
        max-width: 90%;
    }
`;

const SubHeading = styled.h3`
    font-weight: 400;
    font-size: 20px;
    color: grey;
`;

const Price = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <Container>
            <SubContainer>
                <Heading>Price List</Heading>
                <PaymentModel />
                <LifetimeModel />
            </SubContainer>
            <EnquiryForm>
                <SubHeading>Enquiry Form</SubHeading>
                <Form />
            </EnquiryForm>
        </Container>
    )
}

export default Price

