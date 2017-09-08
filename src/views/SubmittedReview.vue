<template>
  <div class="box">
    <logo title="用户注册申请"></logo>
    <div class="input-box">
      <mt-field  placeholder="门店名称"  v-model="phoneNum"  class="input"></mt-field>
      <mt-field  placeholder="联系人"  v-model="phoneNum"  class="input"></mt-field>
      <mt-field  placeholder="联系电话" type="tel" v-model="phoneNum"  class="input"></mt-field>
      <mt-field  placeholder="门店地址" v-model="phoneNum"  class="input"></mt-field>
      <mt-field  placeholder="详细地址" v-model="phoneNum"  class="input"></mt-field>
    </div>
      <btn title="提交审核" id="btn" @click.native="openWin('home')"></btn>
  </div>
</template>

<script>
  export default {
    name: 'SubmittedReview',
    data () {
      return {
        phoneNum:'',
      }
    },
    methods:{
      handleClick(){
        this.jump('/SubmittedReview');
      },
      openWin(url) {
        this.jump('/' + url + '');
      },

    }
  }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .box{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .input-box{
    width: 70%;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
  }
 .input{
   border-bottom: 1px solid #E2E3E2;
 }
  @media (max-height: 400px) {
    #btn {
      display: none;
    }
  }
</style>
