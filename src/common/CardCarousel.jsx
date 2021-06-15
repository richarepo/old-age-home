import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import './CardCrausoel.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const CARD_CRAUSOEL_SETTINGS = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1270,
            settings: {
                slidesToShow: 4.1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2.4,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2.1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
};

const AngleLeftArrow = styled.i`
  display: ${(props) =>
        props.availability === 'slick-arrow slick-prev slick-disabled'
            ? 'none !important'
            : ''};
`;

const AngleRightArrow = styled.i`
  display: ${(props) =>
        props.availability === 'slick-arrow slick-next slick-disabled'
            ? 'none !important'
            : ''};
`;


function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <AngleRightArrow
            className={'fa fa-angle-right fa-1x prev-arrow'}
            onClick={onClick}
            aria-hidden='true'
            availability={className}
        ></AngleRightArrow>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <AngleLeftArrow
            className={'fa fa-angle-left fa-1x next-arrow'}
            onClick={onClick}
            aria-hidden='true'
            availability={className}
        ></AngleLeftArrow>
    );
}

const Container = styled.div`
    padding: 0px 20px;
    .slick-list {
        margin: 40px 0px;
    }
    .card-image {
        height: 260px;
    }
`;

const Image = styled.img`
    width: 350px !important;
    padding-left: 10px !important;
    margin-left: 40px !important;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    :hover {
        cursor: pointer;
        opacity: 0.9 !important;
    }
    @media (max-width: 768px) {
        width: 300px !important;
    }
    @media (max-width: 500px) {
        width: 98% !important;
        padding-left: 0px !important;
        margin-left: 0px !important;
    }
`;

function CardCarousel(props) {
    const { cardCarousel } = props
    return (
        <Container>
            <Slider {...CARD_CRAUSOEL_SETTINGS}>
                {cardCarousel.map((value, i) => {
                    return (
                        <Image key={i}
                            src={value.img}
                            className='card-image'
                        />
                    );
                })}
            </Slider>
        </Container>
    )
}

export default CardCarousel
