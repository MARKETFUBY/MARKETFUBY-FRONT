import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
client.defaults.withCredentials = true;

// const token =
// 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmdWJ5SWQiOiLsnKTsnpAiLCJpYXQiOjE3MDA2NDIxMDIsImV4cCI6MTcwMTI0NjkwMn0.nUJ8Mc3uyqkBwC2MtSQZjmlrPa2_WMn-9utXe0bjyk0';
const token = localStorage.getItem('accessToken');

client.defaults.headers.common['Authorization'] = token ? token : null;

console.log(
    '현재 설정된 토큰: ',
    client.defaults.headers.common['Authorization'],
);

// 헤더 없는 refresh용 axios 인스턴스 생성
const refreshClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    contentType: 'application/json; charset=utf-8;',
});

refreshClient.defaults.withCredentials = true;

// axios response에 대한 interceptors 토큰 만료 확인
client.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalConfig = error.config;
        const refreshToken = localStorage.getItem('refreshToken');

        if (error.response?.data.details === 'JWT EXPIRED') {
            try {
                const res = await refreshClient.post('/auth/reissue', {
                    token: refreshToken,
                });
                console.log(res, '토큰 재발급 성공');
                localStorage.setItem('accessToken', res.data.accessToken);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                originalConfig.headers['Authorization'] = res.data.accessToken;
                refreshClient(originalConfig);
            } catch (err) {
                console.log(err, '토큰 재발급 에러');
                alert('토큰이 만료되었습니다. 다시 로그인해주세요.');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.replace('/member/login');
            }
        }
        return Promise.reject(error);
    },
);

export default client;
