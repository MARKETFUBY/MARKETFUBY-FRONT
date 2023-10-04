import React from 'react';
import { styled } from 'styled-components';
import Header from '../components/Common/Header';

function Login() {
    return (
        <div>
            <Header />
            <LoginDiv>
                <div className='title'>로그인</div>
                <FormDiv>
                    <InputDiv>
                        <Input
                            data-testid='input-box'
                            name='id'
                            placeholder='아이디를 입력해주세요'
                            type='text'
                            value=''
                        />
                        <Input
                            data-testid='input-box'
                            name='password'
                            placeholder='비밀번호를 입력해주세요'
                            type='password'
                            autocomplete='off'
                            value=''
                        />
                    </InputDiv>
                </FormDiv>
                <FindingDiv>
                    <a className='id'>아이디 찾기</a>
                    <span className='bar'>|</span>
                    <a className='password'>비밀번호 찾기</a>
                </FindingDiv>
                <BtnDiv>
                    <button
                        className='loginBtn'
                        type='submit'
                        height='54'
                        radius='3'
                    >
                        <span class='css-nytqmg e4nu7ef1'>로그인</span>
                    </button>
                    <button
                        className='signupBtn'
                        type='button'
                        height='54'
                        radius='3'
                    >
                        <span class='css-nytqmg e4nu7ef1'>회원가입</span>
                    </button>
                </BtnDiv>
            </LoginDiv>
        </div>
    );
}

export default Login;

const LoginDiv = styled.div`
    width: 340px;
    margin: 0px auto;
    letter-spacing: -0.6px;
    margin-top: 90px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
    .title {
        font-weight: 800;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
    }
`;
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const FormDiv = styled.div`
    margin-top: 30px;
`;
const BtnDiv = styled.div`
    margin-top: 28px;

    .loginBtn {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 54px;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        background-color: rgb(95, 0, 128);
        border: 0px none;
        font-size: 17px;
    }

    .signupBtn {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 54px;
        border-radius: 3px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
        margin-top: 10px;
        font-size: 17px;
    }
`;
const FindingDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 13px;

    .bar {
        padding: 0 5px;
    }
`;
const Input = styled.input`
    font-size: 14px;
    width: 100%;
    height: 48px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
    margin-bottom: 11px;
`;
