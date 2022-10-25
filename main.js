
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import {$http} from  '@escook/request-miniprogram'
// 基础地址
$http.baseUrl="http://shop.bufantec.com/bufan"
// 拦截器 
$http.beforeRequest=()=>{
   	uni.showLoading({
   		title:"正在加载中"
   	})
}
$http.afterRequest=()=>{
	  uni.hideLoading("")
}
// 挂载全局
uni.$http=$http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif