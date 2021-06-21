import React from 'react'
import styled from 'styled-components'
import { mokshaWorkDone } from '../../constant'

const Container = styled.div`
    padding: 60px;
    @media(max-width: 500px){
        padding: 20px;
    }
    .row-reverse {
        flex-direction: row-reverse;
    }
    
`
const NgoWorkDone = styled.div`
    background: #f7f7f7;
    @media(max-width: 768px){
        background: none;
    }
`
const NgoData = styled.div`
    display: flex;
    max-height: 500px;
    @media(max-width: 768px){
        padding: 0px;
        margin-bottom: 30px;
        background: #f7f7f7;
        flex-direction: column-reverse !important;
    }
`
const Text = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    padding: 100px;
    line-height: 30px;
    color: #333;
    font-weight: 500;
    font-size: 18px;
    width: 50%;
    @media(max-width: 768px){
        width: 87%;
        padding: 20px;
        font-size: 16px;
        font-weight: 400;
    }
`
const Image = styled.img`
    width: 50%;
    @media(max-width: 768px){
        width: 100%;
    }
    :hover {
        opacity: 0.9;
        cursor: pointer;
    }
`



function MokshaWorkDone() {
    return (
        <Container>
            <NgoWorkDone>
                {mokshaWorkDone.map((obj, index) => {
                    return (
                        <NgoData key={index} className={index % 2 !== 0 && 'row-reverse'}>
                            <Text>{obj.text}</Text>
                            <Image src={obj.img} alt="Error-image" />
                        </NgoData>
                    )
                })}
            </NgoWorkDone>
        </Container>
    )
}

export default MokshaWorkDone
