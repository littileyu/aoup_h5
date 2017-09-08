

const host='http://192.168.1.89:80'; //服务器


export const HOST=host;

//接口
export const apiURL={
  login:'/api/orders/delete',    //登录接口
  register:'/api/agents/register',  //代理商注册接口
  send_code:'api/common/send_code',  //发送验证码接口
  check_code:'/api/common/check_code', //验证验证码
  areas:'/api/common/areas',       //查询区域
  balance:'/api/agents/balance',   //查看余额和账单接口
  commission:'/api/agents/commission', //代理商总提成和提成记录接口
  banks:'/api/banks' , //查询代理银行卡操作接口
  delbank:'/api/banks/delbank',  //解绑银行卡接口
  agents: '/api/agents', //代理人基本信息   代理商信息接口
  updateSelf:'/api/agents/updateSelf', //代理人信息修改
  withdraw:'/api/withdraw', //代理人提现申请接口
  list:'/api/withdraw/list' ,   //查看提现记录
  children:'/api/agents/children' ,   //修改代理人信息接口


};

//接口签名
export const signature={
  appSecret:'',
  publicKey:''
}
