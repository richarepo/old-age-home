import React, { useEffect } from 'react'
import styled from 'styled-components';
import ContactHome from '../../assets/images/contact .jpg'
import Form from '../../common/Form';
import ContactBody from '../../assets/images/footer-logo.png'


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

const HomeImage = styled.img`
    width: 60%;
    padding-bottom: 20px;
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

const BodyImage = styled.img``;

const SubHeading = styled.h3`
    font-weight: 400;
    font-size: 20px;
    color: grey;
`;

const Mobile = styled.div`
    font-size: 14px;    
    color: #333;
    padding: 20px 0px;
`;

const Email = styled.div`
    font-size: 14px;    
    color: #333;
    padding-bottom: 10px;
`;

const Address = styled.div` 
    font-size: 14px;    
    color: #333;
`;

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <Container>
            <SubContainer>
                <Heading>Contact Us</Heading>
                <HomeImage src={ContactHome} />
                <h1>MUKHIYA KARAN SINGH OLD AGE HOME</h1>
                <BodyImage src={ContactBody} />
                <Mobile>Mobile No.: +91 – 9811278178</Mobile>
                <Email>Email ID: info@mksoldagehome.com</Email>
                <Address>
                    Address: Plot No.-110  Ristal Road Bhanera Behind Farukhnagar Police Chowki Near Bharat City  Ghaziabad, 201102 7 KM From Dilshad Garden Metro Delhi Towards Loni Bhopura Road
                </Address>
            </SubContainer>
            <EnquiryForm>
                <SubHeading>Enquiry Form</SubHeading>
                <Form />
            </EnquiryForm>
        </Container>
    )
}

export default ContactUs

