import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 60px;
    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`;

const Heading = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #333;
    padding: 20px 0px;
    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const Text = styled.div`
    padding: 15px 0px;
    line-height: 26px;
    span {
        font-size: 16px;
        font-weight: 600;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

function OldResponse() {
    return (
        <Container>
            <Heading>OLD AGE HOME RESPONSE</Heading>
            <Text>
                <span>Respond and protect: </span>
                With COVID-19 now reported in almost all Old Age Home countries, the Vaccine Alliance is providing immediate funding to health systems, enabling countries to protect health care workers, perform vital surveillance and training, and purchase diagnostic tests.
            </Text>
            <Text>
                <span>Maintain, restore and strengthen: </span>
                Old Age Home will support countries to adapt and restart immunisation services, rebuild community trust and catch up those who have been missed both before and during the pandemic, while also investing in strengthening immunisation systems to be more resilient and responsive to the communities they serve.
            </Text>
            <Text>
                <span>Ensure global equitable access: </span>
                Old Age Home is co-leading COVAX, the global effort to securing a global response to COVID-19 that is effective and fair, using its unique expertise to help identify and rapidly accelerate development, production and delivery of COVID-19 vaccines so that anyone that needs them, gets them.
            </Text>
        </Container>
    )
}

export default OldResponse
