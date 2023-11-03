import { React, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import Product from '../Common/Product';
import { PRODUCT_DATA } from '../../pages/ProductData';

function RecommendationBox() {
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    const items = PRODUCT_DATA.map(product => {
        return <Product {...product} />;
    });

    return (
        <Div>
            <Title>
                <div className='top'>
                    <span>💜슈퍼빅세일 기획특가💜</span>
                </div>
                <p>올 가을 찾아온 최대 혜택</p>
            </Title>
            <Card>
                <AliceCarousel
                    infinite={1000}
                    animationDuration={1000}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    // autoPlay
                    items={items}
                    paddingRight={40}
                />
            </Card>
        </Div>
    );
}

export default RecommendationBox;

const Div = styled.div`
    position: relative;
    width: 1050px;
    margin: 0px auto;
    margin-bottom: 40px;
`;

const Title = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
    }

    p {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.45;
        letter-spacing: -0.2px;
        text-align: center;
        color: rgb(153, 153, 153);
        margin-top: 2px;
    }
`;

const Card = styled.div`
    position: relative;
    width: 1050px;
    margin: 0px auto;
`;
