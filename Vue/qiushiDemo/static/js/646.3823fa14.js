"use strict";(self["webpackChunkdemo03"]=self["webpackChunkdemo03"]||[]).push([[646],{7291:function(t,e,o){o.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return t.contentData?e("div",{ref:"contentList",staticClass:"content-list",on:{click:t.addHistoryData}},[t.contentData.hot?e("div",{staticClass:"hot"},[e("div",{staticClass:"hot-icon"}),e("div",{staticClass:"hot-text"},[t._v("热门")])]):t._e(),e("div",{staticClass:"content-top-user"},[e("div",{staticClass:"user-left"},[e("div",{staticClass:"imgbox",on:{click:t.goToUserInside}},[e("img",{staticClass:"auto-img",attrs:{src:t.contentData.user.thumb,alt:""}})]),e("div",{staticClass:"user-name"},[t._v(t._s(t.contentData.user.login))])]),e("div",{staticClass:"user-right"},["userInside"!=this.$route.name?e("div",{staticClass:"follow-icon",on:{click:t.toFollow}},[t._v(" "+t._s(1==t.isFollow?"已关注":"关注")+" ")]):t._e(),e("div",{staticClass:"delete-icon",on:{click:t.deleteData}},[e("van-icon",{attrs:{name:"cross"}})],1)])]),e("div",{staticClass:"title",style:{fontStyle:"video"==t.contentData.format}},[t._v(" "+t._s(t.contentData.content)+" ")]),"video"==t.contentData.format?e("div",{staticClass:"video-box"},[e("div",{staticClass:"bg-click",on:{click:t.goToVideoInside}}),e("img",{staticClass:"bg",attrs:{src:t.contentData.pic_url,alt:""}}),e("div",{staticClass:"bg-blur"}),e("video",{ref:"video",attrs:{muted:"",src:t.contentData.high_url,controls:"",autoplay:""},domProps:{muted:!0}})]):t._e(),t.contentData.attachments?e("div",{staticClass:"photo-box"},t._l(t.contentData.attachments,(function(o,i){return e("div",{key:i,staticClass:"imgbox",on:{click:function(e){return t.PreviewImage(i)}}},["image"==o.format?e("img",{staticClass:"auto-img",attrs:{src:o.high_url,alt:""}}):t._e(),"gif"==o.format?e("video",{attrs:{muted:"",src:o.high_url,autoplay:"",loop:""},domProps:{muted:!0}}):t._e()])})),0):t._e(),t.contentData.hot_comment&&"comment"!=this.$route.name?e("div",{staticClass:"hot-comment-box"},[e("div",{staticClass:"content-top-user"},[e("div",{staticClass:"user-left"},[e("div",{staticClass:"imgbox"},[e("img",{staticClass:"auto-img",attrs:{src:t.contentData.hot_comment.user.thumb,alt:""}})]),e("div",{staticClass:"user-name"},[t._v(t._s(t.contentData.hot_comment.user.login))])]),e("div",{staticClass:"user-right"},[t._v(" "+t._s(t.contentData.hot_comment.like_count)+" 赞 ")])]),e("div",{staticClass:"content-text"},[t._v(t._s(t.contentData.hot_comment.content))])]):t._e(),e("div",{staticClass:"bottom-icon"},[e("div",{staticClass:"bottom-icon-left"},[e("div",{staticClass:"icon like",class:{likeActive:t.isLike},on:{click:t.toLike}},[e("div",{staticClass:"like-count"},[t._v(t._s(t.contentData.votes.up))])]),e("div",{staticClass:"icon dislike",class:{dislikeActive:t.isDislike},on:{click:t.toDislike}})]),e("div",{staticClass:"bottom-icon-right"},[e("div",{staticClass:"icon comment",on:{click:t.goToComment}},[e("div",{staticClass:"comment-count"},[t._v(" "+t._s(t.contentData.comments_count>0?t.contentData.comments_count:"评论")+" ")])]),e("div",{staticClass:"icon share",on:{click:function(e){return t.shareHandel()}}},[e("div",{staticClass:"share-count"},[t._v(" "+t._s(t.contentData.share_count>0?t.contentData.share_count:"分享")+" ")])])])]),e("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}}),e("router-view")],1):t._e()},s=[],a=(o(4735),o(3980)),n=(o(8146),o(8848)),l=(o(7658),o(541),o(6369)),c={setup(){const t=(0,l.iH)(!1),e=[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}],o=e=>{(0,n.Z)(e.name),t.value=!1};return{options:e,onSelect:o,showShare:t}},props:{allContentData:{},contentData:{},isAutoplay:{},loading:{},isFollow:{},isLike:{},isDislike:{},index:{}},data(){return{contentListHeight:0,fontStyle:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},playState:!1}},watch:{isAutoplay(t){1==t&&"video"==this.contentData.format?(this.$refs.video.play(),this.playState=!0):0==t&&"video"==this.contentData.format&&(this.$refs.video.pause(),this.playState=!1)},loading(t){0==t&&this.toAutoplay()}},created(){this.$nextTick((()=>{this.toAutoplay()}))},methods:{toAutoplay(){this.$refs.contentList&&(this.contentListHeight=this.$refs.contentList.clientHeight,this.$emit("getVideoHeight",this.contentListHeight))},toFollow(){let t=window.localStorage.getItem("token");t?this.$emit("getFollowState"):this.$router.push({name:"beforeLogin"})},toLike(){this.$emit("getLikeState")},toDislike(){this.$emit("getDislikeState")},shareHandel(){let t=window.localStorage.getItem("token");t?(this.showShare=!0,this.$emit("addShareCount")):this.$router.push({name:"beforeLogin"})},goToVideoInside(){let t=this.allContentData.filter((t=>"video"==t.format));window.localStorage.setItem("VideoContentData",JSON.stringify(t)),this.$router.push({name:"VideoInside",params:{index:this.index}})},PreviewImage(t){let e=[];this.contentData.attachments.forEach((t=>{e.push(t.high_url)})),(0,a.Z)({images:e,startPosition:t})},deleteData(){let t=window.localStorage.getItem("token");t?this.$emit("deleteData"):this.$router.push({name:"beforeLogin"})},goToComment(){this.$emit("goTocomment")},goToUserInside(){"userInside"!=this.$route.name&&this.$router.push({name:"userInside",params:{id:this.contentData.user.id}})},addHistoryData(){let t=JSON.parse(window.localStorage.getItem("historyData"));if(t){let e=[];t.forEach((t=>{-1==e.indexOf(t.id)&&e.push(t.id)})),-1==e.indexOf(this.contentData.id)&&(t.unshift(this.contentData),window.localStorage.setItem("historyData",JSON.stringify(t)))}else{let t=[];t.unshift(this.contentData),window.localStorage.setItem("historyData",JSON.stringify(t))}}}},r=c,h=o(1001),d=(0,h.Z)(r,i,s,!1,null,"35773a9f",null),u=d.exports},5646:function(t,e,o){o.r(e),o.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{ref:"search",staticClass:"search-view",on:{"&scroll":function(e){return t.searchScroll.apply(null,arguments)}}},[e("div",{staticClass:"top-nav"},[e("div",{staticClass:"search-box"},[e("div",{staticClass:"ipt-box"},[e("div",{staticClass:"icon"},[e("van-icon",{attrs:{name:"search"}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{type:"text"},domProps:{value:t.keywords},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchHandel.apply(null,arguments)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}})]),e("div",{staticClass:"icon-cancle",on:{click:t.clearTheWords}},[e("van-icon",{attrs:{name:"cross"}})],1)]),e("div",{staticClass:"cancle",on:{click:t.goBack}},[t._v("取消")])]),t.contentData.length>0?e("div",{staticClass:"content-box"},t._l(t.contentData,(function(o,i){return e("div",{key:o.id,staticClass:"content-list-wrap"},[e("VideoCom",{attrs:{allContentData:t.contentData,scrollTop:t.scrollTop,contentData:o,isAutoplay:0==i||o.isAutoplay,loading:t.loading,isFollow:o.isFollow,isDislike:o.isDislike,isLike:o.isLike,index:i},on:{getVideoHeight:function(e){return t.getTotalHeight(e)},getFollowState:function(e){return t.getFollowState(o)},getLikeState:function(e){return t.getLikeState(o)},getDislikeState:function(e){return t.getDislikeState(o)},addShareCount:function(e){return t.addShareCount(o)},deleteData:function(e){return t.deleteData(o)},goTocomment:function(e){return t.goTocomment(o)}}})],1)})),0):t._e(),t.goToTopIconState?e("div",{staticClass:"go-back-to-top",on:{click:t.goToTop}},[e("van-icon",{attrs:{name:"arrow-up"}}),e("br"),t._v("返回"),e("br"),t._v("顶部 ")],1):t._e(),0==t.contentData.length?e("h1",[t._v("搜索无结果，换个关键词吧!")]):t._e()])},s=[],a=(o(7658),o(8711)),n=o(7291),l=o(9039),c={components:{VideoCom:n.Z},name:"SearchView",data(){return{keywords:null,contentAllData:[],contentData:[],totalHeight:0,loading:!0,scrollTop:0,timer:null,goToTopIconState:!1,index1:0,index2:9}},activated(){this.keywords=this.$route.params.keywords,this.getSearchContentData()},watch:{scrollTop(t){this.contentData.length==this.contentAllData.length&&(this.loading=!1),t+500>this.totalHeight&&t<this.totalHeight&&this.loading&&(this.index1+=10,this.index2+=10,this.getData()),t>=this.totalHeight&&!this.loading&&this.$toast({message:"没有更多啦~",position:"bottom"})},loading(t){0==t&&(this.totalHeight=0)},"contentData.length"(){this.timer=setTimeout((()=>{this.getTotalHeight(),this.timer=null}),100)}},methods:{goBack(){this.$router.go(-1)},getSearchContentData(){this.contentData=[],this.index1=0,this.index2=9,(0,a.no)({axios:this.$axios}).then((t=>{let e=t.data.filter((t=>(-1!=t.content.indexOf(this.keywords)&&t.content[t.content.indexOf(this.keywords)],-1!=t.content.indexOf(this.keywords))));this.contentAllData=e;for(let o=this.index1;o<=this.index2;o++){if(o==this.contentAllData.length)break;this.contentData.push(this.contentAllData[o])}})),this.timer=setTimeout((()=>{this.getFollowedData(),this.timer=null}),100)},getData(){for(let t=this.index1;t<=this.index2;t++){if(t==this.contentAllData.length)break;this.contentData.push(this.contentAllData[t])}},searchScroll:(0,l.P)((function(){this.scrollTop=this.$refs.search.scrollTop,this.scrollTop>=150?this.goToTopIconState=!0:this.goToTopIconState=!1}),500),goToTop(){this.$refs.search.scrollTo(0,0)},getTotalHeight(t){void 0!=t&&(this.totalHeight+=t)},getFollowState(t){t.isFollow=!t.isFollow;let e=JSON.parse(window.localStorage.getItem("followedData")),o=[];e.forEach((t=>{o.push(t.id)})),t.isFollow&&-1==o.indexOf(t.user.id)?(e.push(t.user),window.localStorage.setItem("followedData",JSON.stringify(e))):e.forEach(((o,i)=>{o.id==t.user.id&&(e.splice(i,1),window.localStorage.setItem("followedData",JSON.stringify(e)))}))},getLikeState(t){t.isLike=!t.isLike,t.isLike?(t.isDislike=!1,t.votes.up++):t.votes.up--},getDislikeState(t){t.isDislike=!t.isDislike,t.isDislike&&t.isLike&&(t.isLike=!1,t.votes.up--)},addShareCount(t){t.share_count++},deleteData(t){this.$dialog.confirm({title:"确定要删除吗?"}).then((()=>{this.contentData.forEach(((e,o)=>{e==t&&this.contentData.splice(o,1)}))})).catch((()=>{}))},getFollowedData(){let t=JSON.parse(window.localStorage.getItem("followedData")),e=[];t.forEach((t=>{e.push(t.id)})),this.contentData.forEach((t=>{-1!=e.indexOf(t.user.id)?t.isFollow=!0:t.isFollow=!1}))},goTocomment(t){window.localStorage.setItem("commentContentData",JSON.stringify(t));let e=t.id;125654473!=e&&125657703!=e&&(e=125654473),this.$router.push(`/comment?id=${e}`)},searchHandel(){""!=this.keywords&&this.keywords.length>0&&this.keywords!=this.$route.params.keywords&&(this.$router.replace({name:"SearchView",params:{keywords:this.keywords}}),this.keywords=this.$route.params.keywords,this.getSearchContentData())},clearTheWords(){this.keywords=""}}},r=c,h=o(1001),d=(0,h.Z)(r,i,s,!1,null,"6624919b",null),u=d.exports},8711:function(t,e,o){o.d(e,{JV:function(){return c},Sm:function(){return a},bP:function(){return r},fn:function(){return h},gu:function(){return n},jy:function(){return i},no:function(){return d},pR:function(){return l},zF:function(){return s}});const i=({axios:t},e)=>t.get(`/JSON/home/homeRecommend${e}.json`),s=({axios:t},e)=>t.get(`/JSON/home/video${e}.json`),a=({axios:t},e)=>t.get(`/JSON/home/article${e}.json`),n=({axios:t},e)=>t.get(`/JSON/home/photo${e}.json`),l=({axios:t},e)=>t.get(`/JSON/home/Essence${e}.json`),c=({axios:t},e)=>t.get(`/JSON/home/bombRecommend${e}.json`),r=({axios:t},e)=>t.get(`/JSON/home/bombAll${e}.json`),h=({axios:t},e)=>t.get(`/JSON/home/bombContent${e}.json`),d=({axios:t})=>t.get("/JSON/home/search.json")}}]);