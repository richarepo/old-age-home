import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Donation1 from '../../assets/images/donation/donation1.jpg'
import Donation2 from '../../assets/images/donation/donation2.svg'
import Donation3 from '../../assets/images/donation/donation3.svg'
import DonationHome from '../../assets/images/donation/donation5.jpg'
import BgDonation from '../../assets/images/donation/donation-bg.jpg'
import DonationPopup from './DonationPopup'


const Container = styled.div`
    width: 100%;
    margin-bottom: 50px;
`;

const SubContainer = styled.div`
    width: 90%;
    padding: 60px;
    display: flex;
    @media(max-width: 500px){
        padding: 20px;
        flex-direction: column;
    }
`;

const HomeImage = styled.img`
    width: 100%;
    height: 500px;
    padding-bottom: 20px;
    @media(max-width: 500px){
        height: 300px;
    }
`;

const Heading = styled.div`
    font-size: 30px;
    padding-bottom: 20px;
    font-weight: 900;
    @media(max-width: 500px){
        font-size: 24px;
    }
`;

const Paragraph = styled.div`
    font-weight: 300;
`;

const Image = styled.img`
    width: 100%;
    margin-top: 20px;
`;

const Text = styled.div`
    color: #333;
    font-weight: 400;
    line-height: ${props => !props.padding ? '20px' : '30px'};
    padding: ${props => !props.padding ? '10px 10px 10px 0px' : '0px'};
`;

const DonationText = styled.div`
    width: 50%;
    padding-right: 40px;
    @media(max-width: 500px){
        width: 100%;
        padding-right: 10px;
    }
`;

const ProvideWrapper = styled.div`
    width: 50%;
    @media(max-width: 500px){
        width: 100%;
        margin-top: 30px;
        padding-right: 10px;
    }
`;

const WhatWeProvide = styled.div`
    padding: 30px;
    background: beige;
    display: flex;
    margin-bottom: 30px;
    border-radius: 4px;
    @media(max-width:500px){
        flex-direction: column;
        align-items: center;
    }
    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

const TheBackground = styled.div`
    padding: 30px;
    display: flex;
    background: beige;
    border-radius: 4px;
    @media(max-width:500px){
        flex-direction: column;
        align-items: center;
    }
    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

const Title = styled.div`
    font-size: 24px;
    padding-bottom: 20px;
`;

const ImageBck = styled.img`
    width: 40px;
    padding-right: 20px;
    @media(max-width: 500px){
        padding-right: 0px;
        margin-bottom: 20px;        
    }
`;

const DonationSection = styled.div`
    color: #fff;
    padding: 60px;
    line-height: 30px;
    background-size: cover !important;
    background-image: url(${BgDonation});
    background-position: center !important;
    background-repeat: no-repeat !important;
    @media(max-width: 500px){
        padding: 40px 20px;
    }
`;

const DonateNow = styled.div`
    text-align: center;
    margin-top: 60px;
`;

const PayNow = styled.button`
    height: 45px;
    width: 150px;
    outline: none;
    border: none;
    border-radius: 4px;
    font-weight: 800;
    color: rgb(224, 95, 21);
    font-size: 16px;
    :hover{
        cursor: pointer;
        background: rgb(224, 95, 21);
        color: #fff !important;
    }
`;

const Donation = () => {

    const [donateNow, setDonateNow] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    const handleClose = () => setDonateNow(false)

    return (
        <Container>
            <HomeImage src={DonationHome} alt="Error-image" />
            <SubContainer>
                <DonationText>
                    <Heading>Giving a Life of Dignity to Elders</Heading>
                    <Text>SERUDS launched Happy Old Age Home in January 2012 for abandoned & destitute women in Kurnool District of Andhra Pradesh,</Text>
                    <Text>Old Age Home is fully free and funded solely through donations.</Text>
                    <Text>Home shelters 30 grannies at present.</Text>
                    <Text>Since 2012, 90 elders have called it their home during the last stage of their lives.</Text>
                    <Text>Address : SERUDS Old Age Home</Text>
                    <Text>Plot No.267, Maruthi Harivillu, Pasupala Road,</Text>
                    <Text>Opp.Rayalaseema University, Near G.Pulla Reddy Engineering College, Kurnool – 518007.</Text>
                    <Image src={Donation1} />
                </DonationText>
                <ProvideWrapper>
                    <WhatWeProvide>
                        <ImageBck src={Donation3} alt="" />
                        <div>
                            <Title>What we provide</Title>
                            <Text padding={true}>The Old Age Home has two bedrooms, a big hall, hygienic kitchen and 3 toilets, and open space for recreation.</Text>
                            <Text padding={true}>They are provided</Text>
                            <Text padding={true}>- Nutritious meals 3 times daily</Text>
                            <Text padding={true}>- Clothes, blankets, toiletries and other personal necessities</Text>
                            <Text padding={true}>- Medical checkup as needed</Text>
                        </div>
                    </WhatWeProvide>
                    <TheBackground>
                        <ImageBck src={Donation2} alt="Error-image" />
                        <div>
                            <Title>The background</Title>
                            <Text padding={true}>These women have escaped a life of poverty and hunger. Most are widows or abandoned by their children or husbands. Some have escaped exploitation under the Basavani tradition. They are ill and unable to work to provide for a decent living.</Text>
                        </div>
                    </TheBackground>
                </ProvideWrapper>
            </SubContainer>
            <DonationSection>
                <Heading>Support the Elders in Old Age Home, Hisar</Heading>
                <Paragraph>Happy Old Age Home residents have been identified from different village of Kurnool and Mahaboob Nagar Districts, Hyderabad of Andhra Pradesh, India.</Paragraph>
                <Paragraph>At SERUDS Home for the Aged, we have adopted good practices in order to provide a healthy, productive and participatory life to the elderly women residents.</Paragraph>
                <Paragraph>There is space for pooja for daily prayers and all major festivals are celebrated. The women are motivated to keep themselves busy with activities like reading, regular walks, singing bhajans, and more.</Paragraph>
                <DonateNow>
                    <PayNow onClick={() => setDonateNow(true)}>Donate Now</PayNow>
                </DonateNow>
            </DonationSection>

            {donateNow && <DonationPopup handleClose={handleClose} />}
        </Container>
    )
}

export default Donation

