import client from './client';

// 회원가입
export const SignUpAPI = async signUpInfo => {
    try {
        const res = await client.post('/members/signup', signUpInfo);
        alert('회원가입에 성공하였습니다.');
        window.location.replace('members/login');
    } catch (err) {
        console.log(err, '회원가입 에러');
        alert('회원가입 에러');
    }
};

// 로그인
export const SignInAPI = async loginInfo => {
    try {
        const res = await client.post('/members/login', loginInfo);
        if (res.data && res.data.accessToken && res.data.refreshToken) {
            localStorage.setItem(
                'accessToken',
                'Bearer ' + res.data.accessToken,
            );
            localStorage.setItem(
                'refreshToken',
                'Bearer ' + res.data.refreshToken,
            );
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('memberId', res.data.memberId);
            window.location.replace('/');
            return 'Login Success';
        } else {
            console.log('Invalid response format', res);
        }
    } catch (err) {
        console.log(err, '로그인 에러');
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
        return res.data;
    } catch (err) {
        console.log(err, '로그아웃 에러');
    }
};

// 토큰 재발급
export const RefreshAPI = async refreshToken => {
    console.log('refreshToken', refreshToken);
    try {
        const res = await client.post('/members/refreshtoken', {
            refreshToken,
        });
        if (res.status == 200) {
            localStorage.setItem(
                'accessToken',
                `Bearer ${res.data.accessToken}`,
            );
            localStorage.setItem(
                'refreshToken',
                `Bearer ${res.data.refreshToken}`,
            );
            return res.data;
        } else {
            localStorage.clear();
            window.location.replace('/member/login');
            window.alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
        }
    } catch (err) {
        console.log(err, '토큰 재발급 에러');
    }
};
