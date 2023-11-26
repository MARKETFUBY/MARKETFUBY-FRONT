import React from 'react';
import styled from 'styled-components';

function ReviewBox({ data }) {
    return (
        <Wrapper>
            <div className='ImgBox'>
                <img src={data.imageUrl} />
            </div>
            <div className='content'>
                <div>
                    <div className='name'>{data.title}</div>
                    <div className='date'>
                        {data.date} {data.status}
                    </div>
                </div>
            </div>
            <p>{data.date} 까지 작성 가능</p>
            <button>후기 작성</button>
        </Wrapper>
    );
}

export default ReviewBox;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 72px 400px 1fr 96px;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    padding: 20px 20px 19px 0px;
    border-bottom: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    line-height: 19px;
    color: rgb(153, 153, 153);

    .ImgBox {
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        width: 72px;
        height: 72px;

        img {
            width: 72px;
            height: 72px;
            /* margin-right: 20px; */
            background-color: rgb(245, 245, 245);
        }
    }

    .content {
        span {
            height: 21px;
            margin: -1px 0px 2px;
            font-size: 16px;
            font-weight: 500;
            line-height: 21px;
            color: rgb(51, 51, 51);
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: normal;
        }

        .name {
            font-size: 16px;
            font-weight: 500;
            line-height: 21px;
            color: rgb(51, 51, 51);
        }
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: end;
        color: rgb(102, 102, 102);
    }

    button {
        margin: 0;
        padding: 0;
        width: 96px;
        height: 36px;
        border-radius: 3px;
        border: 1px solid rgb(221, 221, 221);
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        color: rgb(51, 51, 51);
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
