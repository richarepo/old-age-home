import React, { useEffect } from 'react'
import styled from 'styled-components'
import VolunteerHome from '../../assets/images/volunteers/volunteer-home.jpg'

const Container = styled.div`
    height: 100vh;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
`;

function Volunteer() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <Container>
            <Image src={VolunteerHome} alt="Error-image" />
        </Container>
    )
}

export default Volunteer
