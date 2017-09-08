<template>
  <div class="box">
      <div class="top">
        <p class="money pink">{{allMoney}}</p>
        <span>可提现（元）</span>
      </div>
      <div class="main">
        <div class="input">
          <i class="icon">¥</i>
          <input type="tel" id="money" v-model="inputMoney">
          <span @click="WithdrawalsAll()">全部提现</span>
        </div>
        <div class="BankCards">
          <span>到账银行卡</span>
          <span class="Cards" > <BankPicker @change="checked"></BankPicker></span>
        </div>
        <InputPassword class="btn" :allMoney="allMoney" :inputMoney="inputMoney" @change="getValue"></InputPassword>
      </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'Withdrawals',
    data () {
      return {
        phoneNum:'',
        allMoney:'18.97',
        inputMoney:''
      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
      },
      WithdrawalsAll(){//全部提现
        $('#money').val($('.money').text());
        this.inputMoney = this.allMoney;
      },
      checked(val){//选中的银行
        console.log(val);
      },
      getValue(val){//提现金额
        console.log(val);
        Toast({
          message: '提现成功',
          position: 'bottom',
          duration: 2000
        });
        this.openWin('Wallet1');
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
  }
  .top{
    width: 100%;
    height: 130px;
    background: #fff;
    text-align: center;
  }
  .pink{
    color: #E64692;
  }
  .money{
    font-size: 40px;
    font-weight: 900;
    line-height: 50px;
    margin-top: 40px;
  }
  .top span{
    font-size: 16px;
  }
  .main{
    width: 95%;
    height: 50px;
    margin: 0 auto;
  }
  .main .input {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
  .icon{
    font-size: 26px;
    float: left;
    line-height: 50px;
  }
  .input input{
    width: 60%;
    height: 100%;
    float: left;
    outline: none;
    margin-left: 20px;
    font-size: 34px;
  }
  .input span{
    float: right;
    line-height: 50px;
  }
  .BankCards{
    width: 100%;
    height: 40px;
  }
  .Cards{
    color:#00295c!important;
  }
  .BankCards span{
    float: left;
    display: inline-block;
    line-height: 40px;
  }
  .BankCards .Cards{
    color: #183462;
    padding-left: 20px;
    line-height: 40px;
  }
  .btn{
    width: 95%;
    height: 50px;
    background: #E64692!important;
    color: #fff;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 30px!important;
    text-align: center;
  }

</style>
