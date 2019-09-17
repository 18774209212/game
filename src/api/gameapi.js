// import mallRequest from '@/utils/mallRequest.js'
import axios from 'axios'
import router from '../router'
// 抓取
export function gamecatch(type) {
  return mallRequest({
    url: '/gameApi/api/start',
    method: 'post',
    data:{
      type:type
    }
  })
}
export function getState(){
  return mallRequest({
    url:'/gameApi/api/result',
    method:'get'
  })
}