<!--主页面-->
<template>
    <div class="page">
        <div class="content">
            <div class="start-btn">
                <el-button type="primary" round @click="toStart">开始游戏</el-button>
            </div>
            <div class="info-btn">
                <p @click="toInfo">游戏说明</p>
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
<style lang='less' scoped>
.page{
    width:100%;
    height: 1000px;
    background-image: url('../../static/imgs/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position:relative;
    .content{
        .start-btn{
            position: absolute;
            top:60%;
            left: 50%;
        }
        .info-btn{
            position: absolute;
            top:68%;
            left: 50%;
            cursor: pointer;
        }
    }

}
</style>