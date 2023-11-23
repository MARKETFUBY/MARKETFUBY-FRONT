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
            localStorage.setItem(
                'accessToken',
                'Bearer ' + res.data.accessToken,
            );
            localStorage.setItem(
                'refreshToken',
                'Bearer ' + res.data.refreshToken,
            );
            localStorage.setItem('username', res.data.username);
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

// 로그아웃
export const LogoutAPI = async refreshToken => {
    try {
        const res = await client.delete('/members/logout', {
            data: { refreshToken: refreshToken.slice(7) },
        });
        // 로그아웃 (로컬스토리지 토큰 삭제 후 메인페이지 이동)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
        window.location.replace('/');
        console.log('로그아웃 성공');
        return res.data;
    } catch (err) {
        console.log(err, '로그아웃 에러');
    }
};
