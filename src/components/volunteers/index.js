import React from 'react'
import styled from 'styled-components'
import Volunteer from './Volunteer'
import VolunteerRegistration from './VolunteerRegistration';
import VolunteerTeams from './VolunteerTeams';

const Container = styled.div``;

function VolunteerHome() {
    return (
        <Container>
            <Volunteer />
            <VolunteerTeams />
            <VolunteerRegistration />
        </Container>
    )
}

export default VolunteerHome
