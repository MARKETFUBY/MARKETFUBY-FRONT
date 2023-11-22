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

// 로그인
export const SignInAPI = async loginInfo => {
    try {
        console.log(loginInfo, 'loginInfo');
        const res = await client.post('/members/login', loginInfo);
        if (res.data && res.data.accessToken && res.data.refreshToken) {
            console.log(res, '로그인 성공');
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            window.location.replace('/');
            return 'Login Success';
        } else {
            console.log('Invalid response format', res);
        }
    } catch (err) {
        console.log(err, '로그인 에러');
        //   if (err.response?.data.details === "자격 증명에 실패하였습니다.") {
        //     return "Login Fail";
        //   } else {
        //     return "Login Error";
        //   }
    }
};
