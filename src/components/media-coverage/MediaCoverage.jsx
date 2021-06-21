import React from 'react'
import styled from 'styled-components'
import MediaHome from '../../assets/images/media-coverage/home.jpg'
import MediaHome2 from '../../assets/images/media-coverage/home2.jpg'

const Container = styled.div``
const HomeImage = styled.img`
    width: 100%;
    height: 450px;
    @media(max-width: 500px){
        height: 200px;
    }
`
const BodySection = styled.div`
    display: flex;
    padding: 60px;
    max-height: 400px;
    @media(max-width: 768px){
        padding: 30px;
    }
    @media(max-width: 500px){
        padding: 20px;
        flex-direction: column;
    }
`
const Text = styled.div`
    overflow: auto;
    cursor: pointer;
    padding: 10px;
    line-height: 20px;
    padding-bottom: 30px;
    font-weight: 400;
    line-height: 26px;
`

const TextBody = styled.div`
    overflow: auto;
    color: #333;
    cursor: pointer;
    padding: 10px;
    background: whitesmoke;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 800;
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
`

const BodyImage = styled.img`
    width: 50%;
    @media(max-width: 500px){
        width: 100%;
        margin-top: 20px;
    }
    :hover {
        opacity: 0.8;
    }
`

function MediaCoverage() {
    return (
        <Container>
            <HomeImage src={MediaHome} alt="Error-image" />
            <BodySection>
                <TextBody>
                    <Title>Lorem ipsum dolor.</Title>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus consectetur architecto fugiat minus? Esse, cum. Adipisci reiciendis natus ducimus, placeat libero molestiae ratione maiores modi officiis. Laudantium aperiam assumenda fugiat corrupti, ratione soluta ipsa! Aspernatur illum alias culpa quae. Repellat voluptatibus fugit reprehenderit velit molestiae iusto dolor quo quisquam. Dolorem ab cumque, placeat quibusdam perspiciatis voluptatibus expedita aliquid deleniti, alias excepturi molestias amet fugit voluptates dignissimos cum eius iusto eligendi nisi nemo delectus fuga est atque. Molestias expedita quibusdam repellendus eum, sunt hic dignissimos vero corrupti temporibus laudantium cupiditate a recusandae optio velit, at voluptatem, quidem nulla earum repellat tenetur assumenda! Illum sint ullam laudantium possimus doloribus, perferendis atque! Beatae suscipit fuga, aperiam tempore, mollitia eos et dolore debitis deleniti possimus fugit quasi corporis iusto. Exercitationem libero ullam vitae iure illo accusamus nulla omnis vel optio necessitatibus saepe, nobis at alias quae dolorum, magnam assumenda. Illum eum quae consequuntur optio iure nulla rem sunt deleniti facere nemo alias, nihil qui repellendus pariatur voluptas doloribus excepturi mollitia officiis suscipit cum ducimus. Voluptas enim veniam hic repellendus vel, magni ratione rerum ducimus vero maxime nulla, suscipit cum iusto quia porro commodi. Earum expedita fugiat quos dolorum iste dolorem porro, quasi animi illum mollitia nihil, eum dolore amet tenetur harum quisquam neque vel cum aliquid, deleniti a id perferendis corrupti necessitatibus? Quasi, amet sunt velit rerum consequuntur eos voluptatum quis voluptas qui debitis aperiam! Eveniet maxime obcaecati cumque ullam, ipsum fuga sunt consequatur rerum unde, deleniti rem temporibus, repellendus quisquam molestiae nemo adipisci dolorum. Blanditiis soluta ut illum saepe repellat! Tenetur veritatis aliquid laborum fugit animi impedit soluta, eos harum dicta autem expedita nemo ipsum cumque perferendis maiores veniam! Eos ea doloribus dolorem ipsa. Nesciunt, quia fuga ullam laudantium at eum iure veniam delectus, distinctio, sint explicabo mollitia atque sapiente repudiandae harum praesentium. Magnam voluptas eaque dolorem fugiat nobis nam unde deleniti dignissimos, quis qui itaque rem! Perferendis temporibus explicabo ipsam iste, rerum nihil quos cum dolorem quibusdam maxime praesentium aliquam officiis a doloremque, debitis laboriosam sit consequuntur earum quia, ipsa magni architecto hic nesciunt placeat. Voluptatum sequi laboriosam, inventore doloribus nemo veniam repudiandae at, pariatur culpa non facilis suscipit nesciunt, debitis voluptates! Ipsum voluptas autem quod, sit ab obcaecati asperiores ad dolorem natus perferendis doloremque, dolore voluptate eaque earum alias deleniti, cumque voluptatum vitae aspernatur. Nostrum deleniti minima delectus ducimus soluta nisi sed amet sequi. Tenetur, iure provident? Expedita laborum sunt, amet, ut facere tenetur quis harum accusantium sint quia ullam. Non corporis sed numquam beatae. Omnis numquam possimus ullam accusamus deserunt, quisquam cumque et illo! Quia, eos quibusdam assumenda et porro vel corrupti illo tenetur explicabo? Maxime ducimus provident expedita a quibusdam modi, placeat omnis facere, et eveniet aspernatur. Incidunt nostrum architecto harum facilis natus dolores soluta! Eveniet est pariatur dolorem dolores commodi natus esse ex eligendi, odio similique. Minus eum repudiandae facere nihil quam, ad in id rem repellat quo consequatur. Neque optio eveniet cum tempore error eum illo doloremque aperiam sit ab vitae, inventore cumque voluptas? Accusamus, vel doloribus.</Text>
                </TextBody>
                <BodyImage src={MediaHome2} alt="Error-image" />
            </BodySection>
        </Container>
    )
}

export default MediaCoverage
