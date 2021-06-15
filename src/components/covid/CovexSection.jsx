import React from 'react'
import styled from 'styled-components'
import CovexImage from '../../assets/images/covid/covex.jpg'
import BodyCovex from '../../assets/images/covid/covexlogo.png'

const Container = styled.div`
    color: #fff;
    width: 100%;
    display: flex;
    margin: 40px 0px;
    background: #082F3B;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const Body = styled.div`
    width: 50%;
    padding: 30px;
    @media(max-width: 768px) {
        width: 96%;
        padding: 10px;
        padding-top: 35px;
    }
`;

const BodyImage = styled.img`
    height: auto;
    max-width: 100%;
    padding: 30px 0px;
`;

const Text = styled.div`
    font-size: 18px;
    @media(max-width: 500px) {
        font-size: 16px;
    }
`;

const Image = styled.img`
    width: 50%;
    padding: 20px;
    @media(max-width: 768px) {
        width: 96%;
        padding: 10px;
    }
`;

function CovexSection() {
    return (
        <Container>
            <Body>
                <BodyImage src={BodyCovex} alt="Error-image" />
                <Text>Old Age Home is co-leading COVAX, the vaccines pillar of the Access to COVID-19 Tools (ACT) Accelerator. This involves coordinating the COVAX Facility, a global risk-sharing mechanism for pooled procurement and equitable distribution of eventual COVID-19 vaccines.</Text>
            </Body>
            <Image src={CovexImage} alt="Error-image" />
        </Container>
    )
}

export default CovexSection
