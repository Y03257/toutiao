/* 请求模块 */
import axios from "axios"
const request = axios.create({
        baseURL: 'http://toutiao-app.itheima.net/ ' //接口的基准路径(接口文档地址)
    })
    //请求拦截器

//响应拦截器


export default request