import { React, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../assets/icon/img1.png';
import img2 from '../../assets/icon/img2.jpg';
import img3 from '../../assets/icon/img3.jpg';
import img4 from '../../assets/icon/img4.jpg';
import right from '../../assets/icon/right.svg';

// 슬라이드 대표배너
const items = [
    <div className='item' data-value='1'>
        <img src={img1} alt='이벤트1' className='item-image' />
    </div>,
    <div className='item' data-value='2'>
        <img src={img2} alt='이벤트2' className='item-image' />
    </div>,
    <div className='item' data-value='3'>
        <img src={img3} alt='이벤트3' className='item-image' />
    </div>,
    <div className='item' data-value='4'>
        <img src={img4} alt='이벤트4' className='item-image' />
    </div>,
];

const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}/${itemsCount}`;
};

const renderPrevButton = ({ isDisabled }) => {
    return <img src={right} className='prev-prev-button' />;
};

const renderNextButton = ({ isDisabled }) => {
    return <img src={right} className='prev-next-button' />;
};

const Slide = () => {
    const percent = 0.16;
    const section = useRef(null);
    const [padding, setPadding] = useState(0);

    const syncState = () => {
        const { current } = section;
        if (current) {
            setPadding(current.offsetWidth * percent);
        }
    };

    useEffect(syncState, []);

    return (
        <Wrapper ref={section}>
            <AliceCarousel
                infinite
                mouseTracking
                autoPlay
                autoPlayInterval={5000}
                animationDuration={1000}
                animationType='slide'
                disableDotsControls
                items={items}
                onResized={syncState}
                disableSlideInfo={false}
                renderSlideInfo={renderSlideInfo}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </Wrapper>
    );
};

export default Slide;

const Wrapper = styled.div`
    overflow: hidden;
    min-width: 100%;
    max-width: 100%;
    .item {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .item-image {
        width: 100%;
    }

    .alice-carousel__prev-btn {
        img {
            transform: rotate(180deg);
            width: 52px;
            height: 52px;
        }
        text-align: left;
        position: absolute;
        top: 40%;
        left: 3%;
        padding: 0;
    }

    .alice-carousel__next-btn {
        position: absolute;
        top: 40%;
        right: 3%;
        text-align: right;
        /* transform: translate(-50%, -50%); */

        /* width: 60%; */
        padding: 0;

        filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
    }

    .alice-carousel__slide-info {
        top: unset;
        bottom: 2vh;
        left: unset;
        right: 30.5vw;
        justify-content: center;
        width: 35px;
        height: 13px;
        font-family: Noto Sans KR !important;
        font-size: 1vw;
        font-weight: 300;
        color: white;
        z-index: 10;
        display: flex;
        align-items: center;
        border-radius: 20px;
        background: var(--transparent-grey, rgba(129, 129, 129, 0.4));
    }
`;
