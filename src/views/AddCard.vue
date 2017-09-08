<template>
  <div class="box">
    <div class="top">
      <p>请绑定持卡人本人的银行卡</p>
    </div>
    <div class="input-box">
      <mt-field  placeholder="持卡人姓名" v-model="userName" class="input"></mt-field>
      <mt-field  placeholder="银行卡号" type="tel" v-model="cardNum" class="input"></mt-field>
      <mt-field  placeholder="银行卡类型"  v-model="bankType" class="input"></mt-field>
      <mt-field  placeholder="预留手机号码" type="tel" v-model="bankPhone" class="input"></mt-field>
    </div>
    <div class="btn" @click="openWin('SendVerificationCode')">下一步</div>
  </div>
</template>

<script>
  export default {
    name: 'AddCard',
    data () {
      return {
        userName:'',
        cardNum:'',
        bankType:'',
        bankPhone:''
      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
      }

    }
  }


</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin: 0 auto;
  }
  p{
    margin: 0px;
    padding: 0px;
  }
  .top{
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #ccc;
    line-height: 40px;
    overflow: hidden;
  }
  .input-box{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .input{
    border-bottom: 1px solid #ccc;
  }
  .btn{
    width: 100%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
  }
</style>
