import React from 'react'
import styled from 'styled-components'
import CovidHome from '../../assets/images/covid/covid.jpg'

const Container = styled.div``;

const CovidImage = styled.img`
    width: 100%;
`;

const HeroSection = styled.div`
    left: 5%;
    top: 35%;
    width: 36%;
    color: #fff;
    position: absolute;
    @media(max-width: 768px) {
        width: 50%;
        top: 35%;
    }
    @media (max-width: 500px) {
        left: 10%;
        width: 75%;
        top: 30%;
    }
`;

const Heading = styled.div`
    font-size: 60px;
    font-weight: 700;
    @media(max-width: 768px) {
        font-size: 30px;
    }
    @media(max-width: 500px) {
        font-size: 20px;
    }
`;

const Text = styled.div`
    line-height: 26px;
    font-size: 18px;
    padding-top: 20px;
    font-weight: 400;
    @media(max-width: 500px) {
        font-size: 12px;
        line-height: unset;
        padding-top: 10px;
    }
`;

const Covid = () => {
    return (
        <Container>
            <HeroSection>
                <Heading>Responding to COVID-19</Heading>
                <Text>In the face of this unprecedented pandemic, Old Age Home is working with countries to support COVID-19 response and to maintain and restore routine immunisation. The Alliance is also co-leading global efforts on equitable access to COVID-19 vaccines.</Text>
            </HeroSection>
            <CovidImage src={CovidHome} alt="covid-error" />
        </Container>
    )
}

export default Covid
