import {HOST,apiURL} from '../api/api.js'
import network from '../api/network.js'
const actions= {
  login({dispatch,commit},value){
     return new Promise((resolve, reject)=>{
       network.fn_Get(HOST+apiURL.list,value).then(res=>{
         if(res.data.code==20000){
           resolve(res.data);
         }else {
           reject(res.data);
         }
         // if(res.data.code=="2000"){
         //   // commit("setAccessToken",res.AccessToken);
         //   resolve(res);
         // }else{
         //   reject(res);
         // }
       }).catch(res=> { //失败
           reject(res);
         })
     })
    // commit('setAccessToken',value);
    // return Promise.resolve(value)
  },
  send_code({dispatch,commit},value){
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.send_code,value).then(res=>{
        if(res.status=="200"){
          resolve(res);
        }else{
          reject(res);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },









}



export default actions;
