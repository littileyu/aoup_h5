<template>
  <div class="box">
    <div class="input-box">
      <mt-field  type="tel"  placeholder="请输入当前的提现密码" v-model="phoneNum" autofocus="autofocus" class="input"></mt-field>
    </div>
    <btn text="下一步" style="position: absolute;top: 150px;" @click.native="openWin('ChangePayPassword2')"></btn>
    <span class="ForgotPassword">忘记密码</span>
  </div>
</template>

<script>
  export default {
    name: 'ChangePayPassword1',
    data() {
      return {
        phoneNum: '',
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      }
    },

  }
</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin:  0 auto;
  }
  .input-box{
    width: 100%;
    height: auto;
    margin-top: 40px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2 ;
  }
  .ForgotPassword{
    color: #999;
    float: right;
    margin-top: 10px;
  }
</style>
