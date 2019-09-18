<!--倒计时-->
<template>
    <p>{{minute}}:{{second}}</p>
</template>
<script>
import config from '@/vuex/config'
export default {
  data() {
    return {
       minutes: config.minute, //分
       seconds: config.second, //秒
    }
  } ,
  methods: {
    // 倒计时
    num(n) {
      // 倒计时结束重新刷新页面
      if (this.minutes === 0 && this.seconds === 2) {
        this.$message.warning('游戏即将结束');
      }
      if (this.minutes === 0 && this.seconds === 0) {
        // window.location.reload();
        // 跳转到游戏结束页面
        this.$router.push({path:'/end'});
      }
      return n < 10 ? '0' + n : '' + n;
    },
    // 倒计时
    timer() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
          config.setMinute(_this.minutes);
          config.setSecond(_this.seconds);
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          config.setMinute(0);
          config.setSecond(0);
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
          config.setMinute(_this.minutes);
          config.setSecond(_this.seconds);
        }
      }, 1000);
    },
  },
  mounted() {
    // 倒计时
    this.timer();
  },
  watch: {
    // 倒计时
    second: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    // 倒计时
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  computed: {
    // 倒计时
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    },
  },
}
</script>