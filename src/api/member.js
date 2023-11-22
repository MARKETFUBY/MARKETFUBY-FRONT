import client from './client';

// 회원가입
export const SignUpAPI = async signUpInfo => {
    try {
        console.log('signUpInfo', signUpInfo);
        const res = await client.post('/members/signup', signUpInfo);
        console.log(res, '회원가입 성공');
        alert('회원가입에 성공하였습니다.');
        window.location.replace('members/login');
    } catch (err) {
        console.log(err, '회원가입 에러');
        alert('회원가입 에러');
        //   if (err.response?.data.details === "이미 가입된 이메일입니다.") {
        //     alert("이미 가입된 이메일입니다.");
        //     window.location.replace("/login");
        //   } else {
        //     alert("회원가입 오류");
        //   }
    }
};
