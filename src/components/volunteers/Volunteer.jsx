import React, { useEffect } from 'react'
import styled from 'styled-components'
import VolunteerHome from '../../assets/images/volunteers/volunteer-home.jpg'
import VolunteerHighlight from '../../assets/images/volunteers/volunteer-highlight.jpg'
import { volenteerHighlights } from '../../constant';

const Container = styled.div``;

const Image = styled.img`
    width: 100%;
    max-height: 500px;
    @media(max-width: 500px){
        height: 40vh;
    }
`;

const VolunteerBody = styled.div`
    padding: 60px;
    @media(max-width: 500px){
        padding: 20px;
    }
`;

const Title = styled.div`
    font-size: 30px;
    padding-bottom: 20px;
`;

const Text = styled.div`
    line-height: 24px;
    font-size: 16px;
    color: #333;
    padding-bottom: 20px;
    padding-left: ${props => props.padding && "10px"};
    padding-right: ${props => props.padding && "10px"};
`;

const Heading = styled.div`
    font-size: 32px;
    font-weight: 500;
    color: #29293a;
    padding-bottom: 22px;
`;

const HighlightBody = styled.div`
    display: flex;
    padding: 60px;
    background-color: #f6f6f6;
    @media(max-width: 768px) {
        flex-direction: column;
    }
    @media(max-width: 768px) {
        padding: 20px;
    }
`;

const Data = styled.div`
    display: flex;
    i {
        color: #73c102;
    }
`;

const HighlightPoint = styled.div`
    width: 50%;
    @media(max-width: 768px) {
        width: 98%;
    }
`;

const HighlightImage = styled.img`
    width: 50%;
    border-radius: 40px;
    @media(max-width: 768px) {
        width: 98%;
        margin-top: 30px;
        border-radius: 20px;
    }
`;

function Volunteer() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <Container>
            <Image src={VolunteerHome} alt="Error-image" />
            <VolunteerBody>
                <Title>Volunteer Work Opportunities With NGO Project</Title>
                <Text>Through our projects, you'll find the best volunteer work opportunities directly with (NGO) volunteering organization. We invite individuals, couples, students, groups and families to come and experience their travel while making a difference in the society.</Text>
                <Text>The programs will have you supporting childcare and education. You will have opportunity to assist in Orphanage, School for Street Children, Teach English in Primary Schools and other small communities to improve childcare and education.</Text>
                <Text>Our organization support the unprivileged through volunteer programs to provide them with skills for a new life and a good future to maximize your efforts. Explore volunteer work opportunities and travel combine volunteer programs and select the one that you want to support.</Text>
            </VolunteerBody>
            <HighlightBody>
                <HighlightPoint>
                    <Heading>Highlights</Heading>
                    {volenteerHighlights.map((data, id) => {
                        return (
                            <Data key={id}>
                                <div><i className="fa fa-check"></i></div>
                                <Text padding={true}>{data.text}</Text>
                            </Data>
                        )
                    })}
                </HighlightPoint>
                <HighlightImage src={VolunteerHighlight} alt="Error-image" />
            </HighlightBody>
        </Container>
    )
}

export default Volunteer
