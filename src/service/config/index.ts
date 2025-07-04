// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

// let BASE_URL = ''
// if (import.meta.env.PROD) {
//   // 生产环境
//   BASE_URL = 'http://152.136.185.210:4000'
// } else {
//   // 开发环境
//   BASE_URL = 'http://152.136.185.210:5000'
// }

// console.log(BASE_URL)

// 通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_BASE_URL)

export const TIME_OUT = 10000
export const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
