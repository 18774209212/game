<template>
  <div class="page">
      <div class="rank">
          <p class="first">
              <span>小明</span>
              <span>290</span>
          </p>
          <p class="second">
              <span>小明</span>
              <span>290</span>
          </p>
          <p class="third">
              <span>小明</span>
              <span>290</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.page{
    width:100%;
    height:100%;
    background: url('../../static/imgs/bg-end.jpg') bottom center no-repeat;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position:relative;
    .rank{
        position:absolute;
        top:29%;
        left:44%;
        p{
            span{
                font-size: 0.45rem;
                color: #ffffff;
                text-shadow: -1px 0 rgb(61,38,12), 0 1px rgb(61,38,12),
                1px 0 rgb(61,38,12), 0 -1px rgb(61,38,12);
                font-weight: bold;
                display:inline-block;
                padding:0rem 0.7rem;
            }
        }
        .first{
            margin-top:0.2rem;
        }
        .second{
            margin-top:1.2rem;
        }
        .third{
            margin-top:1.2rem;
        }
    }
}

</style>