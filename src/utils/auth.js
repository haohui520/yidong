// 权限认证  token 令牌
// 提供  获取token  设置token  删除token
const USER_KEY = 'hm-toutiao-m-84-user'

// 获取token
export const getUser = () => {
  // 或者空 拿不到值得到空也不会报错 字符串转json对象
  return JSON.parse(window.localStorage.getItem(USER_KEY) || '{}')
}
// 设置token 传一个参，
export const setUser = (user) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user))
}
// 删除token
export const delUser = () => {
  window.localStorage.removeItem(USER_KEY)
}
