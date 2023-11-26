import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ExistEmailAPI, ExistIdAPI, SignUpAPI } from '../../api/member';
import Loading from '../Common/Loading';

function SignUpContent() {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        fubyId: '',
        passwd: '',
        passwdCheck: '',
        name: '',
        email: '',
        phone: '',
        home: '서울',
        sex: '',
        year: '',
        month: '',
        day: '',
    });
    const [isPasswordWarning, setIspasswdWarning] = useState(false);
    const [existId, setExistId] = useState(false);
    const [existEmail, setExistEmail] = useState(false);

    const showPasswordWarning = () => {
        setIspasswdWarning(true);
    };

    const valueHandler = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const checkExitId = async fubyId => {
        setExistId(false);
        try {
            const data = await ExistIdAPI(fubyId);
            if (data) {
                setExistId(data);
                alert('사용중인 아이디입니다. 다시 입력해 주세요');
            } else {
                alert('사용중이지 않은 아이디입니다. 계속 진행해 주세요');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const checkExitEmail = async email => {
        setExistEmail(false);
        try {
            const data = await ExistEmailAPI(email);
            if (data) {
                setExistEmail(data);
                alert('사용중인 이메일입니다. 다시 입력해 주세요');
            } else {
                alert('사용중이지 않은 이메일입니다. 계속 진행해 주세요');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const {
        fubyId,
        passwd,
        name,
        email,
        phone,
        home,
        sex,
        passwdCheck,
        year,
        month,
        day,
    } = values;

    const fubyIdRegEx = /^[a-z]+[a-z0-9]{5,16}$/g;
    // 6자 이상 16자 이하의 영문 소문자 혹은 숫자 조합
    const fubyIdValid = fubyIdRegEx.test(fubyId);
    const passwdRegEx =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{9,})/;
    // a-z와 A-Z/숫자/특수 문자(공백 제외) 허용, 2개이상 조합, 최소 10자 이상

    const isPasswordValid = passwdRegEx.test(passwd);
    const isPasswordCheck = passwd === passwdCheck;
    const isNameValid = name.length > 0;
    const emailRegEx = /[a-zA-Z0-9+_]+@[a-z]+\.+[a-z]/;
    // a-z와 A-Z/숫자/+와 - 허용, @와 a-z 그리고 \. a-z 사용가능
    const isEmailValid = emailRegEx.test(email);

    const submitUseInfo = async () => {
        setLoading(true);
        if (!existId && !existEmail) {
            try {
                const SignUpInfo = {
                    ...values,
                    birthday: year + '-' + month + '-' + day,
                };
                console.log('SignUpInfo', SignUpInfo);
                SignUpAPI(SignUpInfo);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        } else if (existId) {
            alert('아이디 중복 여부를 다시 확인 해주세요');
        } else {
            alert('이메일 중복 여부를 다시 확인 해주세요');
        }
    };

    return (
        <SignupDiv>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className='mainContainer'>
                        <div className='title'>회원가입</div>
                        <div className='requiredSymbolDescription'>
                            <span className='requiredSymbol'>*</span>
                            필수입력사항
                        </div>
                        <FormDiv>
                            <div className='eachContainer'>
                                <span className='containerTitle'>
                                    아이디
                                    <span className='requiredSymbol'>*</span>
                                </span>
                                <div className='inputContainer'>
                                    <Input
                                        className='signupInputBox'
                                        name='fubyId'
                                        type='text'
                                        placeholder='아이디를 입력해주세요'
                                        onChange={valueHandler}
                                    />
                                    {fubyId.length !== 0 &&
                                        (fubyIdValid || (
                                            <span className='warningText'>
                                                6자 이상 16자 이하의 영문 혹은
                                                숫자를 조합
                                            </span>
                                        ))}
                                </div>
                                <button
                                    className='duplicationCheckButton'
                                    onClick={() => checkExitId(fubyId)}
                                >
                                    <span className='duplicationCheckButtonText'>
                                        중복확인
                                    </span>
                                </button>
                            </div>
                            <div className='eachContainer'>
                                <span className='containerTitle'>
                                    비밀번호
                                    <span className='requiredSymbol'>*</span>
                                </span>
                                <div className='inputContainer'>
                                    <Input
                                        className='signupInputBox'
                                        type='passwd'
                                        name='passwd'
                                        placeholder='비밀번호를 입력해주세요'
                                        onChange={valueHandler}
                                        onFocus={showPasswordWarning}
                                    />
                                    {isPasswordWarning &&
                                        (passwd.length < 10 ? (
                                            <span className='warningText'>
                                                최소 10자 이상 입력
                                            </span>
                                        ) : (
                                            isPasswordValid || (
                                                <span className='warningText'>
                                                    영문/숫자/특수문자(공백
                                                    제외)만 허용하며, 2개 이상
                                                    조합
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
                                        type='passwd'
                                        name='passwdCheck'
                                        className='signupInputBox'
                                        placeholder='비밀번호를 한번 더 입력해주세요'
                                        onChange={valueHandler}
                                    />
                                    {passwdCheck.length !== 0 &&
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
                                    이름
                                    <span className='requiredSymbol'>*</span>
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
                                    이메일
                                    <span className='requiredSymbol'>*</span>
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
                                    onClick={() => checkExitEmail(email)}
                                >
                                    <span className='duplicationCheckButtonText'>
                                        중복확인
                                    </span>
                                </button>
                            </div>

                            <div className='eachContainer'>
                                <span className='containerTitle'>
                                    휴대폰
                                    <span className='requiredSymbol'>*</span>
                                </span>
                                <div className='inputContainer'>
                                    <Input
                                        className='signupInputBox'
                                        name='phone'
                                        value={phone}
                                        placeholder='숫자만 입력해주세요.'
                                        onChange={valueHandler}
                                    />
                                </div>
                                <button className='duplicationCheckButton'>
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
                                    <button className='addressButton'>
                                        <span className='duplicationCheckButtonText'>
                                            주소 검색
                                        </span>
                                    </button>
                                    <span className='alarm'>
                                        배송지에 따라 상품 정보가 달라질 수
                                        있습니다.
                                    </span>
                                </div>
                                <div className='blankBox'> </div>
                            </div>

                            <div className='eachContainer'>
                                <span className='containerTitle'>성별</span>
                                <div className='choiceContainer'>
                                    <div className='label'>
                                        <input
                                            name='sex'
                                            type='radio'
                                            className='sexChoiceButton'
                                            value='MALE'
                                            checked={sex === 'MALE'}
                                            onChange={valueHandler}
                                        />
                                        <span></span>
                                        <div className='maleLetter'>남자</div>
                                    </div>
                                    <div className='label'>
                                        <input
                                            type='radio'
                                            name='sex'
                                            className='sexChoiceButton'
                                            checked={sex === 'FEMALE'}
                                            value='FEMALE'
                                            onChange={valueHandler}
                                        />
                                        <div className='femaleLetter'>여자</div>
                                    </div>
                                    <div className='label'>
                                        <input
                                            type='radio'
                                            name='sex'
                                            className='sexChoiceButton'
                                            checked={sex === '3'}
                                            value='3'
                                            onChange={valueHandler}
                                        />
                                        <div className='femaleLetter'>
                                            선택 안함
                                        </div>
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
                                    <span className='birthInputSeparatorSlash'>
                                        /
                                    </span>
                                    <input
                                        name='month'
                                        className='birthInput'
                                        maxLength='2'
                                        placeholder='MM'
                                        type='text'
                                        onChange={valueHandler}
                                    />
                                    <span className='birthInputSeparatorSlash'>
                                        /
                                    </span>
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
                                    <div className='blankBox'> </div>
                                </div>
                            </div>
                            <div className='bottomSeparatorBar'></div>
                            <Border />
                            <div className='signupSubmitButtonContainer'>
                                <button
                                    className='signupSubmitButton'
                                    onClick={submitUseInfo}
                                >
                                    <span className='signupSubmitButtonText'>
                                        가입하기
                                    </span>
                                </button>
                            </div>
                        </FormDiv>
                    </div>
                </>
            )}
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

        input {
            width: 30px;
            min-width: 24px;
            min-height: 24px;
            display: inline-block;
            position: relative;
            border-radius: 50%;
            background-color: white;
            border: 1px solid rgb(221, 221, 221);
        }

        input[type='radio']:checked {
            /* background-color: #22d3ee; */
            /* border: 3px solid white; */
            /* box-shadow: 0 0 0 1.6px #22d3ee; */
            background-color: rgb(95, 0, 128);
        }
    }

    .warningText {
        font-size: 13px;
        color: rgb(240, 63, 64);
        margin-top: 4px;
        margin-left: 4px;
    }
`;

const Input = styled.input`
    width: ${props =>
        props.className.includes('sexChoiceButton') ? '30px' : '100%'};
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
const Input2 = styled.input`
    width: 30px;
    min-width: 24px;
    min-height: 24px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    background-color: white;
    border: 1px solid rgb(221, 221, 221);

    input[type='radio']:checked {
        background-color: #22d3ee;
        border: 3px solid white;
        box-shadow: 0 0 0 1.6px #22d3ee;
    }
`;

const Border = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid rgb(51, 51, 51);
`;
