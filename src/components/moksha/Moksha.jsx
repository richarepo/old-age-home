import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import MokshaHome from '../../assets/images/moksha/moksha-hero.jpg'
import { mokshaData } from '../../constant';

const Container = styled.div``;

const Image = styled.img`
    width: 100%;
    height: 550px;
    @media(max-width: 768px){
        height: 350px;
    }
    @media(max-width: 500px){
        height: 250px;
    }
`;

const SubContainer = styled.div`
    padding: 60px;
    text-align: center;
    @media(max-width: 768px){
        padding: 20px;
    }
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: #333;
    padding-bottom: 30px;
    @media(max-width: 768px){
        font-size: 25px;
    }
`;

const Text = styled.div`
    line-height: 22px;
    font-size: 16px;
    color: #333;
    font-weight: 400;
`;


const SeniroList = styled.div`
    display: flex;
    align-items: center;
    background: ${props => props.check ? 'rgb(224, 95, 21)' : "#fff"};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    @media(max-width:768px){
        border-radius: 4px;
    }
    .selected-list {
        :hover {
            color: ${props => props.check ? '#fff' : "rgb(224, 95, 21)"};
        }
    }
`;

const SeniroTitle = styled.div`
    padding: 20px 0px;
    font-size: 16px;
    padding-left: 20px;
    color: #333;
    font-weight: 500;
    :hover {
        cursor: pointer;
        color: rgb(224, 95, 21);
    }
`;


const SeniorList = styled.div`
    width: 25%;
    border-right: 1px solid rgb(224, 95, 21);
    @media(max-width: 768px) {
        width: 100%;
        border-right: unset;
        border-bottom: 1px solid rgb(224, 95, 21);
        padding-bottom: 35px;
    }
`;

const SeniorData = styled.div`
    width: 75%;
    @media(max-width: 768px) {
        width: 100%;
    }
`;

const SeniroContent = styled.div`
    display: flex;
    margin-top: 45px;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const SelectedContainer = styled.div`
    padding: 0px 60px;
    @media(max-width: 768px) {
        padding: 10px;
        padding-bottom: 50px;
    }
`;

const SelectedTitle = styled.div`
    text-align: center;
    font-size: 30px;
    padding-bottom: 30px;
    font-weight: 900;
    @media(max-width: 768px){
        font-size: 25px;
    }
`;

const ReadMore = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 40px;
`;

const ShowText = styled.div`
    width: 150px;
    display: flex;
    height: 40px;
    font-weight: 500;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    color: rgb(224, 95, 21);
    border: 1px solid rgb(224, 95, 21);
    text-transform: uppercase;
    :hover {
        color: #fff;
        cursor: pointer;
        background: rgb(224, 95, 21);
    }
`;

const SeniroText = styled.div`
    color: #333;
    padding-top: 20px;
    line-height: 25px;
    font-weight: 400;
    @media (max-width: 500px){
        font-size: 14px;
    }
`;

const SeniroImage = styled.img`
    height: 170px;
    width: 400px;
    border-radius: 4px;
    :hover {
        opacity: 0.9;
        cursor: pointer;
    }
    @media (max-width: 768px){
        width: 50%;
    }
    @media (max-width: 500px){
        width: 100%;
    }
`;

const HappySeniro = styled.div`
    padding: 60px;
    background: #f7f7f7;
    margin-top: 60px;
    @media(max-width: 768px){
        margin-top: 40px;
        padding: 20px 20px 50px 20px;
    }
`;
const Heading = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    padding-bottom: 50px;
`;

const HappyWrapper = styled.div`
    display: flex;
    text-align: center;
    @media(max-width: 768px){
        flex-direction: column;
    }
`;
const Reviews = styled.div`
    width: 50%;
    border-right: 1px solid;
    @media(max-width: 768px){
        border-right: unset;
        width: 100%;
        padding-bottom: 45px;
        border-bottom: 1px solid;
    
    }
`;
const Number = styled.div`
    font-size: 4rem;
    font-weight: 900;
    color: rgb(224, 95, 21);
    @media(max-width: 768px){
        font-size: 3rem;
    }
    @media(max-width: 500px){
        font-size: 2rem;
    }
`;
const SubTitle = styled.div`
    color: #333;
    font-size: 20px;
    font-weight: 500;
    @media(max-width: 500px){
        font-size: 16px;
        padding-top: 10px;
    }
`;
const SeniorLiving = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    @media(max-width: 768px){
        width: 100%;
        padding-top: 20px;
    }
`;

function Moksha() {
    const [selectSeniro, setSelectSeniro] = useState([])
    const [readMore, setReadMore] = useState(false)
    const [selecId, setSelecId] = useState(1)

    useEffect(() => {
        const selectID = 1
        const tempSeniro = mokshaData.filter(obj => obj.id === selectID)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        setSelectSeniro(tempSeniro)
    }, [])


    const selectedSeniro = id => {
        const tempSeniro = mokshaData.filter(obj => obj.id === id)
        setSelectSeniro(tempSeniro)
        setSelecId(id)
    }

    const readMoreOption = () => setReadMore(!readMore)

    return (
        <Container>
            <Image src={MokshaHome} alt="Error-image" />
            <HappySeniro>
                <Heading>Numbers Don’t Lie</Heading>
                <HappyWrapper>
                    <Reviews>
                        <Number>1800+</Number>
                        <SubTitle>Happy seniors Celebrating life</SubTitle>
                    </Reviews>
                    <SeniorLiving>
                        <Number>India’s No. 1</Number>
                        <SubTitle>Senior Living, 4 times in a row</SubTitle>
                    </SeniorLiving>
                </HappyWrapper>
            </HappySeniro>
            <SubContainer>
                <Title>WHY CHOOSE INDIA’S NO.1 SENIOR LIVING</Title>
                <Text>Golden years are a very special time. They have the aroma of nostalgia, bittersweet memories, pinch of regrets and endless stories. Our home should be our haven where we can revisit old tales while bantering with our buddies. Pld Age Home senior living goes above and beyond that. You can focus on being a child again and we'll take care of the rest. Your golden years will truly shine and glow with the fulfilment of your passions.</Text>
                <SeniroContent>
                    <SeniorList>
                        {mokshaData.map((obj, index) => {
                            return (
                                <SeniroList key={index} check={selecId === obj.id} onClick={() => selectedSeniro(obj.id)}>
                                    <SeniroTitle className="selected-list">{obj.title}</SeniroTitle>
                                </SeniroList>
                            )
                        })}
                    </SeniorList>
                    <SeniorData>
                        {selectSeniro.map((data, id) => {
                            return (
                                <SelectedContainer key={id}>
                                    <SelectedTitle>{data.title}</SelectedTitle>
                                    <SeniroImage src={data.img} alt="Error-image" />
                                    <SeniroText>{data.heading}</SeniroText>
                                    {!!readMore &&
                                        <Fragment>
                                            <SeniroText>{!!data.text1 && data.text1}</SeniroText>
                                            <SeniroText>{!!data.text2 && data.text2}</SeniroText>
                                            <SeniroText>{!!data.text3 && data.text3}</SeniroText>
                                        </Fragment>}
                                    <ReadMore onClick={() => readMoreOption()}>
                                        <ShowText>{readMore ? "Read Less" : "Read More"}</ShowText>
                                    </ReadMore>
                                </SelectedContainer>
                            )
                        })}
                    </SeniorData>
                </SeniroContent>
            </SubContainer>
        </Container>
    )
}

export default Moksha
