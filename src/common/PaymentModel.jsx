import React from 'react'
import styled from 'styled-components'
import { paymentModel } from '../constant';

const Container = styled.div`
    ul {
        padding-top: 10px;
    }
    h4 {
        color: #333;
        padding-top: 20px;
    }
`;

const PaymentTable = styled.table`
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

const PaymentModel = () => {
    return (
        <Container>
            <h4>Payment chart Model-1   monthly basis</h4>
            <PaymentTable>
                <thead>
                    <tr>
                        <THeading>Type</THeading>
                        <THeading>Monthly Donation</THeading>
                        <THeading>Donation single time</THeading>
                        <THeading>Donation refundable</THeading>
                        <THeading facility={true}>Facility</THeading>
                    </tr>
                </thead>
                <tbody>
                    {paymentModel.map((obj, index) => {
                        return (
                            <PaymentRow key={index}>
                                <Type>{obj.type}</Type>
                                <Type>{obj.donation}</Type>
                                <Type>{obj.singleTime}</Type>
                                <Type>{obj.nil}</Type>
                                <Type>{obj.facility}</Type>
                            </PaymentRow>
                        )
                    })}
                </tbody>
            </PaymentTable>
            <ul>
                <li>For bed ridden patient 2000 rs will be extra for attendant care</li>
                <li>Electricity expenses extra 1000 rs  per person</li>
            </ul>
        </Container>
    )
}

export default PaymentModel
