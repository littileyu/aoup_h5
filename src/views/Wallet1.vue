<template>
  <div class="box">
    <div class="top">
      <p class="money pink">7966.55</p>
      <span class="Title">总金额（元）</span>
    </div>
    <div class="tabs">
        <div class="tab"  :class="{'checked':listParams.orderStatus == '0'}"  @click="Switch('0')">金额明细</div>
        <div class="tab"  :class="{'checked':listParams.orderStatus == '1'}"  @click="Switch('1')">提现记录</div>
        <div class="tab"  :class="{'checked':listParams.orderStatus == '2'}"  @click="Switch('2')">银行卡</div>
    </div>
    <div class="list" id="list">
      <mt-loadmore :top-method="a" ref="loadmore">
        <ul>
          <li v-for="item in 10">
          <p class="title">李小白的余额</p>
          <span class="date">2017-08-17 18:11:36</span>
          <p class="plus">+99</p>
          </li>
        </ul>
      </mt-loadmore>
    </div>
    <btn text="提现" @click.native="openWin('Withdrawals')"></btn>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  export default {
    name: 'Wallet1',
    data () {
      return {
        phoneNum:'2232323',
        listParams: {pageNumber:1,pageSize:10,orderStatus:'0'},
        listData:[],
      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
      },
      a(){
        var vm = this;
        setTimeout(function () {
          vm.$refs.loadmore.onTopLoaded();
        },1000)
      },
      b(){
        alert('b')
      },
      c(){
        alert('c')
      },
      Switch(type){
        if(type == this.listParams.orderStatus){
          return
        }
        Indicator.open('加载中...');
        setTimeout(function () { //调接口
          Indicator.close();
        },1000)
        this.listParams.orderStatus = type
        var Title = ["金额明细","提现记录","银行卡"]
        document.getElementsByClassName('Title')[0].innerHTML = Title[type]
      }
    },
    mounted() {
      setTimeout(function () {
        document.getElementById('list').style.height = document.body.clientHeight - 130 - 40 -80 +'px';
      },500)
      }
  }
</script>

<style scoped>
  html,body{
    background: #F7F8F7;
  }
  .box{
    width: 100%;
    height: 100%;
    background: #F7F8F7;
    overflow: hidden;
  }
  .top{
    width: 100%;
    height: 130px;
    background: #fff;
    text-align: center;
    overflow: hidden;
  }
  .tab{
    color: #000;
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
  .tabs{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .tabs .tab{
    width: 33%;
    height: 100%;
    float: left;
    text-align: center;
  }
  .checked{
    border-bottom: 2px solid #E64692;
  }
  .list{
    width: 95%;
    height: 100%;
    margin: 0 auto;
    overflow: scroll;
  }
  .list ul{
    width: 100%;
    height: auto;
    list-style: none;
    text-align: left;
  }
  .list ul li{
    width: 100%;
    height: 80px;
    overflow: hidden;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  .list ul li .plus{
    float: right;
    margin-top: -10px;
    font-size: 22px;
  }
  .list ul .title{
    line-height: 40px;
  }
  .list ul .date{
    line-height: 40px;
  }

</style>
