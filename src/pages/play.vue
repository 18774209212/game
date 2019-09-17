<!--正在抓取-->
<template>
    <div class="page">
      <div  class="cutDown">
          <div class="cutDown-btn">
              <CutDown></CutDown>
          </div>
      </div>
      <div class="catch">
          <div class="catch-btn">
              <img src="../../static/imgs/arrow.png"/>
              <p>正在抓取中...</p>
          </div>
      </div>
    </div>
</template>
<script>
import CutDown from '@/components/cutDown'
import {gamecatch,getState} from '@/api/gameapi'
import { mapState, mapMutations } from "vuex";
export default {
    name:'Play',
    components:{
        CutDown
    },
    data() {
        return{
            status:'',
            score:0
        }
    },
    mounted(){
        let type=this.$route.query.type;
        setInterval(function(){
            getState().then(res=>{
                if(res.data.state==2){
                    if(type==="pepper"){
                        this.score=3;
                    }else if(type==="apple"){
                        this.score=2;
                    }else if(type==="orange"){
                        this.score=1;
                    }
                    //把分数加起来
                    
                }
            }).catch(res=>{
                console.log(res);
                if(res.data.state==2){
                    if(type==="pepper"){
                        this.score=3;
                    }else if(type==="apple"){
                        this.score=2;
                    }else if(type==="orange"){
                        this.score=1;
                    }
                    
                }
            })
        },1000)   
    },
    computed:mapState({
        count: state => state.count,  //获取全局变量count的值
    }),
    methods:mapMutations({
        add:'increment'
    })
}
</script>
<style lang='less' scoped>
.page{
    width:100%;
    height: 100%;
    background-image: url('../../static/imgs/bg2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .cutDown{
        padding: 1rem 0;
        .cutDown-btn{
            width: 3.5rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            margin: 0 auto;
            border: 1px solid rgb(207,237,246);
            background-color: rgb(207,237,246);
            color: #ffffff;
            border-radius: 0.5rem;
            font-size: 0.5rem;
            font-weight: bold;
        }
    }
    .catch{
        .catch-btn{
            width: 5rem;
            height: 5rem;
            border: 1px solid rgb(219,246,245);
            background-color: rgb(219,246,245);
            border-radius: 50%;
            margin: 0 auto;
            -moz-box-shadow:4px 4px 5px rgb(151,217,235); 
            -webkit-box-shadow:4px 4px 5px rgb(151,217,235);
            box-shadow:4px 4px 5px rgb(151,217,235);
            position: relative;
            p{
                line-height: 5rem;
                font-size: 0.45rem;
                font-weight: 700;
            }
            img{
                height: 5rem;
                position: absolute;
                top: 0;
                left:-78px;
                animation: rotate 5s linear infinite;
                @keyframes rotate{from{transform: rotate(0deg)}
                    to{transform: rotate(360deg)}
                }
            }
        }
    }
}
</style>