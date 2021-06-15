import React, { useEffect } from 'react'
import styled from 'styled-components';
import Form from '../../common/Form';
import ServiceHome from '../../assets/images/service.jpg'


const Container = styled.div`
    width: 88%;
    padding: 60px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 0px 20px 20px 20px;
        flex-direction: column;
    }
`;

const Heading = styled.h1`
    font-size: 36px;
`;

const HomeImage = styled.img`
    width: 100%;
    padding-bottom: 20px;
`;

const SubContainer = styled.div`
    width: 100%;
    max-width: 75%;
    ul {
        color: #333;
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const EnquiryForm = styled.div`
    max-width: 20%;
    @media (max-width: 768px) {
        max-width: 97%;
    }
    @media (max-width: 500px) {
        max-width: 90%;
    }
`;

const SubHeading = styled.h3`
    font-weight: 400;
    font-size: 20px;
    color: grey;
`;

const Text = styled.div`
    color: #333;
    font-size: 14px;
    line-height: 24px;
`;

const TextHeading = styled.div`
    font-weight: 600;
`;

const Service = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Container>
            <SubContainer>
                <Heading>Services</Heading>
                <HomeImage src={ServiceHome} />
                <TextHeading>Dining and Dietary Planning</TextHeading>
                <Text>Health is indeed wealth, especially as we age. Eating the right food at right time makes us healthier and stronger. At this age our elders require a healthy and well balanced diet in which all the nutrients are present in adequate quantity. Old Age Home takes care of all the dietary needs and requirements of the residents.</Text>
                <ul>
                    <li>Well equipped kitchen under the guidance and supervision of professional.</li>
                    <li>Weekly menus are set according to senior citizens and as per their liking.</li>
                    <li>Weekly consultation with the dietitian.</li>
                    <li>Food will be served as buffet in central dining hall or in the room of the resident if required.</li>
                    <li>Cooking is done in clean, hygienic condition.</li>
                    <li>Experienced and well trained chef.</li>
                </ul>
                <TextHeading>House Keeping Facilities</TextHeading>
                <Text>We have professionally trained, courteous housekeeping staff experienced in elderly care keeping, rather than just housekeeping. They are responsible for maintaining cleanliness of all living units as well as the common areas and to set the highest standard of hygiene and sanitation of the facility.</Text>
                <TextHeading>Living Unit Choices</TextHeading>
                <Text>Residents can choose according to their preferences from the following living units: <br />
                Day Care Facilities – Time: 10:00 am to 5:00 pm. The Golden Stick has planned a program of activities designed to promote well-being through social and health-related services. Adult day care centers operate during day time hours, in a safe, supportive, cheerful environment. Nutritious meals that accommodate special diets are included.
                </Text>
                <TextHeading>Short Term Period Stay (Daily Basis also available) – All facilities included</TextHeading>
                <ul>
                    <li>Comfortable Recliner Double Bed.</li>
                    <li>Sitting Couch.</li>
                    <li>Television with DTH Connection.</li>
                    <li>Split A/C & Room Heater.</li>
                    <li>Cup Board</li>
                    <li>Telephone Connection</li>
                    <li>Emergency Button.</li>
                    <li>Geyser.</li>
                    <li>Refrigerator.</li>
                    <li>AC Building with Power Backup.</li>
                    <li>Fully Furnished Accommodation.</li>
                    <li>Intercom Facility.</li>
                    <li>Lift Facility.</li>
                </ul>
                <TextHeading>Medical Facilities</TextHeading>
                <Text>Depending on the level of care required, our compassionate and caring staff provides around-the-clock personal care, assists with medical needs, health and exercise and also facilitates strong social connections. Our healthcare center is well-stocked with medicines and equipped to administer First Aid for most emergencies. Old Age Home Delhi provides the basic medical needs to the residents.</Text>
                <ul>
                    <li>24×7 Ambulance Facility</li>
                    <li>Nurses available</li>
                    <li>Doctors available</li>
                    <li>Emergency care equipment available</li>
                    <li>Physiotherapy & Personal Care Assistance</li>
                    <li>Wheel Chair Assistance.</li>
                    <li>Dietitian Consultation.</li>
                    <li>Tie up with near by multi Specialty hospital.</li>
                    <li>House Attendant</li>
                    <li>Nephropathy</li>
                </ul>
                <TextHeading>Optional Facilities</TextHeading>
                <Text>Keeping in mind that some senior citizens require Some unique and extra personal care, Old Age Home Delhi offers optional facilities at an extra cost :-</Text>
                <ul>
                    <li>Personal Attendant.</li>
                    <li>Guest Room.</li>
                    <li>ISD Calling.</li>
                    <li>Daily need Physiotherapy.</li>
                    <li>Toiletries Accessories .</li>
                    <li>Dr. on Call.</li>
                </ul>
                <TextHeading>Recreational Activities</TextHeading>
                <Text>Old Age Home Delhi encourages the residents to be active participants in their Environment, Nature Walk, Excursion and other activities. This will enable them to overcome their stress and loneliness. The most important part of caring for the elderly is to love them and keep them active. Here we provide great facilities of recreational activities to them like playing Indoor Games, connect themselves to the outer world with the help of Social Media, Picnics, Yoga Program to make them fit and healthy.</Text>
                <TextHeading>Some of the key facilities are :</TextHeading>
                <ul>
                    <li>Mini Theatre.</li>
                    <li>Indoor Games/Outdoor Games.</li>
                    <li>Yoga And Meditation.</li>
                    <li>Picnics.</li>
                    <li>Library.</li>
                    <li>Common Hall.</li>
                    <li>WiFi Available.</li>
                    <li>Bhajan And Spiritual Discourse/Devotional Music.</li>
                    <li>Festival Celebration.</li>
                    <li>Birthday Celebration.</li>
                    <li>Cultural Programmes.</li>
                    <li>Auditorium/Amphitheatre.</li>
                    <li>Video Conferencing/Skype/Email.</li>
                    <li>News Paper & Magazines.</li>
                    <li>Personal Transportation Service.</li>
                    <li>Gym.</li>
                    <li>Saloon.</li>
                    <li>Old Hindi Songs/Monthly Movies/ Outings.</li>
                    <li>Gardening.</li>
                </ul>
                <TextHeading>Security Facilities</TextHeading>
                <Text>Safety and security is an important responsibility of management, Old Age Home Delhi is well equipped with all safety and security features to provide safe and secure environment to the residents.</Text>
                <ul>
                    <li>Emergency Alarm System.</li>
                    <li>24×7 well trained security Guard.</li>
                    <li>CCTV Coverage of entire Building.</li>
                    <li>Fire Alarm System & Fire Extinguisher Available</li>
                    <li>Emergency Button in all Rooms and Washrooms.</li>
                    <li>Intercom Facility.</li>
                    <li>Railings available in whole building for support.</li>
                </ul>
            </SubContainer>
            <EnquiryForm>
                <SubHeading>Enquiry Form</SubHeading>
                <Form />
            </EnquiryForm>
        </Container>
    )
}

export default Service
