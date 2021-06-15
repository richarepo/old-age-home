import React from 'react'
import styled from 'styled-components';
import { covidCases } from '../../constant';

const Container = styled.div`
    padding: 20px 60px;
    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`;


const CovidBody = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0px 20px;
        align-items: center;
    }
`;

const CovidData = styled.div`
    width: 33%;
    text-align: center;
    min-height: 180px;
    padding: 10px;
    margin: 0px 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        width: 90%;
        margin: 20px;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
`;

const Header = styled.div`
    font-weight: 700;
    padding-bottom: 20px;
`;

const TextDashboard = styled.h2`
    padding-top: 40px;
    @media (max-width: 768px) {
        padding-left: 30px;
    }
    @media (max-width: 500px) {
        padding-left: 10px;
    }   
`;


const TotalCases = styled.div`
font-size: 40px;
color: #0070ba;
padding-bottom: 10px;
line-height: 40px;
.fa {
    font-size: 60px;
    :after {
        content: "71";
        font-size: 60px;
        padding-right: 15px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
}
`;

const NewCases = styled.div`
    span {
        font-size: 25px;
        color: #fa9234 !important;
        padding: 0 10px;
        color: #333;
    }
`;

const LastUpdate = styled.div`
    text-align: center;
    padding: 20px 0px;
    font-weight: 600;
    color: #333;
    span {
        :hover {
            cursor: pointer;
            text-decoration: underline;
            color: #666 !important;
        }
    }
`;

function Dashboard() {
    return (
        <Container>
            <TextDashboard>COVID-19 dashboard</TextDashboard>
            <CovidBody>
                {covidCases.map((obj, index) => {
                    return (
                        <CovidData key={index}>
                            <Header>{obj.heading}</Header>
                            <TotalCases>{!obj.heading && <i className="fa fa-globe"></i>}{obj.totalCase}</TotalCases>
                            <NewCases><span>{obj.activeCases}</span>{obj.text}</NewCases>
                        </CovidData>
                    )
                })}
            </CovidBody>
            <LastUpdate>Data last updated: <span>June 14, 2021</span></LastUpdate>
        </Container>
    )
}

export default Dashboard
