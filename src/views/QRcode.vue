<template>
  <div class="box">
    <div class="top">
      <div class="Headportrait">
        <img src="/static/images/Headportrait.png" alt="" width="100%">
      </div>
      <div class="Information">
        <p>粉红色的母婴店</p>
        <span>河北省 唐山市 铁岭村村头1弄56号</span>
        <span>李小白 139 9966 1236</span>
      </div>
    </div>
    <div class="content">
      <div class="codeImg">
        <img src="/static/images/QRcode.png" alt="" width="100%">
      </div>

    </div>
    <div class="footer">
      <div class="text">
        描述这个二维码具有什么属性的魔力，并且说
        明扫码会发生什么，说明扫码的人会成为这个
        二维码主人的奴隶，并且加入该组织，主人会
        给奴隶一定的提成作为奖赏。
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QRcode',
    data () {
      return {
        phoneNum:'',
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
    margin: 0px auto;
    padding: 0px;
    overflow-x: hidden;
  }
  .top{
    width: 100%;
    height: 100px;
    overflow: hidden;
    margin-top: 20px;

  }
  .Headportrait{
    width: 80px;
    height: 80px;
    float: left;
    overflow: hidden;
  }
  .Information{
    overflow: hidden;
    padding-left: 20px;
  }
  .Information p{
    font-size: 16px;
    color: #555;
    line-height: 30px;
    margin: 0px;
  }
  .Information span{
    font-size: 14px;
    color: #999;
    line-height: 12px;
    display: inline-block;
  }
  .content{
    width: 75%;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
  }
  .content .codeImg{
    width: 100%;
  }
  .footer{
    width: 75%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .text{
    color: #333333;
  }
</style>
