"use strict";(self["webpackChunkdemo03"]=self["webpackChunkdemo03"]||[]).push([[584],{7291:function(t,e,o){o.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return t.contentData?e("div",{ref:"contentList",staticClass:"content-list",on:{click:t.addHistoryData}},[t.contentData.hot?e("div",{staticClass:"hot"},[e("div",{staticClass:"hot-icon"}),e("div",{staticClass:"hot-text"},[t._v("热门")])]):t._e(),e("div",{staticClass:"content-top-user"},[e("div",{staticClass:"user-left"},[e("div",{staticClass:"imgbox",on:{click:t.goToUserInside}},[e("img",{staticClass:"auto-img",attrs:{src:t.contentData.user.thumb,alt:""}})]),e("div",{staticClass:"user-name"},[t._v(t._s(t.contentData.user.login))])]),e("div",{staticClass:"user-right"},["userInside"!=this.$route.name?e("div",{staticClass:"follow-icon",on:{click:t.toFollow}},[t._v(" "+t._s(1==t.isFollow?"已关注":"关注")+" ")]):t._e(),e("div",{staticClass:"delete-icon",on:{click:t.deleteData}},[e("van-icon",{attrs:{name:"cross"}})],1)])]),e("div",{staticClass:"title",style:{fontStyle:"video"==t.contentData.format}},[t._v(" "+t._s(t.contentData.content)+" ")]),"video"==t.contentData.format?e("div",{staticClass:"video-box"},[e("div",{staticClass:"bg-click",on:{click:t.goToVideoInside}}),e("img",{staticClass:"bg",attrs:{src:t.contentData.pic_url,alt:""}}),e("div",{staticClass:"bg-blur"}),e("video",{ref:"video",attrs:{muted:"",src:t.contentData.high_url,controls:"",autoplay:""},domProps:{muted:!0}})]):t._e(),t.contentData.attachments?e("div",{staticClass:"photo-box"},t._l(t.contentData.attachments,(function(o,i){return e("div",{key:i,staticClass:"imgbox",on:{click:function(e){return t.PreviewImage(i)}}},["image"==o.format?e("img",{staticClass:"auto-img",attrs:{src:o.high_url,alt:""}}):t._e(),"gif"==o.format?e("video",{attrs:{muted:"",src:o.high_url,autoplay:"",loop:""},domProps:{muted:!0}}):t._e()])})),0):t._e(),t.contentData.hot_comment&&"comment"!=this.$route.name?e("div",{staticClass:"hot-comment-box"},[e("div",{staticClass:"content-top-user"},[e("div",{staticClass:"user-left"},[e("div",{staticClass:"imgbox"},[e("img",{staticClass:"auto-img",attrs:{src:t.contentData.hot_comment.user.thumb,alt:""}})]),e("div",{staticClass:"user-name"},[t._v(t._s(t.contentData.hot_comment.user.login))])]),e("div",{staticClass:"user-right"},[t._v(" "+t._s(t.contentData.hot_comment.like_count)+" 赞 ")])]),e("div",{staticClass:"content-text"},[t._v(t._s(t.contentData.hot_comment.content))])]):t._e(),e("div",{staticClass:"bottom-icon"},[e("div",{staticClass:"bottom-icon-left"},[e("div",{staticClass:"icon like",class:{likeActive:t.isLike},on:{click:t.toLike}},[e("div",{staticClass:"like-count"},[t._v(t._s(t.contentData.votes.up))])]),e("div",{staticClass:"icon dislike",class:{dislikeActive:t.isDislike},on:{click:t.toDislike}})]),e("div",{staticClass:"bottom-icon-right"},[e("div",{staticClass:"icon comment",on:{click:t.goToComment}},[e("div",{staticClass:"comment-count"},[t._v(" "+t._s(t.contentData.comments_count>0?t.contentData.comments_count:"评论")+" ")])]),e("div",{staticClass:"icon share",on:{click:function(e){return t.shareHandel()}}},[e("div",{staticClass:"share-count"},[t._v(" "+t._s(t.contentData.share_count>0?t.contentData.share_count:"分享")+" ")])])])]),e("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}}),e("router-view")],1):t._e()},a=[],s=(o(4735),o(3980)),n=(o(8146),o(8848)),l=(o(7658),o(541),o(6369)),c={setup(){const t=(0,l.iH)(!1),e=[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}],o=e=>{(0,n.Z)(e.name),t.value=!1};return{options:e,onSelect:o,showShare:t}},props:{allContentData:{},contentData:{},isAutoplay:{},loading:{},isFollow:{},isLike:{},isDislike:{},index:{}},data(){return{contentListHeight:0,fontStyle:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},playState:!1}},watch:{isAutoplay(t){1==t&&"video"==this.contentData.format?(this.$refs.video.play(),this.playState=!0):0==t&&"video"==this.contentData.format&&(this.$refs.video.pause(),this.playState=!1)},loading(t){0==t&&this.toAutoplay()}},created(){this.$nextTick((()=>{this.toAutoplay()}))},methods:{toAutoplay(){this.$refs.contentList&&(this.contentListHeight=this.$refs.contentList.clientHeight,this.$emit("getVideoHeight",this.contentListHeight))},toFollow(){let t=window.localStorage.getItem("token");t?this.$emit("getFollowState"):this.$router.push({name:"beforeLogin"})},toLike(){this.$emit("getLikeState")},toDislike(){this.$emit("getDislikeState")},shareHandel(){let t=window.localStorage.getItem("token");t?(this.showShare=!0,this.$emit("addShareCount")):this.$router.push({name:"beforeLogin"})},goToVideoInside(){let t=this.allContentData.filter((t=>"video"==t.format));window.localStorage.setItem("VideoContentData",JSON.stringify(t)),this.$router.push({name:"VideoInside",params:{index:this.index}})},PreviewImage(t){let e=[];this.contentData.attachments.forEach((t=>{e.push(t.high_url)})),(0,s.Z)({images:e,startPosition:t})},deleteData(){let t=window.localStorage.getItem("token");t?this.$emit("deleteData"):this.$router.push({name:"beforeLogin"})},goToComment(){this.$emit("goTocomment")},goToUserInside(){"userInside"!=this.$route.name&&this.$router.push({name:"userInside",params:{id:this.contentData.user.id}})},addHistoryData(){let t=JSON.parse(window.localStorage.getItem("historyData"));if(t){let e=[];t.forEach((t=>{-1==e.indexOf(t.id)&&e.push(t.id)})),-1==e.indexOf(this.contentData.id)&&(t.unshift(this.contentData),window.localStorage.setItem("historyData",JSON.stringify(t)))}else{let t=[];t.unshift(this.contentData),window.localStorage.setItem("historyData",JSON.stringify(t))}}}},r=c,h=o(1001),A=(0,h.Z)(r,i,a,!1,null,"35773a9f",null),d=A.exports},9584:function(t,e,o){o.r(e),o.d(e,{default:function(){return A}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"follow-content-view"},[0==this.contentData.length?e("div",{staticClass:"top-tip"},[t._m(0),t._m(1)]):t._e(),this.contentData.length>0?e("div",{staticClass:"content-box"},t._l(t.contentData,(function(o,i){return e("div",{key:o.id,staticClass:"content-list-wrap"},[e("VideoCom",{attrs:{allContentData:t.allData,scrollTop:t.scrollTop,contentData:o,isAutoplay:0==i||o.isAutoplay,loading:t.loading,isFollow:o.isFollow,isDislike:o.isDislike,isLike:o.isLike,index:i},on:{getVideoHeight:function(e){return t.getVideoHeight(e)},getFollowState:function(e){return t.getFollowState(o)},getLikeState:function(e){return t.getLikeState(o)},getDislikeState:function(e){return t.getDislikeState(o)},addShareCount:function(e){return t.addShareCount(o)},deleteData:function(e){return t.deleteData(o)},goTocomment:function(e){return t.goTocomment(o)}}})],1)})),0):t._e(),e("div",{staticClass:"refresh-icon",on:{click:t.refresh}})])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-img"},[e("img",{staticClass:"auto-img",attrs:{src:o(9069)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-text-box"},[e("div",{staticClass:"top-text-black"},[t._v("关注列表为空")]),e("div",{staticClass:"top-text-lightblack"},[t._v(" 关注你感兴趣的人，她们发布的糗事会显示在这里 ")])])}],s=(o(7658),o(8711)),n=o(7291),l={name:"FollowView",props:{scrollTop:{}},components:{VideoCom:n.Z},data(){return{contentData:[],videoTotalHeight:0,loading:!0,refreshState:!1,timer:null,followedData:[]}},computed:{allData(){let t=this.contentData.filter((t=>"video"==t.format));return t}},created(){},activated(){this.followedData=JSON.parse(window.localStorage.getItem("followedData")),this.getHomeFollowContentData(),this.timer=setTimeout((()=>{this.getFollowedData(),this.timer=null}),100)},watch:{scrollTop(t,e){let o=null;if(this.videoTotalHeight>t&&(o=this.videoTotalHeight-t),this.contentData.length>0){let e=Math.round((t-100>0?t-100:0)/this.videoTotalHeight*10);this.contentData.forEach(((t,o)=>{t.isAutoplay=e==o}))}(o>0&&o<500&&t>e||null==o)&&(this.loading?(this.loading=!1,this.getHomeFollowContentData(1)):!this.loading&&t>=this.videoTotalHeight&&this.$toast({message:"没有更多了哦~",position:"bottom"}))},loading(t){0==t&&(this.videoTotalHeight=0)}},methods:{getHomeFollowContentData(){(0,s.no)({axios:this.$axios}).then((({data:t})=>{t.forEach((t=>{t["isAutoplay"]=!1,t["isFollow"]=!1,t["isLike"]=!1,t["isDislike"]=!1})),this.contentData=t;let e=JSON.parse(window.localStorage.getItem("searchData"));if(e){let t=[];e.forEach((e=>{-1==t.indexOf(e.id)&&t.push(e.id)})),this.contentData.forEach((o=>{-1==t.indexOf(o.id)&&e.push(o)})),window.localStorage.setItem("searchData",JSON.stringify(e))}else window.localStorage.setItem("searchData",JSON.stringify(this.contentData))}))},getVideoHeight(t){this.videoTotalHeight+=t},getFollowState(t){this.$dialog.confirm({title:"确定要取消关注吗?"}).then((()=>{let e=this.contentData.filter((e=>e.user.id!=t.user.id));this.contentData=e,window.localStorage.setItem("followedData",JSON.stringify(this.contentData))})).catch((()=>{}))},getLikeState(t){t.isLike=!t.isLike,t.isLike?(t.isDislike=!1,t.votes.up++):t.votes.up--},getDislikeState(t){t.isDislike=!t.isDislike,t.isDislike&&t.isLike&&(t.isLike=!1,t.votes.up--)},addShareCount(t){t.share_count++},refresh(){0==this.refreshState?this.refreshState=!0:this.$toast({message:"没有更多啦~",position:"top"})},deleteData(t){this.$dialog.confirm({title:"确定要删除吗?"}).then((()=>{this.contentData.forEach(((e,o)=>{e==t&&this.contentData.splice(o,1)}))})).catch((()=>{}))},getFollowedData(){let t=[];if(this.followedData.forEach((e=>{t.push(e.id)})),this.followedData){let e=this.contentData.filter((e=>-1!=t.indexOf(e.user.id)));this.contentData=e}this.contentData.forEach((e=>{-1!=t.indexOf(e.user.id)?e.isFollow=!0:e.isFollow=!1}))},goTocomment(t){window.localStorage.setItem("commentContentData",JSON.stringify(t));let e=t.id;125654473!=e&&125657703!=e&&(e=125654473),this.$router.push(`/comment?id=${e}`)}}},c=l,r=o(1001),h=(0,r.Z)(c,i,a,!1,null,"f962f84c",null),A=h.exports},8711:function(t,e,o){o.d(e,{JV:function(){return c},Sm:function(){return s},bP:function(){return r},fn:function(){return h},gu:function(){return n},jy:function(){return i},no:function(){return A},pR:function(){return l},zF:function(){return a}});const i=({axios:t},e)=>t.get(`/JSON/home/homeRecommend${e}.json`),a=({axios:t},e)=>t.get(`/JSON/home/video${e}.json`),s=({axios:t},e)=>t.get(`/JSON/home/article${e}.json`),n=({axios:t},e)=>t.get(`/JSON/home/photo${e}.json`),l=({axios:t},e)=>t.get(`/JSON/home/Essence${e}.json`),c=({axios:t},e)=>t.get(`/JSON/home/bombRecommend${e}.json`),r=({axios:t},e)=>t.get(`/JSON/home/bombAll${e}.json`),h=({axios:t},e)=>t.get(`/JSON/home/bombContent${e}.json`),A=({axios:t})=>t.get("/JSON/home/search.json")},9069:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=584.16f77632.js.map