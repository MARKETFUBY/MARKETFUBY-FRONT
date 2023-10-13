import React from 'react';
import styled from 'styled-components';

function ReviewBox() {
    return (
        <Wrapper>
            <a className='img'>
                <span className='itemImg'></span>
            </a>
            <p>
                <a>
                    <span className='title'>[존쿡 델리미트] 사각잠봉 400g</span>
                </a>
            </p>
        </Wrapper>
    );
}

export default ReviewBox;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 72px 400px 1fr 96px;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    padding: 20px 20px 19px;
    border-bottom: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    line-height: 19px;
    color: rgb(153, 153, 153);

    .img {
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        width: 72px;
        height: 72px;
    }

    .itemImg {
        display: block;
        height: 100%;
        background-image: url(https://img-cf.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/shop/data/goods/1608789180659l0.jpg);
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        /* width: 0px; */
        /* height: 0px; */
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .title {
        height: 21px;
        margin: -1px 0px 2px;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        color: rgb(51, 51, 51);
        cursor: pointer;
        text-overflow: ellipsis;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
    }
`;
