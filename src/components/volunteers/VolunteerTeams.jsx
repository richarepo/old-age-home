import React from 'react'
import styled from 'styled-components'
import { volenteerTeams } from '../../constant';


const Container = styled.div`
    padding-bottom: 60px;
`;

const VolunteerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    justify-content: center;
`;

const Title  = styled.div`
    padding-top: 60px;
    font-size: 30px;
    padding-left: 20px;
`;

const VolunteerData = styled.div`
    width: 25%;
    display: flex;
    margin: 20px;
    padding: 20px;
    align-items: center;
    flex-direction: column;
    border: 1px solid aliceblue;
    @media(max-width:500px){
        width: 75%;
    }
    :hover {
        .read-more {
            color: #fff;
            background: greenyellow;
        }
        opacity: 0.8;
        cursor: pointer;
        border: 1px solid lawngreen;
    }
`;

const Image = styled.img`
    max-height: 200px;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 500;
    padding: 20px 0px;
`;

const Text = styled.div`
    color: #333;
    font-size: 14px;
`;

const ReadMore = styled.button`
    width: 50%;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 20px;
`;

function VolunteerTeams() {
    return (
        <Container>
            <Title>Volunteer Teams</Title>
            <VolunteerCard>
                {volenteerTeams.map((obj, index) => {
                    return (
                        <VolunteerData key={index}>
                            <Image src={obj.img} alt="Error-image" />
                            <Name>{obj.name}</Name>
                            <Text>{obj.text}</Text>
                            <ReadMore className="read-more">Read More</ReadMore>
                        </VolunteerData>
                    )
                })}
            </VolunteerCard>
        </Container>
    )
}

export default VolunteerTeams
