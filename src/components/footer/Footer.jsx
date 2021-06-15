import React, { Fragment } from 'react'
import { withRouter } from 'react-router';
import styled from 'styled-components'
import { footerList } from '../../constant'

const Container = styled.div`
    color: #fff;
    background-color: #166999;
    border-top: 15px solid #73c102;
`;

const FooterBody = styled.div`
    display: flex;
    padding: 50px 60px;
    @media(max-width: 768px){
        flex-direction: column;
        padding: 10px 20px;
    }
`;

const Name = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
    @media(max-width: 768px){
        margin-top: 30px;
    }
    
`;

const FooterData = styled.div`
    width: 25%;
    @media(max-width: 768px){
        width: 100%;
    }
`;

const FooterImage = styled.img`
    width: 90%;
    @media(max-width: 768px){
        width: unset;
    }
    @media(max-width: 500px){
        width: 90%;
    }
`;

const FooterItemList = styled.div`
    a {
      color: #ccc;
      text-decoration: none;
      :hover {
          color: white;
          text-decoration: underline;
      }
    }
    padding: 5px 15px;
`;

const FooterText = styled.div`
    background-color: #1e73be;
    font-size: 14px;
    padding: 14px 10px 14px 70px;
    @media(max-width: 768px){
        padding: 14px 10px 14px 20px;
    }
    @media(max-width: 500px){
        font-size: 12px;
    }
`;
const SocialIcon = styled.div`
  min-width: 150px;
  display: flex;
  border-top: 1px solid;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    min-width: 0px;
    flex-wrap: wrap;
    max-height: 380px;
  }
  i {
      :hover {
          opacity: 0.8;
      }
  }
`;

const FaceBookIcon = styled.div`
  padding: 0px 5px;
`;

const TwitterIcon = styled.div`
    padding: 0px 5px;
`;

const Footer = props => {
    const { history } = props
    return (
        <Container>
            <FooterBody>
                {footerList.map((obj, index) => {
                    return (
                        <FooterData key={index}>
                            <Name>{obj.name}</Name>
                            {!!obj.img && <FooterImage src={obj.img} />}
                            {obj.itemList.map((data, id) => {
                                return (
                                    <Fragment key={id}>
                                        {obj.path ?
                                            <FooterItemList anchor={obj.path && true} onClick={() => history.push(obj.path)}><a href={obj.path}>{data}</a></FooterItemList> :
                                            <FooterItemList>{data}</FooterItemList>
                                        }
                                    </Fragment>
                                )
                            })}
                        </FooterData>
                    )
                })}
            </FooterBody>
            <SocialIcon>
                <FaceBookIcon>
                    <a href="https://www.facebook.com/profile.php?id=100034889017057" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square fa-3x"
                            aria-hidden="true"
                            style={{
                                cursor: "pointer",
                                color: "antiquewhite",
                                marginRight: '10px'
                            }}
                        ></i>
                    </a>
                </FaceBookIcon>
                <TwitterIcon>
                    <a href="https://www.instagram.com/nezam_404/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram fa-3x"
                            aria-hidden="true"
                            style={{
                                cursor: "pointer",
                                color: "antiquewhite",
                                marginRight: '10px'
                            }}
                        ></i>
                    </a>
                </TwitterIcon>
            </SocialIcon>
            <FooterText>Copyright © MKS Old Age Home. All rights reserved. Designing by Digital247</FooterText>
        </Container>
    )
}

export default withRouter(Footer)
