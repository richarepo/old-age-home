import React from 'react'
import styled from 'styled-components'
import PopUp from '../../common/PopUp'


const Container = styled.div``
const SelectedNewsBody = styled.div``
const Image = styled.img`
    width: 100%;
    max-height: 400px;
`
const SelectedNewsText = styled.div``
const Title = styled.div`
    font-size: 30px;
    font-weight: 800;
    padding: 20px 0px;
    @media(max-width: 500px){
        font-size: 20px;
    }
`
const Description = styled.div`
    font-size: 16px;
    line-height: 28px;
    font-weight: 300;
`
const Date = styled.div`
    color: blue;
    cursor: pointer;
    font-weight: 800;
    padding: 20px 0px;
`


function SelectedNews(props) {
    const { selectedNews, handleClose } = props
    return (
        <Container>
            <PopUp onClose={() => handleClose()} width={window.innerWidth < 468 ? 340 : 650}>
                {selectedNews.map((data, index) => {
                    return (
                        <SelectedNewsBody key={index}>
                            <Image src={data.img} alt="Error-image" />
                            <SelectedNewsText>
                                <Title>{data.title}</Title>
                                <Description>{data.des}</Description>
                                <Date>{data.date}</Date>
                            </SelectedNewsText>
                        </SelectedNewsBody>
                    )
                })}
            </PopUp>

        </Container >
    )
}

export default SelectedNews
