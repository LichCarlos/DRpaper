"use strict";const e=require("../../common/vendor.js"),a=require("../../api/apis.js");if(!Array){e.resolveComponent("uni-load-more")()}Math;const t={__name:"classlist",setup(t){const l=e.ref([]),s=e.ref(!1),i={pageNum:1,pageSize:12};let n;e.onLoad((a=>{let{id:t=null,name:l=null,type:s=null}=a;s&&(i.type=s),t&&(i.classid=t),n=l,e.index.setNavigationBarTitle({title:l}),o()})),e.onReachBottom((()=>{s.value||(i.pageNum++,o())}));const o=async()=>{let t;i.classid&&(t=await a.apiGetClassList(i)),i.type&&(t=await a.apiGetHistoryList(i)),l.value=[...l.value,...t.data],i.pageSize>t.data.length&&(s.value=!0),e.index.setStorageSync("storgClassList",l.value),console.log(l.value)};return e.onShareAppMessage((e=>({title:"东软壁纸-"+n,path:"/pages/classlist/classlist?id="+i.classid+"&name="+n}))),e.onShareTimeline((()=>({title:"东软壁纸-"+n,query:"id="+i.classid+"&name="+n}))),e.onUnload((()=>{e.index.removeStorageSync("storgClassList")})),(a,t)=>e.e({a:!l.value.length&&!s.value},l.value.length||s.value?{}:{b:e.p({status:"loading"})},{c:e.f(l.value,((e,a,t)=>({a:e.smallPicurl,b:"/pages/preview/preview?id="+e._id,c:e._id}))),d:l.value.length||s.value},l.value.length||s.value?{e:e.p({status:s.value?"noMore":"loading"})}:{})}},l=e._export_sfc(t,[["__scopeId","data-v-c8a5f5e6"]]);t.__runtimeHooks=6,wx.createPage(l);
