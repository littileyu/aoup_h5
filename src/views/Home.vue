<template>
  <div class="box">
    <div class="bg">
    </div>
    <div class="top" id="top">
      <div class="top-content">
        <div class="Headportrait">
          <img src="/static/images/Headportrait.png" alt="" width="100%">
        </div>
        <div class="Information">
          <span class="userName" @click="GetUserName()">粉红色的母婴店</span>
          <!--<i class="iconfont icon-bianji2" style="padding-left: 10px" @click="openWin('EditInformation')"></i>-->
          <p class="storeName">{{user.userName}}</p>
          <p class="phone">{{user.phone}}</p>
        </div>
        <div class="optionss">
          <div class="options" @click="openWin('QRcode')">
            <div class="icon">
              <i class="iconfont icon-erweima"></i>
              <span>推荐</span>
            </div>
          </div>
          <div class="options" @click="openWin('ManagementBankCard')">
            <div class="icon">
              <i class="iconfont icon-attachment"></i>
              <span>管理</span>
            </div>
          </div>
          <div class="options" @click="openWin('Wallet1')">
            <div class="icon">
              <i class="iconfont icon-qianbao"></i>
              <span>钱包</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="StatisticsS" id="StatisticsS">-->
      <!--<div class="Statistics">-->
        <!--<p class="pink">30%</p>-->
        <!--<span>提成比例</span>-->
      <!--</div>-->
      <!--<div class="Statistics">-->
        <!--<p class="pink">5790.02</p>-->
        <!--<span>总收益</span>-->
      <!--</div>-->
      <!--<div class="Statistics">-->
        <!--<p class="pink">37</p>-->
        <!--<span>门店总数</span>-->
      <!--</div>-->
    <!--</div>-->
    <div class="content">
      <div class="title">
        <p class="left">我的代理人</p>
        <p class="right">共17人</p>
      </div>
      <div class="list" id="list">
        <mt-loadmore :top-method="a" ref="loadmore">
          <ul id="ul">
            <li v-for="item in list" @click="openWin('MyAgent')">
              <div class="img">
                <img v-lazy="item.url">
              </div>
              <div class="Storeinformation">
                <span class="StoreName">杜小娟</span>
                <span class="Profit">提成<i class="pink">30%</i></span>
                <span class="num">152 0169 1941</span>
                <span class="date">门店 <span class="pink">17</span></span>
              </div>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import jQuery from './jquery.min'

  function stopDrop() {
    var lastY;//最后一次y坐标点
    $(document.body).on('touchstart', function(event) {
      lastY = event.originalEvent.changedTouches[0].clientY;//点击屏幕时记录最后一次Y度坐标。
    });
    $(document.body).on('touchmove', function(event) {
      var y = event.originalEvent.changedTouches[0].clientY;
      var st = $(this).scrollTop(); //滚动条高度
      if (y >= lastY && st <= 10) {//如果滚动条高度小于0，可以理解为到顶了，且是下拉情况下，阻止touchmove事件。
        lastY = y;
        event.preventDefault();
      }
      lastY = y;

    });
  }
//  stopDrop();
  export default {
    name: 'Home',
    data () {
      return {
        user:{
          userName:'',
          phone:'',
          sex:''
        },



        phoneNum:'',
        list:[
          {url:'/static/images/girl1.png'},
          {url:'/static/images/girl2.png'},
          {url:'/static/images/girl3.png'},
          {url:'/static/images/girl3.png'},
          {url:'/static/images/girl1.png'},
          {url:'/static/images/girl3.png'},
          {url:'/static/images/girl2.png'},
          {url:'/static/images/girl3.png'},
          {url:'/static/images/girl2.png'},
          {url:'/static/images/girl3.png'}
        ],
        ssss:'111111111'
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
      GetUserName(){
//        this.$store.commit('setUserName',{ssss:'ssssa',bbbb:'ss'})
//        console.log(this.$store)
        this.$store.dispatch("login",{
        }).then(res=>{
           alert(JSON.stringify(res))
        }).catch(err=>{
            alert(JSON.stringify(err))
        }
        )

      }
    },
    created(){
      this.user = this.$store.state.user;
    },
    mounted() {


    //  this.$store.state.aaaa = 'bbbbb'
    //      this.$store.commit('SET_save','ssss')
    //      console.log(this.$store.state.aaaa);
//      this.$store.commit("set_users",{
//        'nickName':"蓝波",
//        'score':88,
//        'phone':13636574272,
//        'todos':12
//      });
//      console.log(this.$store.state.users);
//      this.$store.commit("set_users_name",{
//        'nickName':"尼禄",
//      })
//      console.log(this.$store.state.users);
//      setTimeout(function () {
//        document.getElementById('list').style.height = document.body.clientHeight - 280 +'px'
//      },500)
    },
  }
</script>

<style scoped>
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .box{
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: "PingFangSC-Light";
  }
  .icon i{
    color: #e74793;
    font-size: 26px;
  }
  p{
    margin: 0px;
    padding: 0px;
  }
  ul{
    margin: 0px;
    padding: 0px;
  }
  .pink{
    color: #e74793;
  }
  .bg{
    width: 100%;
    height: 150px;
    background-image: url(/static/images/bg.png);
    background-size: cover;
  }
  .top{
    width: 90%;
    height: 160px;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -45%;
    box-shadow: 0px 3px 50px 5px #e7e7e7;
  }
  .top-content{
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
  .top .Headportrait{
    width: 80px;
    height: 80px;
    margin-top: -20px;
    border:1px solid #fff;
    float: left;
  }
  .top .Information{
    float: left;
    width: auto;
    height: auto;
    padding-left: 20px;
  }
  .Information .userName{
    font-size: 20px;
    line-height: 50px;
  }
  .Information .phone{
    font-size: 14px;
    line-height: 25px;
    color: #999;
  }
  .top .optionss{
    width: 90%;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -45%;
  }
  .optionss a{
    color: #000;
    text-decoration: none;
  }
  .options .icon{
    width: 28%;
    margin: 0 auto;
    font-size: 12px;
  }
  .optionss .options{
    width: 33%;
    float: left;
    text-align: center;
    margin-top: 25px;
    text-align: center;
    font-size: 14px;
  }

  .storeName{
      font-size: 14px;
    color: #999;
    margin-top: -10px;
  }

  .content{
    width: 85%;
    height: auto;
    margin: 0 auto;
    margin-top: 100px;
  }
  .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .title .left{
    float: left;
  }
  .title .right{
    float: right;
  }
  .list{
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 20px;
    -webkit-overflow-scrolling: touch;
  }
  .content ul{
    width: 100%;
    height: auto;
    list-style: none;
    overflow: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch
  }
  .content ul li {
    width: 45%;
    height: auto;
    overflow: hidden;
    float: left;
    margin-top: 10px;
    -webkit-overflow-scrolling: touch
  }
  .content ul li img{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }
  .content ul li:nth-child(odd){
    float: left;
  }
  .content ul li:nth-child(even){
    float: right;
  }
  .Storeinformation{
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
  .Storeinformation .StoreName{
    font-size: 16px;
    font-weight: 700;
    float:left;
  }
  .Storeinformation .Profit{
    float: right;
  }
  .Storeinformation .Profit i{
    font-size: 16px;
    font-weight: 900;
  }
  .Storeinformation .num{
    float: left;
    font-size: 12px;
  }
  .Storeinformation .date{
    float: right;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    .options .icon{
      font-size: 10px;
    }
    .num{
      font-size: 10px;
    }
    .date{
      font-size: 10px;
    }
    .Storeinformation .StoreName{
      font-size: 14px;
      font-weight: 700;
      float:left;
    }
    .Storeinformation .Profit{
      float: right;
      font-size: 14px;
    }
    .Storeinformation .Profit i{
      font-size: 14px;
      font-weight: 700;
    }
  }
</style>
