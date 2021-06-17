import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 60px;
    width: 90%;
    p{
        margin-bottom: 15px;
    }
    span {
        color: red;
        font-size: 12px;
    }
    textarea{
        width: 96%;
        outline: none;
        padding-top: 10px;
        padding-left: 20px;
        :focus{
            border: 1px solid #73c102;
        }
        @media(max-width: 500px) {
            width: 88%;
        }
    }

    @media(max-width: 500px) {
        padding: 20px;
    }
`;

const Title = styled.div`
    font-size: 30px;
    span {
        color: #73c102;
        font-size: 30px;
        font-weight: bold;
    }
`;

const Text = styled.div`
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0px;
`;

const InputField = styled.div`
    width: 100%;
    padding: 15px 0px;
`;

const Heading = styled.div`
    font-size: 24px;
    padding-top: 40px;
`;

const Input = styled.input`
    width: 90%;
    height: 35px;
    outline: none;
    padding-left: 20px;
    margin-top: 5px;
    :focus{
        border: 1px solid #73c102;
    }
`;

const FieldWrapper = styled.div`
    width: 100%;
`;

const SelectOption = styled.div``;

const Check = styled.div`
    padding: 10px 0px;
    input, label {
        cursor: pointer;
    }
`;

const RegisterButton = styled.div``;
const Button = styled.input`
    height: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    margin-top: 20px;
    padding: 0px 15px;
    background: #73c102;
    :hover{
        opacity: 0.8;
    }
`;

function VolunteerRegistration() {
    return (
        <Container>
            <Title>MAKE A <span>DIFFERENCE</span></Title>
            <Text>Pld age Home Foundation always welcome the support of Volunteer for our Projects. We also offers Virtual Volunteership. Please fill the form and register yourself as a volunteer. We will contact you whenever we need you. The Certificate of Volunteership shall be provided only if you complete the task assigned to you.</Text>
            <Heading>Volunteer Registration</Heading>
            <form onSubmit={(e) => console.log("RRRRRRRRRRRRRR ", e)}>
                <FieldWrapper>
                    <InputField>
                        <div>Full Name <span>(required)</span></div>
                        <Input type="text" />
                    </InputField>
                    <InputField>
                        <div>Contact Number</div>
                        <Input type="text" />
                    </InputField>
                </FieldWrapper>
                <FieldWrapper>
                    <InputField>
                        <div>Email Address <span>(required)</span></div>
                        <Input type="text" />
                    </InputField>
                    <InputField>
                        <div>Occupation</div>
                        <Input type="text" />
                    </InputField>
                </FieldWrapper>
                <p>Choose the Work You are Interested in : <span>(required)</span></p>
                <SelectOption>
                    <Check>
                        <input type="checkbox" id="social-media" value="social-media" name="social-media" />
                        <label htmlFor="social-media"> Social Media</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="marketing" value="marketing" name="marketing" />
                        <label htmlFor="marketing"> Marketing / Branding</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="content-writing" value="content-writing" name="content-writing" />
                        <label htmlFor="content-writing"> Content Writing / Blogging / Copywriting</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="fundraising" value="fundraising" name="fundraising" />
                        <label htmlFor="fundraising"> Fundraising</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="presentation" value="presentation" name="presentation" />
                        <label htmlFor="presentation"> Presentation</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="photography" value="photography" name="photography" />
                        <label htmlFor="photography"> Photography</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="videography" value="videography" name="videography" />
                        <label htmlFor="videography"> Videography</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="internet" value="internet" name="internet" />
                        <label htmlFor="internet"> Internet / Web</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="teaching" value="teaching" name="teaching" />
                        <label htmlFor="teaching"> Teaching / Training / Coaching</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="design" value="design" name="design" />
                        <label htmlFor="design"> Illustration / Design / Drawing</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="multimedia" value="multimedia" name="multimedia" />
                        <label htmlFor="multimedia"> Multimedia / Animation</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="planning" value="planning" name="planning" />
                        <label htmlFor="planning"> Event Planning/Management</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="social-vol" value="social-vol" name="social-vol" />
                        <label htmlFor="social-vol"> Social Volunteering</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="management" value="management" name="management" />
                        <label htmlFor="management"> Community Management/Engagement</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="data-entry" value="data-entry" name="data-entry" />
                        <label htmlFor="data-entry"> Data Entry</label>
                    </Check>
                    <Check>
                        <input type="checkbox" id="caregivers" value="caregivers" name="caregivers" />
                        <label htmlFor="caregivers">Caregivers</label>
                    </Check>
                </SelectOption>
                <p>Special Skills which you have like Adobe Photoshop, Painting, Web Designing</p>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <RegisterButton>
                    <Button type="submit" value="Register Me" />
                </RegisterButton>
            </form>
        </Container>
    )
}

export default VolunteerRegistration
