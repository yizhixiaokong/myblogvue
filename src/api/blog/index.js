import axios from 'axios';

//创建博客
const postBlog = form => axios.post('/api/v1/blogs', form).then(res => res.data);

//博客详情
const getBlog = id => axios.get(`/api/v1/blog/${id}`).then(res => res.data);

//博客列表
const getBlogs = () => axios.get('/api/v1/blogs').then(res => res.data);


export {
    getBlogs,
    getBlog,
    postBlog,
}