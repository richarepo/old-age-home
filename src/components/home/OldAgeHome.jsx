import React from 'react'
import styled from 'styled-components'
import HomeLogo from '../../assets/images/home-logo.jpg'

const Container = styled.div``;

const Image = styled.img`
    width: 100%;
    margin: 0 0 10px;
    ul{
        font-size: 14px;
        color: #333;
    }
`;

const Text = styled.div`
    margin: 0 0 20px;
    color: #333;
    font-size: 14px;
`;

const OldAgeHome = () => {
    return (
        <Container>
            <Image src={HomeLogo} alt={'home-error'} />
            <Text>MKS Old Age Home is run by Yuva Vikas Sansthan N.G.O. which was established in the Year 2013 and registered with the Govt. of N.C.T. of Delhi bearing the registration number.</Text>
            <Text>It works towards the aim of providing a safe and stable ‘heaven’ for the elderly. This “home away from home” would enable the aged persons to lead a self reliant, dignified and secure life free from the hassles of daily chores.</Text>
            <h2>Trusted & Certified Experts‎</h2>
            <ul>
                <li>Patient Caretaker</li>
                <li>Elder Care Services</li>
                <li>Nursing Care</li>
                <li>Physiotherapists</li>

            </ul>
        </Container>
    )
}

export default OldAgeHome
