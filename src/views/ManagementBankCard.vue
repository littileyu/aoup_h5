<template>
  <div class="box">
    <div class="cards">
      <ul>
        <li @click="show()">
          <p class="cardName">建设银行</p>
          <p class="cardType">储蓄卡</p>
          <p class="cardNum">**** **** **** {{test}}</p>
        </li>
        <li>
          <p class="cardName">中国银行</p>
          <p class="cardType">储蓄卡</p>
          <p class="cardNum">**** **** **** {{getLastCardBun('2221213123341')}}</p>
        </li>
      </ul>
      <div class="addCard" @click="openWin('AddCard')">
        <i class="icon">+</i>
        <p>添加一张新的银行卡</p>
      </div>
    </div>

      <div class="changePassword" @click="openWin('ChangePayPassword1')">
        提现密码更改
      </div>

  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'ManagementBankCard',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        cardNum: '9876388288299199399412'
      }
    },
    computed: {
      test: function (val) {
        return this.cardNum.substring(this.cardNum.length, this.cardNum.length - 4)
      }
    },
    methods: {
      getLastCardBun(val){
        return val.substring(val.length, val.length - 4)
      },
      openWin(url){
        this.jump('/'+ url +'');
      },
      show(){
        MessageBox.prompt(' ','解除绑定银行卡',{inputPlaceholder: '请输入提现密码',inputType:'tel'}).then(({ value, action }) => {
          if(value){
            MessageBox.alert(value, '密码');
          }
        });
      }
    },
    mounted(){
      MessageBox.prompt(' ','请设置提现密码',{inputPlaceholder: '请输入6位数字密码',inputType:'password'}).then(({ value, action }) => {
        if(value){
          MessageBox.alert(value, '密码');
        }
      });
  }

  }
</script>

<style scoped>
  p{
    margin: 0px;
    padding: 0px;
  }
  .box{
    width: 95%;
    height: auto;
    margin: 0 auto;
  }
  .cards{
    width: 100%;
    height: auto;
  }
  .cards ul{
    width: 100%;
    height: auto;
    list-style: none;
    padding: 0px;
  }
  .cards ul li{
    width: 100%;
    height: 130px;
    margin-top: 20px;
    background:  -webkit-linear-gradient(#F56667, #F55487) ;
    border-radius: 5px;
  }
  .cards ul li p{
    color: #fff;
    font-size: 26px;
    font-weight: 900;
    padding-left: 15px;
    padding-top: 10px;
  }
  .cards ul li .cardType{
    font-size: 16px;
  }
  .addCard{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    margin-top: 30px;
  }
  .addCard .icon{
    font-size: 26px;
    font-weight: 900;
    float: left;
  }
  .addCard p{
    float: left;
    padding-left: 10px;
  }
  .changePassword{
    width: 95%;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
    color: black;
  }
  .cancelButton{
    color: red;
    background: red;
  }
  .mint-msgbox-confirm{
    color: red;
  }
  @media (max-height: 400px) {
    .changePassword {
      display: none;
    }
  }
</style>
