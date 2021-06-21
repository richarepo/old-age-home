import React, { useState } from 'react'
import styled from 'styled-components'
import { mediaCoverage } from '../../constant'
import SelectedNews from './SelectedNews'

const Container = styled.div`
    padding: 10px 60px 60px 60px;
    @media(max-width: 768px){
        padding: 20px;
    }
`
const MediaContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    background: whitesmoke;
    justify-content: center;
    @media(max-width: 500px){
        padding-top: 0px;
        background: none;
    }
`
const MediaBody = styled.div`
    width: 20%;
    text-align: center;
    margin: 20px 20px 60px 20px;
    @media(max-width: 768px){
        width: 30%;
    }
    @media(max-width: 500px){
        width: 100%;
        margin: 0px;
        margin-bottom: 40px;
        border-bottom: 1px solid rgb(224, 95, 21);
    }
    :hover {
        background: whitesmoke;
        box-shadow: 0px 2px 15px rgba(0,0,0,0.1);
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    max-height: 200px;
    :hover {
        opacity: 0.7;
    }
`
const Title = styled.div`
    padding: 10px 0px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    text-align: start;
    padding: 0px 10px;
    padding-top: 10px;
`
const Description = styled.div`
    text-align: start;
    padding: 10px;
    font-weight: 400;
    :hover {
        color: blue;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: blue;
    }
`
const Date = styled.div`
    text-align: start;
    font-size: 12px;
    color: blue;
    cursor: pointer;
    padding: 20px 10px;
`

function MediaCard() {
    const [selectedNews, setSelectedNews] = useState([])
    const [showPopUp, setShowPopUp] = useState(false)

    const selectLatestNews = id => {
        const selectedNewsId = mediaCoverage.filter(data => data.id === id)
        setShowPopUp(true)
        setSelectedNews(selectedNewsId)
    }

    const handleClose = () => setShowPopUp(false)

    return (
        <Container>
            <MediaContainer>
                {mediaCoverage.map((obj, index) => {
                    return (
                        <MediaBody key={index} onClick={() => selectLatestNews(obj.id)}>
                            <Image src={obj.img} alt="Error-image" />
                            <Title>{!!obj && !!obj.title && obj.title.length >= 15
                                ? obj.title.substring(0, 15) + " ..."
                                : obj.title}</Title>
                            <Description>{!!obj && !!obj.des && obj.des.length >= 50
                                ? obj.des.substring(0, 50) + " ..."
                                : obj.des}</Description>
                            <Date>{obj.date}</Date>
                        </MediaBody>
                    )
                })}
            </MediaContainer>
            {showPopUp && <SelectedNews selectedNews={selectedNews} handleClose={handleClose} />}
        </Container>
    )
}

export default MediaCard
