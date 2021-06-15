import React, { useEffect } from 'react'
import styled from 'styled-components'
import Form from '../../common/Form';
import LifetimeModel from '../../common/LifetimeModel';
import PaymentModel from '../../common/PaymentModel';
import OldAgeHome from './OldAgeHome'

const Container = styled.div`
    padding: 60px;
    @media(max-width: 500px){
        padding: 20px;
    }
    li {
        color: #333;
        font-size: 14px;
        line-height: 1.62857143;
    }
`;

const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Container>
            <OldAgeHome />
            <PaymentModel />
            <LifetimeModel />
            <h4>Available all Over Delhi NCR</h4>
            <ul>
                <li>24/7 Service available</li>
                <li>Affordable Rates</li>
                <li>No Booking Charges</li>
                <li>Services: Bedside Care</li>
                <li>Bathing & Toileting</li>
                <li>Diaper Changing</li>
                <li>Feeding & Walking Care</li>
                <li>Companions</li>
            </ul>
            <Form />
        </Container>
    )
}

export default Home