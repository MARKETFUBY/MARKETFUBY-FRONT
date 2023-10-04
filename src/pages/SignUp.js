import React from 'react';
import { styled } from 'styled-components';
import Header from '../components/Common/Header';

function SignUp() {
    return (
        <div>
            <Header />
            <SignupDiv>
                <div className='mainContainer'>
                    <div className='title'>회원가입</div>
                    <div className='requiredSymbolDescription'>
                        <span className='requiredSymbol'>*</span>필수입력사항
                    </div>
                    <FormDiv>
                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                아이디<span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    className='signupInputBox'
                                    name='userId'
                                    type='text'
                                    placeholder='아이디를 입력해주세요'
                                    // onChange={valueHandler}
                                />
                                {/* <span className='warningText'>
                                    6자 이상 16자 이하의 영문 혹은 숫자를 조합
                                </span> */}
                            </div>
                            <button
                                className='duplicationCheckButton'
                                // onClick={UserIdDuplicationCheck}
                            >
                                <span className='duplicationCheckButtonText'>
                                    중복확인
                                </span>
                            </button>
                            {/* {isModalOpen && (
                            <Modal
                                type='default'
                                contents={contents[infoIndex]}
                                close={() =>
                                    setModalInfo(prev => ({
                                        ...prev,
                                        isModalOpen: false,
                                    }))
                                }
                            />
                        )} */}
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                비밀번호
                                <span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    className='signupInputBox'
                                    type='password'
                                    name='password'
                                    placeholder='비밀번호를 입력해주세요'
                                    // onChange={valueHandler}
                                    // onFocus={showPasswordWarning}
                                />
                                {/* 
                            {isPasswordWarning &&
                                (password.length < 10 ? (
                                    <span className='warningText'>
                                        최소 10자 이상 입력
                                    </span>
                                ) : (
                                    isPasswordValid || (
                                        <span className='warningText'>
                                            영문/숫자/특수문자(공백 제외)만
                                            허용하며, 2개 이상 조합
                                        </span>
                                    )
                                ))} */}
                            </div>
                            <div className='blankBox'> </div>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                비밀번호확인
                                <span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    type='password'
                                    name='passwordCheck'
                                    className='signupInputBox'
                                    placeholder='비밀번호를 한번 더 입력해주세요'
                                    // onChange={valueHandler}
                                />
                                {/* {passwordCheck.length !== 0 &&
                                (isPasswordCheck || ( */}
                                <span className='warningText'>
                                    동일한 비밀번호를 입력
                                </span>
                                {/* ))} */}
                            </div>
                            <div className='blankBox'> </div>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                이름<span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    className='signupInputBox'
                                    name='name'
                                    placeholder='이름을 입력해주세요'
                                    // onChange={valueHandler}
                                />
                                {/* {name.length !== 0 &&
                                (isNameValid || ( */}
                                <span className='warningText'>
                                    이름을 입력해주세요.
                                </span>
                                {/* ))} */}
                            </div>
                            <div className='blankBox'> </div>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                이메일<span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    className='signupInputBox'
                                    name='email'
                                    // value={email}
                                    placeholder='예: weketkurly@weket.com'
                                    // onChange={valueHandler}
                                />
                                {/* {email.length !== 0 &&
                                (isEmailValid || ( */}
                                <span className='warningText'>
                                    이메일 형식으로 입력해 주세요.
                                </span>
                                {/* ))} */}
                            </div>
                            <button
                                className='duplicationCheckButton'
                                // onClick={emailDuplicationCheck}
                            >
                                <span className='duplicationCheckButtonText'>
                                    중복확인
                                </span>
                            </button>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                휴대폰<span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    className='signupInputBox'
                                    name='number'
                                    // value={email}
                                    placeholder='숫자만 입력해주세요.'
                                    // onChange={valueHandler}
                                />
                            </div>
                            <button
                                className='duplicationCheckButton'
                                // onClick={emailDuplicationCheck}
                            >
                                <span className='duplicationCheckButtonText'>
                                    인증번호 받기
                                </span>
                            </button>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                주소
                                <span className='requiredSymbol'>*</span>
                            </span>
                            <div className='inputContainer'>
                                <Input
                                    className='signupInputBox'
                                    name='number'
                                    // value={email}
                                    placeholder='주소 검색'
                                    // onChange={valueHandler}
                                />
                            </div>
                            <div className='blankBox'> </div>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>성별</span>
                            <div className='choiceContainer'>
                                <div className='label'>
                                    <input
                                        name='genderId'
                                        type='radio'
                                        className='genderChoiceButton'
                                        value='1'
                                        // checked={genderId === '1'}
                                        // onChange={valueHandler}
                                    />
                                    <div className='maleLetter'>남자</div>
                                </div>
                                <div className='label'>
                                    <input
                                        type='radio'
                                        name='genderId'
                                        className='genderChoiceButton'
                                        // checked={genderId === '2'}
                                        value='2'
                                        // onChange={valueHandler}
                                    />
                                    <div className='femaleLetter'>여자</div>
                                </div>
                                <div className='label'>
                                    <input
                                        type='radio'
                                        name='genderId'
                                        className='genderChoiceButton'
                                        // checked={genderId === '2'}
                                        value='3'
                                        // onChange={valueHandler}
                                    />
                                    <div className='femaleLetter'>
                                        선택 안함
                                    </div>
                                </div>
                            </div>{' '}
                            <div className='blankBox'> </div>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>생년월일</span>
                            <div className='birthInputContainer'>
                                <input
                                    name='year'
                                    type='text'
                                    className='birthInput'
                                    maxLength='4'
                                    placeholder='YYYY'
                                    // onChange={valueHandler}
                                />
                                <span className='birthInputSeparatorSlash'>
                                    /
                                </span>
                                <input
                                    name='month'
                                    className='birthInput'
                                    maxLength='2'
                                    placeholder='MM'
                                    type='text'
                                    // onChange={valueHandler}
                                />
                                <span className='birthInputSeparatorSlash'>
                                    /
                                </span>
                                <input
                                    name='day'
                                    className='birthInput'
                                    maxLength='2'
                                    placeholder='DD'
                                    // onChange={valueHandler}
                                />
                            </div>
                        </div>

                        <div className='eachContainer'>
                            <span className='containerTitle'>
                                추가입력 사항
                            </span>
                            <div className='choiceContainer'>
                                <div className='recommendContainer'>
                                    <input
                                        name='additionalIfo'
                                        type='radio'
                                        className='genderChoiceButton'
                                    />
                                    <span>추천인 아이디</span>
                                </div>
                                <div className='recommendContainer'>
                                    <input
                                        type='radio'
                                        name='additionalIfo'
                                        className='genderChoiceButton'
                                    />
                                    <span>참여 이벤트명</span>
                                </div>
                            </div>
                        </div>
                        <div className='bottomSeparatorBar'></div>
                        <div className='signupSubmitButtonContainer'>
                            <button
                                className='signupSubmitButton'
                                // onClick={signupSubmit}
                            >
                                <span className='signupSubmitButtonText'>
                                    가입하기
                                </span>
                            </button>
                            {/* {isModalOpen && (
                            <Modal
                                type='default'
                                contents={contents[infoIndex]}
                                close={() =>
                                    setModalInfo(prev => ({
                                        ...prev,
                                        isModalOpen: false,
                                    }))
                                }
                            />
                        )} */}
                        </div>
                    </FormDiv>
                </div>
            </SignupDiv>
        </div>
    );
}

export default SignUp;

const SignupDiv = styled.div`
    min-width: 1050px;
    padding-top: 50px;
    width: 640px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
    margin: 0px auto;

    .title {
        margin-bottom: 50px;
        font-size: 28px;
        line-height: 35px;
        font-weight: 500;
        text-align: center;
        letter-spacing: -1px;
        color: rgb(51, 51, 51);
    }

    .requiredSymbolDescription {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 640px;
        margin: 0px auto;
        padding-bottom: 10px;
        border-bottom: 2px solid rgb(51, 51, 51);
        font-size: 12px;
        color: rgb(102, 102, 102);
        line-height: 17px;
        text-align: right;
    }

    .requiredSymbol {
        color: rgb(238, 106, 123);
    }

    .choiceContainer {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex: 1 1 0%;
    }
`;
const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 640px;
    margin: 0px auto;

    .eachContainer {
        display: inline-flex;
        width: 100%;
        padding: 10px 20px;
    }

    .containerTitle {
        width: 139px;
        padding-top: 12px;
    }

    .inputContainer {
        position: relative;
        height: 48px;
        padding-bottom: 0px;
        margin: 0;
        flex: 1 1 0%;
    }

    .blankBox {
        width: 120px;
        margin-left: 8px;
    }

    .label {
        position: relative;
        display: flex;
        align-items: center;
        padding: 12px 0px 9px;
    }
`;
const Input = styled.input`
    width: 100%;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
`;
