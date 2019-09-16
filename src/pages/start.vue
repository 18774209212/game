<!--游戏开始-->
<template>
    <div class="page">
      <!-- <img src="../../static/imgs/bg2.png"/> -->
      <!-- 倒计时 -->
      <div  class="cutDown">
          <el-button  type="primary" round>
              <CutDown></CutDown>
          </el-button>
      </div>
      <div class="content">
          <div class="score">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                    <img src="../../static/imgs/num1.jpg"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/num2.jpg"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/num3.jpg"/>
                </el-col>
            </el-row>
          </div>
         <div class="score">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                    <img src="../../static/imgs/num1.jpg"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/num2.jpg"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/num3.jpg"/>
                </el-col>
            </el-row>
          </div>
          <div class="score">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                    <el-button type="primary" round @click="toPlay">苹果</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" round>橙子</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" round>辣椒</el-button>
                </el-col>
            </el-row>
          </div>
          <div class="back">
              <el-row>
                  <el-col :offset="18" :span="6">
                      <img src="../../static/imgs/back.jpg"/>
                  </el-col>
              </el-row>
          </div>
      </div>
    </div>
</template>
<script>
import CutDown from '@/components/cutDown'
export default {    
    name:'Start',
    components:{
        CutDown
    },
    data() {
        return{}
    },
    methods:{
        toPlay(){
            this.$router.push({path:'/play'})
        }
    }
}
</script>
<style lang='less' scoped>
.page{
    width:100%;
    height: 1000px;
    background-image: url('../../static/imgs/bg2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .cutDown{
        padding: 1rem 0;
    }
    .content{
        .back{
            img{
                width:2rem;
                height: 2rem;
            }
        }
    }
}
</style>