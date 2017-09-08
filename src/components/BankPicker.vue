<template>
  <div class="BankPricker-box " >
    <input type="text" readonly class="BankPricke-input" @click="show()"  v-model="text">
    <div class="shadow" @click="hide()" ></div>
    <div class="BankPricker-main">
      <div class="BankPricker-top">
        <p class="BankPricker-title">选择银行卡</p>
      </div>
      <div class="BankPricker-list">
        <ul class="BankPricker-ul">
          <li class="BankPricker-li" :class="{'BankPricker-checked':item.id == checkedId}" v-for="(item,index) in dataList" @click="checked(index)" >
            {{item.name}}（{{item.num}}）
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'BankPicker',
        props:{
          text:{
            type:String,
            default:'请选择银行卡'
          }

        },
        data() {
            return {
                dataList:[
                  {name:'上海银行 储蓄卡',num:'1234',id:0},
                  {name:'上海银行 储蓄卡',num:'1233',id:1},
                  {name:'上海银行 储蓄卡',num:'1235',id:2},
                  {name:'上海银行 储蓄卡',num:'1236',id:3},
                  {name:'上海银行 储蓄卡',num:'1221',id:4},
                  {name:'上海银行 储蓄卡',num:'1234',id:5},
                  {name:'上海银行 储蓄卡',num:'1534',id:6},
                  {name:'上海银行 储蓄卡',num:'5334',id:7},
                  {name:'上海银行 储蓄卡',num:'1664',id:8},
                ],
                checkedId:''
            }
        },
        methods: {
            openWin(url) {
                this.jump('/' + url + '');
            },
          show(){
              document.querySelector('.BankPricker-main').style.height = '300px';
              document.querySelector('.shadow').style.height = '100%';
          },
          hide(){
            document.querySelector('.BankPricker-main').style.height = '0px';
            document.querySelector('.shadow').style.height = '0%';
          },
          checked(index){
              this.text = this.dataList[index].name +'('+ this.dataList[index].num +')';
              this.hide();
              this.$emit('change',this.dataList[index].id );
              this.checkedId = this.dataList[index].id;
          }
        }
    }
</script>

<style scoped>
  .BankPricker-box{
    width: 100%;
    height: 100%;
    display: block;
    color: #000!important;
  }
  .none{
    display: none;
  }
  .shadow{
    width: 100%;
    height: 0%;
    background: rgba(0, 0, 0, 0.31);
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
  }
  .BankPricker-main{
    width: 100%;
    height: 0px;
    background: #fff;
    position: fixed;
    bottom: 0px;
    transition: all .3s;
    display: block;
    z-index: 999999999;
    left: 0px;
  }
  .BankPricker-top{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E50081;
    text-align: center;
    line-height: 50px;
  }
  .BankPricker-list{
    width: 100%;
    height: 250px;
    overflow: scroll;
  }
  .BankPricker-ul{
    width: 100%;
    height: 100%;
  }
  .BankPricker-li{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;
    line-height: 60px;
    padding-left: 20px;
  }
  .BankPricker-checked{
    color: #e50081;
  }
</style>
