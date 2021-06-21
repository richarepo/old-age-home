import React from 'react'
import styled from 'styled-components'
import MediaCard from './MediaCard'
import MediaCoverage from './MediaCoverage'

const Container = styled.div``

function MediaHome() {
    return (
        <Container>
            <MediaCoverage />
            <MediaCard />
        </Container>
    )
}

export default MediaHome
