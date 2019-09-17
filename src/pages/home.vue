<!--主页面-->
<template>
    <div class="view">
        <div class="page">
            <div class="content">
                <div class="start-btn">
                    <!-- <el-button type="primary" round @click="toStart">开始游戏</el-button> -->
                    <img src="../../static/imgs/start-btn.png" @click="toStart"/>
                </div>
                <div class="info-btn">
                    <p @click="toInfo">游戏说明</p>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
import {Button} from 'element-ui'
export default {
    name:'Home',
    components:{
       Button
    },
    data() {
        return{}
    },
    methods:{
        toStart(){
            this.$router.push({path:'/Start'})
        },
        toInfo(){
            this.$router.push({path:'/Info'})
        }
    }
}
</script>
<style lang='stylus' scoped>
.view{
    width:100%;
    height: 100%;
.page{
    width:100%;
    height: 100%;
    background: url('../../static/imgs/bg.png') bottom center no-repeat;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    overflow:hidden;
    .content{
        .start-btn{
            position:absolute;
            top: 54%;
            left: 43%;
            img{
                width:5rem;
                height:1.5rem;
            }
        }
        .info-btn{
            position:absolute;
            top: 65%;
            left: 43%;
            cursor: pointer;
            p{
                width:5rem;
                height:1.5rem;
                font-size:0.45rem;
                text-align:convert;
            }
        }
    }

}   
}
</style>