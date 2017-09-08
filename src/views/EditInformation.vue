<template>
  <div class="box">
    <div class="input-box">
      <ul>
        <li>
          <span>名称</span>
          <mt-field  placeholder="小芬芬" v-model="verificationCode" ></mt-field>
        </li>
        <li>
          <span>电话</span>
          <mt-field  placeholder="158 1100 9966" type="tel" v-model="verificationCode"></mt-field>
        </li>
        <li>
          <span>提成比例</span>
          <mt-field  placeholder="30" type="tel" v-model="verificationCode"></mt-field>
        </li>
      </ul>
    </div>
    <div class="btn" @click="openWin('home')">确认修改</div>
    <div class="btn2" @click="openWin('home')">关闭账号</div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'EditInformation',
    data() {
      return {
        phoneNum: '',
        verificationCode: ''
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      },
      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    },

  }
</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
  }

  .input-box{
    width: 100%;
    height: auto;
  }
  .input-box ul {
    width: 100%;
    height: auto;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .input-box ul li{
    width: 100%;
    /*height: auto;*/
    border-bottom: 1px solid #ccc;
    line-height: 55px;
    overflow: hidden;
    padding: 10px 0px 10px 0px ;
  }
  .input-box ul li span{
    width: 25%;
    display: inline-block;
    float: left;
    font-size: 16px;
    color: #747574;
  }
  /*.input-box ul li input{*/
    /*width: 60%;*/
    /*height: 40px;*/
    /*outline: none;*/
    /*float: left;*/
    /*border: 0px;*/
  /*}*/
  .btn{
    width: 95%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: fixed;
    bottom: 90px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
  }
  .btn2{
    width: 95%;
    height: 50px;
    border: 1px solid #E64692;
    color: #E64692;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
    background: #ffffff;
  }
  @media (max-height: 400px) {
    .btn {
      display: none;
    }
    .btn2 {
      display: none;
    }
  }
</style>
