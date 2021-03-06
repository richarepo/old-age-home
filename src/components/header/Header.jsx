import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router';
import styled from 'styled-components'
import HaderImage from '../../assets/images/cropped-logo1-1.png'
import WhatsApp from '../../assets/images/whatsapp-logo.svg'
import { disableBackgroundScroll } from '../../common/helper';
import { headerList } from '../../constant'

const Container = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 999;
    .dropdown {
        @media (max-width: 768px){
            color: #fff !important;
            display: ${props => props.openMenu ? 'block' : 'none'} !important;
            width: 95%;
            background: #0c1923 !important;
            border-bottom: 1px solid darkblue !important;
            padding: 14px !important;
        }
    }
    box-shadow: 1px 1px 4px #ddd;
    .dropbtn {
        font-size: 16px;
        border: none;
      }
      
    .dropdown {
        padding: 8px 15px;
        color: #333;
        background: #fff;
        position: relative;
        display: inline-block;
        :hover {
            cursor: pointer;
            background: rgb(224, 95, 21);;
            color: #fff;
        }
    }
      
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
      
    .dropdown-content .anchor {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
      
    .dropdown-content .anchor:hover {
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
        background-color: rgb(224, 95, 21);;
    }
    
    .dropdown:hover .dropdown-content {
        left: 0px;
        top: 35px;
        display: block;
        @media(max-width: 768px){
            width: 100%;
            top: 48px;
            height: 160px;
            overflow-x: scroll;
        }
        @media(max-width: 500px){
            width: 100%;
        }
    }
      
`;

const HeaderContainer = styled.div`
    color: #fff;
    display: flex;
    font-size: 13px;
    padding: 14px 60px;
    background: #3a3c41;
    border-top: 4px solid rgb(224, 95, 21);
    justify-content: space-between;
    a {
        color: #fff;
        text-decoration: none;
        :hover {
            color: rgb(224, 95, 21);;
            text-decoration: underline;
        }
    }
    @media(max-width: 500px) {
        align-items: center;
        padding: 10px 20px;
    }
`;

const ContactNumber = styled.div`
    padding-right: 20px;
`;

const EmailAddress = styled.div``;

const SubHeaderContainer = styled.div`
    display: flex;
    background: #fff;
    padding: 18px 60px;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 500px){
        padding: 10px 20px;
    }
`;

const HeaderImage = styled.img`
    cursor: pointer;
    @media(max-width: 768px){
        padding-bottom: 20px;
    }
`;

const HeaderList = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;
        left: 0;
        top: 100%;
        width: 100%;
        position: absolute;
        background: #0c1923;
    }
    @media(max-width: 500px){
        top: 100%;
    }
`;

const ContactDiv = styled.div`
    display: flex;
    @media(max-width: 500px){
        flex-direction: column;
        line-height: 20px;
    }
`;

const WhatsAppIcon = styled.div`
    a {
        padding: 1px;
        color: #333;
        display: flex;
        max-width: 15px;
        background: #fff;
        :hover {
            color: #fff;
            cursor: pointer;
            background: #59BA47;
        }
    }
`;

const HeaderData = styled.div`
    padding: 8px 15px;
    color: ${props => props.checkIndex ? '#fff' : '#333'};
    background: ${props => props.checkIndex ? 'rgb(224, 95, 21);' : '#fff'};
    :hover {
        color: #fff;
        cursor: pointer !important;
        background: rgb(224, 95, 21);;
    }
    @media (max-width: 768px){
        color: #fff;
        display: ${props => props.openMenu ? 'block' : 'none'};
        width: 95%;
        background: unset;
        border-bottom: 1px solid darkblue;
        padding: 14px;
    }
`;

const SearchIcon = styled.div`
    border-radius: 50px;
    background: #f4f4f4;
    border: 1px solid #ddd;
    color: #babec4;
    padding: 10px 12px;
    font-size: 18px;
    margin-left: 5px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
    @media(max-width: 768px){
        display: none;
    }
`;

const HomeMenuIcon = styled.div`
  margin-left: 10px;
  display: none;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: block;
    font-size: 25px;
    color: #333;
    margin-right: 1%;
  }
`;

const SearchBar = styled.div`
    position: absolute;
    padding: 35px 0;
    display: flex;
    background: #f5f5f5;
    transition: width 2s, height 4s;
    border-bottom: 2px solid #e9e9e9;
    width: 100%;
    z-index: 9999;
    top: 125px;
    .fa {
        font-size: 24px;
        padding-left: 50px;
        color: grey;
    }
`;

const SearchInput = styled.input`
    border: none;
    background: unset;
    font-size: 26px;
    width: 90%;
    outline: none;
    padding-left: 10px;
`;

const WhatsAppLogo = styled.img`
    bottom: 5%;
    left: 2%;
    z-index: 99;
    position: fixed;
    cursor: pointer;
    @media(max-width: 500px){
        height: 40px;
        bottom: 3%;
    }
`;

class Header extends Component {
    constructor(props) {
        super(props)
        this.winWrapper = React.createRef()
        this.state = {
            openMenuBar: false,
            openSearchBar: false
        }
    }

    componentDidMount = () => document.addEventListener('click', this.handleClickOutside)

    componentWillUnmount = () => document.removeEventListener('click', this.handleClickOutside)

    componentDidUpdate = () => {
        if (this.state.openMenuBar) disableBackgroundScroll(true)
        else disableBackgroundScroll(false)
    }

    handleClickOutside = event => {
        const elemWrapper = this.winWrapper

        if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
            this.setState({ openMenuBar: false })
        }
    }

    showMenuBar = () => this.setState({ openMenuBar: !this.state.openMenuBar })

    render() {
        const { history } = this.props
        const { openMenuBar, openSearchBar } = this.state
        const pathUrl = history.location.pathname

        return (
            <Fragment>
                <Container openMenu={openMenuBar}>
                    <HeaderContainer>
                        <ContactDiv>
                            <ContactNumber><i className='fa fa-phone-square' aria-hidden='true'></i> <a href='tel:+91 9811278178'>+91 9811278178</a></ContactNumber>
                            <EmailAddress><i className='fa fa-envelope' aria-hidden='true'></i> <a href='mailto:info@mksoldagehome.com'>info@mksoldagehome.com</a></EmailAddress>
                        </ContactDiv>
                        <WhatsAppIcon>
                            <i className='fa fa-whatsapp' aria-hidden='true'></i>
                        </WhatsAppIcon>
                    </HeaderContainer>
                    <SubHeaderContainer>
                        <HeaderImage onClick={() => history.push('/')} src={HaderImage} alt='error-image' />
                        <HeaderList>
                            {headerList.map((obj, index) => {
                                return (
                                    <Fragment key={index}>{index <= 5 &&
                                        <HeaderData openMenu={openMenuBar} onClick={() => {
                                            history.push(obj.path)
                                        }} checkIndex={pathUrl === obj.path && true}>
                                            {obj.name}
                                        </HeaderData>}
                                    </Fragment>
                                )
                            })}
                            <div className='dropdown'>
                                <div className='dropbtn'>Other</div>
                                <div className='dropdown-content'>
                                    {headerList.slice(6).map((data, id) => {
                                        return (
                                            <div className="anchor" href='#' key={id} onClick={() => history.push(data.path)} checkIndex={pathUrl === data.path && true}>{data.name}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <SearchIcon onClick={() => this.setState({ openSearchBar: !openSearchBar })}>
                                <i className='fa fa-search' aria-hidden='true'></i>
                            </SearchIcon>
                        </HeaderList>
                        <HomeMenuIcon onClick={() => this.showMenuBar()}>{!!openMenuBar ? <i className='fa fa-times'></i> : <i className='fa fa-bars' aria-hidden='true'></i>} </HomeMenuIcon>
                    </SubHeaderContainer>
                </Container>
                {!!openSearchBar && <SearchBar><i className='fa fa-search' aria-hidden='true'></i>
                    <SearchInput type='text' placeholder='Search ...' /></SearchBar>}
                <a href='https://api.whatsapp.com/send?phone=+91%209811278178&text=%24wa_messagehttps%3A%2F%2Fwww.mksoldagehome.com'><WhatsAppLogo src={WhatsApp} alt='whatsapp-logo-error' /></a>
            </Fragment>
        )
    }
}

export default withRouter(Header)
