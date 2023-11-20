import { React, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMyOrder } from '../../api/mypage';

function UserInfo() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        try {
            const getData = await getMyOrder();
            setProfile(getData);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <TopBox>
                <Box>
                    <div className='profile'>
                        <div className='name'>
                            <div className='class'>{profile.level}</div>
                            <div className='myInfo'>
                                <strong className='nickname'>
                                    {profile.name}님
                                </strong>
                                <div className='confirmClass'>
                                    <div className='btn'>
                                        다음달 등급 확인 •{'\u00A0'}
                                        {'\u00A0'}
                                    </div>
                                    <div className='btn'> 전체 등급 확인</div>
                                </div>
                            </div>
                        </div>
                        <div className='add'>
                            <span className='addBox'>
                                <div className='new'>NEW</div>
                                컬리 멤버스 월 1,900원으로 10배 쿠폰 받기 >
                            </span>
                        </div>
                    </div>
                    <div className='detailBox'>
                        <div className='detail'>
                            <div className='dt'>
                                <div className='title'>적립금 · 컬리캐시 ></div>
                                <div className='content'>바로가기</div>
                            </div>
                        </div>
                        <div className='detail'>
                            <div className='dt'>
                                <div className='title'>쿠폰 ></div>
                                <div className='content'>1개</div>
                            </div>
                        </div>
                        <div className='detail'>
                            <div className='dt'>
                                <div className='title'>나의 컬리 스타일 ></div>
                                <div className='content'>등록하기</div>
                            </div>
                        </div>
                    </div>
                    <div className='detailBox'>
                        <div className='detail'>
                            <button className='dt2'>
                                <div className='title2'>나의 컬리 스타일 ></div>
                                <div className='content2'>등록하기</div>
                            </button>
                        </div>
                        <div className='detail'>
                            <button className='dt2'>
                                <div className='title2'>컬리 멤버스 ></div>
                                <div className='content2'>혜택받기</div>
                            </button>
                        </div>
                    </div>
                </Box>
                <AddContainer>
                    <img
                        src='https://product-image.kurly.com/banner/da-banner/84550cb5-1c27-4190-a248-d6ad022d074c.jpg'
                        alt='[컬리멤버스] 런칭 안내'
                        className='addImg'
                    />
                </AddContainer>
            </TopBox>
        </div>
    );
}

export default UserInfo;

const TopBox = styled.div`
    width: 100%;
    /* height: 100%; */
    padding: 50px 0px;
    margin-bottom: -20px;
    background-color: rgb(247, 247, 247);
`;

const Box = styled.div`
    display: grid;
    grid-template-columns: 372px auto;
    width: 1050px;
    margin: 0px auto;
    gap: 4px;

    .name {
        display: flex;
    }

    .add {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 30px;
    }

    .profile {
        padding: 30px;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: column;
        background: rgb(255, 255, 255);
    }

    .detailBox {
        display: flex;
        column-gap: 4px;
    }

    .detail {
        flex: 1 1 0%;
        overflow: hidden;
        background: rgb(255, 255, 255);
    }

    .class {
        min-width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        /* padding: 0px 5px; */
        border-radius: 100%;
        font-weight: normal;
        font-size: 14px;
        text-align: center;
        color: rgb(95, 0, 128);
        border: 1px solid rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
    }

    .myInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 50%;
        min-height: 48px;
        margin-left: 20px;
    }

    .nickname {
        display: block;
        overflow: hidden;
        font-weight: 500;
        font-size: 20px;
        color: rgb(51, 51, 51);
        line-height: 28px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .btn {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: rgb(153, 153, 153);
    }

    .confirmClass {
        display: flex;
        align-items: center;
    }

    .dt {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 26px 0px 30px 30px;
    }

    .title {
        position: relative;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        color: rgb(51, 51, 51);
    }

    .content {
        font-weight: 700;
        font-size: 20px;
        color: rgb(95, 0, 128);
        margin-top: 20px;
    }

    .dt2 {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        flex-direction: row;
        padding: 20px 30px;
        align-items: center;
        background: none;
        border: none;
    }

    .title2 {
        position: relative;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        color: rgb(51, 51, 51);
    }

    .content2 {
        font-weight: 700;
        font-size: 20px;
        color: rgb(95, 0, 128);
    }

    .addBox {
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        padding: 15px 12px;
        border-radius: 6px;
        font-weight: 500;
        background-color: rgb(247, 247, 247);
        color: rgb(51, 51, 51);
    }

    .new {
        width: 40px;
        height: 18px;
        margin-right: 8px;
        border-radius: 13px;
        font-size: 11px;
        letter-spacing: -0.3px;
        background-color: rgb(240, 63, 64);
        color: rgb(255, 255, 255);
        text-align: center;
    }
`;

const AddContainer = styled.div`
    display: block;
    width: 1050px;
    overflow: hidden;
    margin: 20px auto 0px;

    .addImg {
        width: 100%;
        height: 60px;
        object-fit: cover;
    }
`;
