<template>
  <div class="wrap">
    <div class="container-fluid">
      <logo title="代理商注册申请"></logo>
    </div>
    <div class="container-fluid input-box">
      <mt-field  placeholder="请输入绑定手机号码" type="tel" v-model="phoneNum"  class="input"></mt-field>
      <mt-field  placeholder="请输入验证码" type="tel" v-model="verificationCode" class="input verificationCode"></mt-field>
      <div class="sendVerificationCode" @click="sendVerificationCode()">发送验证码</div>
    </div>
    <div class="container-fluid footer pa">
      <btn text="下一步" id="btn"  @click.native="handleClick"></btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      phoneNum:'',
      verificationCode:''
    }
  },
  methods:{
    handleClick(){
        this.jump('/SubmittedReview');
    },
    sendVerificationCode(){
      var vm = this;
      var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
      if(!testPhone.test(vm.phoneNum)){
        alert('请输入正确的手机号');
        return;
      }
      this.$store.dispatch("send_code",{
        codeType:'BIND_AGENT_PHONE',
        phone:vm.phoneNum
      }).then(res=>{
        if(res.data.code==20000){
            alert('发送成功')
        }else {

        }
      }).catch(err=>{
          alert(JSON.stringify(err))
        }
      )

    },
    submit(){
      var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
      if(!testPhone.test(this.phoneNum)){
        alert('请输入正确的手机号')
        return
      }


    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../assets/css/variables.less";
  .wrap{
    height: 100%;
  }
  .footer{
    bottom: 20px;
  }
  .input-box{
    width: 70%;
    height: auto;
    margin-top: 30px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2;
    margin-top: 10px;
  }
  .verificationCode{
    width: 58%;
    float: left;
  }
  .sendVerificationCode{
    width: 39%;
    height: 100%;
    padding: 10px;
    text-align: center ;
    float: right;
    color: @primaryColor;
    border:1px solid @primaryColor;
    margin-top:  20px;
  }
  @media (max-height: 400px) {
    #btn {
      display: none;
    }
  }
</style>
