<!--游戏开始-->
<template>
    <div class="page">
      <!-- <img src="../../static/imgs/bg2.png"/> -->
      <!-- 倒计时 -->
      <div  class="cutDown">
          <div class="cutDown-btn">
              <CutDown></CutDown>
          </div>
      </div>
      <div class="content">
          <div class="score">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                    <img src="../../static/imgs/num1.png"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/num3.png"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/num2.png"/>
                </el-col>
            </el-row>
          </div>
         <div class="fruit">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                    <img src="../../static/imgs/f1.png"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/f2.png"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/f3.png"/>
                </el-col>
            </el-row>
          </div>
          <div class="fruit-btn">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                    <img src="../../static/imgs/fruit1.png" @click="toCatchApple()"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/fruit2.png" @click="toCatchOrange()"/>
                </el-col>
                <el-col :span="6">
                    <img src="../../static/imgs/fruit3.png" @click="toCatchPepper()"/>
                </el-col>
            </el-row>
          </div>
          <div class="back">
              <el-row>
                  <el-col :offset="18" :span="6">
                      <img src="../../static/imgs/back.jpg" @click="toBack()"/>
                  </el-col>
              </el-row>
          </div>
      </div>
    </div>
</template>
<script>
import CutDown from '@/components/cutDown'
import { format } from 'util'
import {gamecatch} from '@/api/gameapi'
export default {    
    name:'Start',
    components:{
        CutDown
    },
    data() {
        return{}
    },
    methods:{
        toCatchApple(){
            let type="apple";
            gamecatch(type).then(res=>{
                if(res.status==200){
                    //进入抓取页面
                    this.$router.push({path:'/play',query:{type:type}})
                }
            }).catch(res=>{
                if(res.status==200){
                    //进入抓取页面
                    this.$router.push({path:'/play',query:{type:type}})
                }
            })
        },
        toCatchOrange(){
            let type="orange";
            this.$router.push({path:'/play',query:{type:type}})
        },
        toCatchPepper(){
            let type="pepper";
            this.$router.push({path:'/play',query:{type:type}})
        },
        toBack(){
            this.$router.go(-1);
        }
    }
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
    .content{
        .score{
            margin-top: 0.3rem;
            // img{
            //     width:3.5rem;
            //     height: 2.5rem;
            // }
        }
        .back{
            img{
                width:2rem;
                height: 2rem;
            }
        }
    }
}
</style>