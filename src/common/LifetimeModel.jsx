import React from 'react'
import styled from 'styled-components';
import { lifetimeModel } from '../constant';

const Container = styled.div`
    ul {
        padding-top: 10px;
    }
    h4 {
        color: #333;
        padding-top: 20px;
    }
`;

const LifeTimeTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const THeading = styled.th`
    text-align: start;
    padding: 15px 7px;
    border: 1px solid #dddddd;
    width: ${props => props.facility ? '30%' : '17%'};
`;

const PaymentRow = styled.tr``;

const Type = styled.td`
    font-size: 14px;
    font-weight: 500;
    color: #3a3c41;
    border: 1px solid #e0e0e0;
    padding: 14px 7px;
`;

const LifetimeModel = () => {
    return (
        <Container>
            <h4>Model-2 Lifetime validity with one time deposit payment</h4>
            <LifeTimeTable>
                <thead>
                    <tr>
                        <THeading>Type</THeading>
                        <THeading>Monthly Donation</THeading>
                        <THeading>Refundable</THeading>
                        <THeading>Validity</THeading>
                        <THeading facility={true}>Facility</THeading>
                    </tr>
                </thead>
                <tbody>
                    {lifetimeModel.map((obj, index) => {
                        return (
                            <PaymentRow key={index}>
                                <Type>{obj.type}</Type>
                                <Type>{obj.timeDonation}</Type>
                                <Type>{obj.refundable}</Type>
                                <Type>{obj.validity}</Type>
                                <Type>{obj.facility}</Type>
                            </PaymentRow>
                        )
                    })}
                </tbody>
            </LifeTimeTable>
            <ul>
                <li>For bed ridden patient 2000 rs will be extra for attendant care</li>
            </ul>
        </Container>
    )
}

export default LifetimeModel
