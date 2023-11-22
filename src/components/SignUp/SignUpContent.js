import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function SignUpContent() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        userId: '',
        password: '',
        passwordCheck: '',
        name: '',
        email: '',
        phone: '',
        home: '',
        sex: '',
        year: '',
        month: '',
        day: '',
    });
    const [isPasswordWarning, setIspasswordWarning] = useState(false);

    const showPasswordWarning = () => {
        setIspasswordWarning(true);
    };

    const valueHandler = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const {
        userId,
        password,
        name,
        email,
        phone,
        home,
        sex,
        passwordCheck,
        year,
        month,
        day,
    } = values;

    const userIdRegEx = /^[a-z]+[a-z0-9]{5,16}$/g;
    // 6자 이상 16자 이하의 영문 소문자 혹은 숫자 조합
    const userIdValid = userIdRegEx.test(userId);
    const passwordRegEx =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{9,})/;
    // a-z와 A-Z/숫자/특수 문자(공백 제외) 허용, 2개이상 조합, 최소 10자 이상
    const isPasswordValid = passwordRegEx.test(password);
    const isPasswordCheck = password === passwordCheck;
    const isNameValid = name.length > 0;
    const emailRegEx = /[a-zA-Z0-9+_]+@[a-z]+\.+[a-z]/;
    // a-z와 A-Z/숫자/+와 - 허용, @와 a-z 그리고 \. a-z 사용가능
    const isEmailValid = emailRegEx.test(email);
    const isSubmitValid =
        userIdValid && password && passwordCheck && name && email;

    const birthday = year + month.padStart(2, 0) + day.padStart(2, 0);

    const signupSubmit = e => {
        submitUseInfo(e);
        navigate('/');
    };

    const submitUseInfo = e => {
        e.preventDefault();
        fetch('http://10.58.52.89:3000/users/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                userId: '',
                password: '',
                passwordCheck: '',
                name: '',
                email: '',
                phone: '',
                home: '',
                sex: sex,
                birthday: year + month + day,
            }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(
                        `회원가입 ${res.status} 에러가 발생했습니다`,
                    );
                }
                return res.json();
            })
            .then(result =>
                result.message === 'SIGNUP_SUCCESS'
                    ? alert('회원가입 성공')
                    : alert('회원가입 실패'),
            )
            .catch(error => {
                console.log(error.mesasge);
                alert('회원가입 실패');
            });
    };

    return (
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
                                onChange={valueHandler}
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
                                onChange={valueHandler}
                                // onFocus={showPasswordWarning}
                            />
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
                                ))}
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
                                onChange={valueHandler}
                            />
                            {passwordCheck.length !== 0 &&
                                (isPasswordCheck || (
                                    <span className='warningText'>
                                        동일한 비밀번호를 입력
                                    </span>
                                ))}
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
                                onChange={valueHandler}
                            />
                            {name.length !== 0 &&
                                (isNameValid || (
                                    <span className='warningText'>
                                        이름을 입력해주세요.
                                    </span>
                                ))}
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
                                value={email}
                                placeholder='예: weketkurly@weket.com'
                                onChange={valueHandler}
                            />
                            {email.length !== 0 &&
                                (isEmailValid || (
                                    <span className='warningText'>
                                        이메일 형식으로 입력해 주세요.
                                    </span>
                                ))}
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
                                value={email}
                                placeholder='숫자만 입력해주세요.'
                                onChange={valueHandler}
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
                            <button
                                className='addressButton'
                                // onClick={emailDuplicationCheck}
                            >
                                <span className='duplicationCheckButtonText'>
                                    주소 검색
                                </span>
                            </button>
                            <span className='alarm'>
                                배송지에 따라 상품 정보가 달라질 수 있습니다.
                            </span>
                        </div>
                        <div className='blankBox'> </div>
                        {/* <div className='blankBox'> </div> */}
                    </div>

                    <div className='eachContainer'>
                        <span className='containerTitle'>성별</span>
                        <div className='choiceContainer'>
                            <div className='label'>
                                <Input
                                    name='sex'
                                    type='radio'
                                    className='sexChoiceButton'
                                    value='1'
                                    checked={sex === '1'}
                                    onChange={valueHandler}
                                />
                                <span></span>
                                <div className='maleLetter'>남자</div>
                            </div>
                            <div className='label'>
                                <Input
                                    type='radio'
                                    name='sex'
                                    className='sexChoiceButton'
                                    checked={sex === '2'}
                                    value='2'
                                    onChange={valueHandler}
                                />
                                <div className='femaleLetter'>여자</div>
                            </div>
                            <div className='label'>
                                <Input
                                    type='radio'
                                    name='sex'
                                    className='sexChoiceButton'
                                    checked={sex === '3'}
                                    value='3'
                                    onChange={valueHandler}
                                />
                                <div className='femaleLetter'>선택 안함</div>
                            </div>
                        </div>
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
                                onChange={valueHandler}
                            />
                            <span className='birthInputSeparatorSlash'>/</span>
                            <input
                                name='month'
                                className='birthInput'
                                maxLength='2'
                                placeholder='MM'
                                type='text'
                                onChange={valueHandler}
                            />
                            <span className='birthInputSeparatorSlash'>/</span>
                            <input
                                name='day'
                                className='birthInput'
                                maxLength='2'
                                placeholder='DD'
                                onChange={valueHandler}
                            />
                        </div>
                        <div className='blankBox'> </div>
                    </div>

                    <div className='eachContainer'>
                        <span className='containerTitle'>추가입력 사항</span>
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
                            <div className='blankBox'> </div>
                        </div>
                    </div>
                    <div className='bottomSeparatorBar'></div>
                    <Border />
                    <div className='signupSubmitButtonContainer'>
                        <button
                            className='signupSubmitButton'
                            onClick={signupSubmit}
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
    );
}

export default SignUpContent;

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

    .duplicationCheckButton {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        /* width: 100%; */
        width: 120px;
        margin-left: 8px;
        height: 52px;
        border-radius: 3px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
    }

    .addressButton {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        margin-left: 8px;
        height: 52px;
        border-radius: 3px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
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

        .male {
            display: flex;
            justify-content: space-between;
            width: 62px;
            margin-right: 50px;
        }

        .female {
            display: flex;
            justify-content: space-between;
            width: 62px;
            margin-right: 50px;
        }

        .genderChoiceButton {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: rgb(95, 0, 128);
            border: 1px solid black;
        }
    }

    .alarm {
        display: block;
        margin-top: 10px;
        font-size: 12px;
        line-height: 18px;
        color: rgb(102, 102, 102);
    }

    .birthInputContainer {
        height: 44px;
        display: flex;
        margin-left: 10px;
        align-items: center;
        width: 60%;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 3px;
        padding: 0px 15px;
        text-align: center;
        font-size: 14px;
        /* border: none; */

        input {
            width: 100%;
            height: 40px;
            padding: 0px 11px 1px 15px;
            border-radius: 4px;
            border: none;
            font-weight: 400;
            font-size: 16px;
            text-align: center;
            line-height: 38px;
            color: rgb(51, 51, 51);
            outline: none;
            box-sizing: border-box;
        }
    }

    .recommendContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .signupSubmitButtonContainer {
        display: flex;
        justify-content: center;
        border-top: 1px solid rgb(247, 247, 247);
        padding: 40px 0px;

        button {
            display: block;
            padding: 0px 10px;
            text-align: center;
            overflow: hidden;
            width: 240px;
            height: 56px;
            border-radius: 3px;
            color: rgb(255, 255, 255);
            background-color: rgb(95, 0, 128);
            border: 0px none;
        }

        span {
            display: inline-block;
            font-size: 16px;
            font-weight: 500;
        }
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
        padding: 10px 0;
    }

    .containerTitle {
        width: 139px;
        padding-top: 12px;
    }

    .inputContainer {
        position: relative;
        height: 60px;
        padding-bottom: 0px;
        margin: 0;
        flex: 1 1 0%;
        margin-right: 10px;
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
const Border = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid rgb(51, 51, 51);
`;
