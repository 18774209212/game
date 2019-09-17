<!--游戏说明-->
<template>
    <div class="page">
      <div class="info">
          <p>游戏计时：1分钟</p>
          <p>积分获取详情</p>
          <p>辣椒：3分</p>
          <p>苹果：2分</p>
          <p>橙子：1分</p>
      </div>
    </div>
</template>
<script>
export default {
    name:'Info',
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>
.page{
    width:100%;
    height: 100%;
    background-image: url('../../static/imgs/bg-info.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .info{
        position: absolute;
        top: 33%;
        left: 45%;
        p{
            padding: 0.2rem 0;
            font-size: 0.45rem;
            color: #ffffff;
             text-shadow: -1px 0 rgb(61,38,12), 0 1px rgb(61,38,12),
            1px 0 rgb(61,38,12), 0 -1px rgb(61,38,12);
            font-weight: bold;
        }
    }
}
</style>