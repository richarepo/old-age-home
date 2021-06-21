import React from 'react'
import styled from 'styled-components'
import Moksha from './Moksha'
import MokshaWorkDone from './MokshaWorkDone'

const Container = styled.div`
    width: 100%;
`

function MokshaHome() {
    return (
        <Container>
            <Moksha />
            <MokshaWorkDone />
        </Container>
    )
}

export default MokshaHome
