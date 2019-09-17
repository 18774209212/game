import mallRequest from '@/utils/mallRequest.js'

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
// 获取状态
export function getState(){
  return mallRequest({
    url:'/gameApi/api/result',
    method:'get'
  })
}