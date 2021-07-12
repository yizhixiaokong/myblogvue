import axios from 'axios';

//创建博客
const postBlog = form => axios.post('/api/v1/blogs', form).then(res => res.data);

//博客详情
const getBlog = id => axios.get(`/api/v1/blog/${id}`).then(res => res.data);

//博客列表
const getBlogs = () => axios.get('/api/v1/blogs').then(res => res.data);

//博客列表
const getUserBlogs = () => axios.get('/api/v1/userblogs').then(res => res.data);

//博客删除
const deleteBlog = id => axios.delete(`/api/v1/blog/${id}`).then(res => res.data);


export {
    getBlogs,
    getUserBlogs,
    getBlog,
    postBlog,
    deleteBlog,
}