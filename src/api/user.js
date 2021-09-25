/* 用户相关请求模块 */
import request from "@/utils/request"

export const login = data => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        /* 请求文档中有body才有请求体 */
        data
    })
}

/* 发送验证码
    注意：每手机号每分钟1次 */
export const sendSms = mobile => {
    return request({
        method: 'GET',
        /* 用``拼接一下 */
        url: `/v1_0/sms/codes/${mobile}`
    })
}