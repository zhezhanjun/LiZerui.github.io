"use strict";(self["webpackChunkdemo03"]=self["webpackChunkdemo03"]||[]).push([[176],{6789:function(t,o,e){e.d(o,{Z:function(){return r}});var n=function(){var t=this,o=t._self._c;return o("div",{ref:"contentList",staticClass:"content-list"},[o("div",{staticClass:"left",on:{click:t.goToUserInside}},[o("div",{staticClass:"imgbox"},[o("img",{staticClass:"auto-img",attrs:{src:t.contentData.avatar,alt:""}})]),o("div",{staticClass:"textbox"},[o("div",{staticClass:"top"},[t._v(t._s(t.contentData.content))]),o("div",{staticClass:"bottom"},[t._v(" 帖子"+t._s(t.contentData.counter.article_count)+"  浏览"+t._s(t.contentData.counter.view_count)+" ")])])]),o("div",{staticClass:"follow-icon",on:{click:t.toFollow}},[t._v(" "+t._s(1==t.contentData.isFollow?"已关注":"关注")+" ")])])},i=[],s=(e(7658),{props:{contentData:{}},created(){this.$nextTick((()=>{this.sentHeight()}))},methods:{toFollow(){let t=window.localStorage.getItem("token");t?this.$emit("followHandel"):this.$router.push({name:"beforeLogin"})},sentHeight(){this.$emit("getHeight",this.$refs.contentList.clientHeight)},goToUserInside(){"userInside"!=this.$route.name&&this.$router.push({name:"userInside",params:{id:this.contentData.id}})}}}),a=s,l=e(1001),c=(0,l.Z)(a,n,i,!1,null,"387a15ac",null),r=c.exports},4176:function(t,o,e){e.r(o),e.d(o,{default:function(){return u}});var n=function(){var t=this,o=t._self._c;return o("div",{ref:"allBomb",staticClass:"all-bomb-view",on:{scroll:t.scrollHandel}},[o("div",{staticClass:"top-nav"},[o("div",{staticClass:"goback",on:{click:t.goBack}},[o("van-icon",{attrs:{name:"arrow-left"}})],1),o("div",{staticClass:"title"},[t._v("全部爆社")])]),o("div",{staticClass:"content-box"},t._l(t.contentData,(function(e){return o("div",{key:e.id,staticClass:"content-list-wrap"},[o("UserMsgCom",{attrs:{contentData:e,isFollow:e.isFollow},on:{followHandel:function(o){return t.followHandel(e)},getHeight:t.getHeight}})],1)})),0)])},i=[],s=(e(7658),e(6789)),a=e(8711),l=e(9039),c={name:"allBomb",components:{UserMsgCom:s.Z},data(){return{contentData:[],timer:null,childrenTotalHeight:0,loading:!0}},created(){this.getHoneBombAllContentData(0),this.timer=setTimeout((()=>{this.getFollowedData2(),this.timer=null}),100)},methods:{goBack(){this.$router.go(-1)},getHoneBombAllContentData(t){(0,a.bP)({axios:this.$axios},t).then((({data:t})=>{t.data.forEach((t=>{t["isFollow"]=!1})),this.contentData.push(...t.data)}))},followHandel(t){t.isFollow=!t.isFollow;let o=JSON.parse(window.localStorage.getItem("followedData2")),e=[];o.forEach((t=>{e.push(t.id)})),t.isFollow&&-1==e.indexOf(t.id)?(o.push(t),window.localStorage.setItem("followedData2",JSON.stringify(o))):o.forEach(((e,n)=>{e.id==t.id&&(o.splice(n,1),window.localStorage.setItem("followedData2",JSON.stringify(o)))}))},scrollHandel:(0,l.P)((function(){this.$refs.allBomb.scrollTop+500>=this.childrenTotalHeight&&1==this.loading&&(this.getHoneBombAllContentData(1),this.loading=!1),0==this.loading&&this.$refs.allBomb.scrollTop>=this.childrenTotalHeight&&this.$toast("没有更多了哦~")}),500),getHeight(t){this.childrenTotalHeight+=t},getFollowedData2(){let t=JSON.parse(window.localStorage.getItem("followedData2")),o=[];t.forEach((t=>{o.push(t.id)})),this.contentData.forEach((t=>{-1!=o.indexOf(t.id)?t.isFollow=!0:t.isFollow=!1}))}}},r=c,h=e(1001),d=(0,h.Z)(r,n,i,!1,null,"fa461444",null),u=d.exports},8711:function(t,o,e){e.d(o,{JV:function(){return c},Sm:function(){return s},bP:function(){return r},fn:function(){return h},gu:function(){return a},jy:function(){return n},no:function(){return d},pR:function(){return l},zF:function(){return i}});const n=({axios:t},o)=>t.get(`/JSON/home/homeRecommend${o}.json`),i=({axios:t},o)=>t.get(`/JSON/home/video${o}.json`),s=({axios:t},o)=>t.get(`/JSON/home/article${o}.json`),a=({axios:t},o)=>t.get(`/JSON/home/photo${o}.json`),l=({axios:t},o)=>t.get(`/JSON/home/Essence${o}.json`),c=({axios:t},o)=>t.get(`/JSON/home/bombRecommend${o}.json`),r=({axios:t},o)=>t.get(`/JSON/home/bombAll${o}.json`),h=({axios:t},o)=>t.get(`/JSON/home/bombContent${o}.json`),d=({axios:t})=>t.get("/JSON/home/search.json")}}]);