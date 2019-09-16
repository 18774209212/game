<!--正在抓取-->
<template>
    <div class="page">
      <div  class="cutDown">
          <el-button  type="primary" round>
              <CutDown></CutDown>
          </el-button>
      </div>
    </div>
</template>
<script>
import CutDown from '@/components/cutDown'
export default {
    name:'Play',
    components:{
        CutDown
    },
    data() {
        return{}
    },
    methods:{}
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
}
</style>