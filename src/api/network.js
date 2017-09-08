
import axios from 'axios'
import querystring from 'querystring'
import store from '../store/index.js'

  axios.defaults.timeout = 500;// 超时（ms）
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';      //配置请求头
  // axios.defaults.baseURL = '';  //配置接口地址
  axios.defaults.transformRequest= [function (data) {
    return querystring.stringify(data)
  }];


// 添加请求拦截器
  axios.interceptors.request.use(config=>{
    // let accessToken = window.localStorage.getItem("accessToken");
    if(store.state.login){
      // config.headers.common['accessToken'] = 'b0c4b5c9ba2943e8850928a2a2dcaa1a';
    }

    // 验证token
    if(config.headers){
      //config.headers.Authorization = `woshitoken`;
    }
    return config;
  }, error=>{
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(response=> {
    if (response && response.data.code == 70001 &&  window.localStorage.getItem("accessToken")) {
      return network.error(response.data,'token');
    } else{
      // console.log(response.data);
      return response;
    }
  }, error=>{
    return Promise.reject(error);
  });



 const network={
      //get请求
      fn_Get:function(url,params,config){
        var _this=this;
          config = { params:params }
          return axios.get(url, config).catch(res=>_this.error(res));
      },

      //post请求
      fn_Post:function(url,data,config){
          var _this=this;
        if(!config) config = {};
        return axios.post(url, data, config).catch(res=>_this.error(res));
      },

      fn_Put:function(url,data,config){
        var _this=this;
        return axios.put(url, data, config).catch(res=>_this.error(res));
      },

      fn_Delete:function(url,params,config){
        var _this=this;
        if(!config){ config = { params:params } }else{ config.params = params; }
        return axios.delete(url, config).catch(res=>_this.error(res));
      },

      //遇到错误的一层处理
      error(res,type){  //尝试使用备胎服务器？
        if(type=='token'){
          console.log({msg:"身份验证过期"}); //跳转到登录页面
          return Promise.reject(res);
        }
        console.log({msg:"网络连接失败,请稍后再试"});
        var error={code:50001,data:{msg:"网络连接失败,请稍后再试"}}
        //遇到错误的二层处理
        return Promise.reject(error);
      }
};

 export default network

