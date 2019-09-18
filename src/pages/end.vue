<template>
  <div class="page">
      <div class="rank">
          <p class="first">
            <span>得分：{{score}}分</span>
          </p>
      </div>
      <div class="back">
        <el-row>
            <el-col :offset="18" :span="6">
                <img src="../../static/imgs/back.jpg" @click="toBack()"/>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import config from '@/vuex/config'
export default {
    data(){
        return{
            score:config.score
        }
    },
    methods:{
        toBack(){
            this.$router.push({path:'/home'})
        }
    }
}
</script>

<style lang="stylus" scoped>
.page{
    width:100%;
    height:100%;
    background: url('../../static/imgs/score.jpg') bottom center no-repeat;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position:relative;

    .rank{
        position:absolute;
        top:35%;
        left:44%;
        p{
            span{
                font-size: 50px;
                color: #ffffff;
                text-shadow: -1px 0 6px rgb(61,38,12), 0 1px 6px rgb(61,38,12),
                1px 0 6px rgb(61,38,12), 0 -1px 6px rgb(61,38,12);
                font-weight: bold;
                display:inline-block;
                padding:0rem 0.7rem;
            }
        }
        .first{
            margin-top:0.2rem;
        } 
    }
    .back{
        position: absolute;
        top: 68%;
        left: 70%;
        img{
            width: 2rem;
            height: 2rem;
        }
    }
}

</style>