import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: { //唯一数据源，声明全局变量
      count:0,  //总得分
      
    },
    getters: {//针对state数据的过滤，
      count: state => {
        return state.count
      }
    },
    mutations: { //逻辑处理，但Mutation 必须是同步函数
        increment (state,n) {  //传入参数
          // 变更状态
          state.count+=n;
          console.log(state.count);
        }
    },
    actions: {//Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
      setIncrement (context) {
        context.commit('increment')
      }
    },
    getters:{
        getState(state){
            return state.count > 0 ? state.count : 0;
        }
    }
  })
  export default store