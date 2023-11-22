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

export default client;
