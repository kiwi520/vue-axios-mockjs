import axios from 'axios'
// 插件模块
const HttpClient = {}

HttpClient.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })

  // 4. 添加实例方法
  axios.defaults.baseURL = 'http://www.1ddd.com:8080/api'

  axios.interceptors.request.use(config => {
    if (config.method === 'put') {
      config.data = JSON.stringify(config.data)
      config.headers['Content-Type'] = 'application/json;charset=utf-8'
    }

    config.headers.Authorization = localStorage.getItem('_token') || ''
    // config.headers['Content-Type'] = 'application/x-www-urlencoded'
    return config
  })

  Vue.prototype.$http = axios
}

export default HttpClient
