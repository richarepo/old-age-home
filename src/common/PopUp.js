import React, { Component } from 'react'
import styled from 'styled-components'
import CrossIcon from '../assets/images/cross.svg'
import { disableBackgroundScroll } from './helper';

const Container = styled.div`
position: fixed;
height: 100%;
top: 0;
width: 100%;
background: rgba(51,51,51,0.62);
left: 0;
right: 0;
bottom: 0;
z-index: 101;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: ${props => isNaN(props.width) ? props.width : props.width + 'px'};
height: ${props => isNaN(props.height) ? props.height : props.height + 'px'};
position: relative;
background: #fff;
padding: 25px;
max-height: 70vh;
margin-top: 120px !important;
overflow-y: scroll;
overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px;
  }
  @media(max-width: 500px){
    width: 260px;
    margin-top: 145px !important;
  }
`;

const Cross = styled.img`
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    z-index: 1;
`;

class PopUp extends Component {
    static defaultProps = {
        height: 'auto',
        width: 'auto',
        closeOnEsc: false,
        className: '',
        customStyles: {},
        closeOnOutSideClick: true
    }

    constructor(props) {
        super(props);
        this.winWrapper = React.createRef()
    }

    componentDidMount = () => {
        disableBackgroundScroll(true)
        document.addEventListener('mousedown', this.handleClickOutside)
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        disableBackgroundScroll(false)
        document.removeEventListener('mousedown', this.handleClickOutside)
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleClickOutside = event => {
        const { closeOnOutSideClick } = this.props;
        const elemWrapper = this.winWrapper;
        if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
            !!closeOnOutSideClick && this.handleClose();
        }
    }

    handleKeyDown = e => {
        const { closeOnEsc, onClose } = this.props
        if ((e.keyCode === 27 || e.key === "Escape") && !!closeOnEsc) {
            onClose()
        }
    }

    handleClose = () => this.props.onClose()

    render() {
        const { height, width, children, className, customStyles } = this.props
        return (
            <Container className={`${className} center-flex`}>
                <Wrapper ref={this.winWrapper} height={height} width={width} style={customStyles}>
                    <Cross src={CrossIcon} alt="Close" onClick={() => this.handleClose()} />
                    {children}
                </Wrapper>
            </Container>
        )
    }
}

export default PopUp
