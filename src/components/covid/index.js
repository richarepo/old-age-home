import React, { useEffect } from 'react'
import styled from 'styled-components';
import CardCarousel from '../../common/CardCarousel';
import { cardCarousel } from '../../constant';
import CovexSection from './CovexSection';
import Covid from './Covid';
import Dashboard from './Dashboard';
import OldResponse from './OldResponse';

const Container = styled.div`
    li {
        color: #333;
        font-size: 14px;
        line-height: 1.62857143;
    }
`;

const CardCarouselTitle = styled.div`
    color: #333;
    font-size: 26px;
    font-weight: 600;
    padding-left: 35px;
    @media(max-width: 500px){
        padding-left: 15px;        
    }
`;

function CovidHome() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <Container>
            <Covid />
            <Dashboard />
            <OldResponse />
            <CovexSection />
            <CardCarouselTitle>COVID-19 EXPLORED</CardCarouselTitle>
            <CardCarousel cardCarousel={cardCarousel} />
        </Container>
    )
}

export default CovidHome
