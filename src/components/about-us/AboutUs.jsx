import React, { useEffect } from 'react'
import styled from 'styled-components'
import AboutHome from '../../assets/images/about-us.jpg'
import Form from '../../common/Form';

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

const HomeImage = styled.img`
    width: 100%;
    padding-bottom: 20px;
`;

const Heading = styled.h1`
    font-size: 36px;
`;

const SubContainer = styled.div`
    width: 100%;
    max-width: 75%;
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

const Text = styled.div`
    color: #333;
    font-size: 14px;
    padding-bottom: 10px;
    line-height: 24px;
`;

const TextHeading = styled.div`
    font-weight: 600;
`;

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Container>
            <SubContainer>
                <Heading>About Us</Heading>
                <HomeImage src={AboutHome} />
                <Text> MKS Old Age Home is run by yuva vikas sansthan N.G.O. which was established in the Year 2013 and registered with the Govt. of N.C.T. of Delhi bearing the registration . It works towards the aim of providing a safe and stable ‘heaven’ for the elderly. This “home away from home” would enable the aged persons to lead a self reliant, dignified and secure life free from the hassles of daily chores. </Text>
                <Text> MKS Old Age Home is housed in a Ghaziabad. The calm atmosphere of the MKS Old Age Home provides a lively environment in which the inmates of the MKS Old Age Home can live a happy and blessed life with confidence and independence. MKS Old Age Home, has highly trained staffs who is experienced in dealing with every aspect of inmates housing. </Text>
                <TextHeading>Our Objective</TextHeading>
                <Text>MKS Old Age Home is a Yuva Vikas Sanstha N.G.O. registered with the Govt. of N.C.T. of Delhi bearing the registration working with an objective to provide to the aged, infirm and orphaned people of more than 60 years of age the comforts of home, peace of mind. It is to be run as a nonprofit institution. The aim is to make them feel they are truly at HOME though in a different residence. Their stay at Old age home will free them from various worries and pressures and find them a new life with all the basic comforts and care essential for them. They will never feel that Old age home is a punishment transfer of residence because they have been rejected by society. Admissions to the Old Age Home are open to all irrespective of their caste / creed and religion, but subject to the Rules and Regulations of the institution.</Text>
                <TextHeading>Our Vision</TextHeading>
                <Text>To make a concerted effort to promote and sponsor a safe and stable ‘heaven’ for the elderly. This “home away from home” would enable the aged persons to lead a self reliant, dignified and secure life free from the hassles of daily chores.</Text>
                <TextHeading>Our Mission</TextHeading>
                <Text>The mission is to provide the aged, infirm, orphaned and disease – stricken people of 60 years or above to stay with us on any reason with security, rest, assistance, spiritual relief and protection in a serene and blessed atmosphere at a “home away from home”.</Text>
                <TextHeading>Our Aim</TextHeading>
                <Text>MKS Old Age Home has been set up with the aim of providing home comforts and peace of mind to seniors seeking peace and calm. It is to be run as a nonprofit institution by the for Promotion of Indian Heritage, a social service organization to provide shelter to people of advanced years who feel stressed out by the daily hassles and troubles of life. The aim is to make them feel they are truly at HOME though in a different residence. Their stay at Old age home will free them from various worries and pressures and find them a new life with all the basic comforts and care essential for them. They will never feel that Old age home is a punishment transfer of residence because they have been rejected by society.</Text>
                <TextHeading>Eligibility</TextHeading>
                <Text>Minimum Age Required is 55 years.
                Person should not be suffering from any infectious disease.
                The Person should be free from addiction of any kind.</Text>
            </SubContainer>
            <EnquiryForm>
                <SubHeading>Enquiry Form</SubHeading>
                <Form />
            </EnquiryForm>
        </Container>
    )
}

export default AboutUs

