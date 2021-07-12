import axios from 'axios';

//ping
const ping = form => axios.post('/api/v1/ping', form).then(res => res.data);

//用户登陆
const userLogin = user => axios.post(`/api/v1/user/login/`, user).then(res => res.data);

//用户登陆
const userLogout = () => axios.delete(`/api/v1/user/logout/`).then(res => res.data);

//用户注册
const userRegister = form => axios.post('/api/v1/user/register', form).then(res => res.data);

//获取当前用户
const getMe = () => axios.get('/api/v1/user/me').then(res => res.data);


export {
    ping,
    userRegister,
    userLogin,
    userLogout,
    getMe,
}