(function(){"use strict";var t={1115:function(t,s,i){var e=i(6369),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"nav-top"},[s("div",{staticClass:"date"},[t._v(t._s(t.date))]),s("div",{staticClass:"weekday"},[t._v(t._s(t.weekday))]),s("div",{staticClass:"time"},[t._v(t._s(String(t.time).slice(10)))]),s("router-link",{staticClass:"user",attrs:{tag:"span",to:"/login"}},[t._v("登录")])],1),s("router-view"),s("wd-tabbar",{attrs:{border:"",fixed:""}},[s("wd-tabbar-item",{attrs:{icon:"wd-icon-chat",to:"/"}},[t._v("首页")]),s("wd-tabbar-item",{attrs:{icon:"wd-icon-chat",to:"/photo"}},[t._v("美图")]),s("wd-tabbar-item",{attrs:{icon:"wd-icon-chat",to:"/news"}},[t._v("资讯")]),s("wd-tabbar-item",{attrs:{icon:"wd-icon-chat",to:"/music"}},[t._v("音乐")])],1)],1)},o=[],n=i(881);const r=(t,s="")=>{const i=new Date(t),e=i.getFullYear();let a=i.getMonth()+1,o=i.getDate(),n=i.getHours(),r=i.getMinutes(),l=i.getSeconds();a=a<10?"0"+a:a,o=o<10?"0"+o:o,n=n<10?"0"+n:n,r=r<10?"0"+r:r,l=l<10?"0"+l:l;let u="";switch(s=s.toLocaleLowerCase(),s){case"yyyy-mm-dd":u=`${e}-${a}-${o}`;break;case"mm-dd":u=`${a} - ${o}`;break;case"hh-mm":u=`${n} : ${r}`;break;default:u=`${e}-${a}-${o} ${n}:${r}:${l}`;break}return u};var l={data(){return{tabbar:0,date:0,weekday:0,time:0}},created(){this.getTime=(0,n.Z)(this.getTime)},beforeMount(){this.timer=setInterval((()=>{this.time=r(new Date)}),1e3)},mounted(){this.getTime()},methods:{getTime(){this.$axios.get("https://api.apiopen.top/api/getTime").then((({data:t})=>{this.date=t.result.date,this.weekday=t.result.weekday}))}}},u=l,c=i(1001),h=(0,c.Z)(u,a,o,!1,null,"22d2c8fa",null),d=h.exports,g=i(2631),m=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("div",{staticClass:"container"},[s("div",{ref:"main",staticClass:"main"},t._l(t.video,(function(i){return s("div",{directives:[{name:"swipedown",rawName:"v-swipedown",value:t.swipedown,expression:"swipedown"},{name:"swipeup",rawName:"v-swipeup",value:t.swipeup,expression:"swipeup"}],key:i.id,ref:"videobox",refInFor:!0,staticClass:"video-box"},[s("div",{staticClass:"bgcolor"}),s("div",{staticClass:"user"},[s("div",{staticClass:"imgbox"},[s("img",{attrs:{src:i.userPic}})]),s("div",{staticClass:"textbox"},[t._v(t._s(i.userName))])]),s("div",{staticClass:"title"},[t._v(t._s(i.title))]),s("video",{attrs:{width:"100%",height:"100%",preload:"metadata",autoplay:"",controls:"",loop:""}},[s("source",{attrs:{src:i.playUrl,type:"video/mp4"}})]),s("div",{staticClass:"menu-function"},[s("div",{staticClass:"bgcolor2"}),s("div",{on:{click:t.colorRed2}},[s("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),s("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.likeCount))])]),s("div",{on:{click:t.getcomments}},[s("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}}),s("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.commentCount))])]),s("div",{on:{click:t.colorRed3}},[s("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),s("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.collectCount))])]),s("div",{on:{click:t.colorRed}},[s("i",{staticClass:"fa fa-thumbs-down",attrs:{"aria-hidden":"true"}})]),s("div",{on:{click:function(s){t.shareArea=!t.shareArea}}},[s("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.commentsArea,expression:"commentsArea"}],staticClass:"commentsbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"commentinput",attrs:{type:"text",placeholder:"输入评论"},domProps:{value:t.text},on:{keydown:function(s){return t.tocomment(s)},input:function(s){s.target.composing||(t.text=s.target.value)}}}),t._l(t.comments,(function(i){return s("div",{key:i[1],staticClass:"comments"},[t._v(" "+t._s(i[0])+" "),s("div",{staticClass:"delete",on:{click:function(s){return t.delete1(s)}}},[t._v("删除")])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.shareArea,expression:"shareArea"}],staticClass:"social-share"},[s("vshare",{attrs:{vshareConfig:t.vshareConfig}})],1)])})),0)])])},M=[],p=(i(7658),{name:"HomeView",data(){return{video:[],scrollTop:0,count:0,colorStatus:0,colorStatus2:0,colorStatus3:0,commentsArea:!1,vshareConfig:{shareList:["more","qzone","tsina","sqq","copy","weixin"],common:{},share:[{}]},shareArea:!1,text:"",comments:[],likeCount:0,commentCount:0,collectCount:0}},created(){this.getData=(0,n.Z)(this.getData)},mounted(){this.getData()},methods:{getData(){this.$axios.get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10").then((({data:t})=>{let s=[...t.result.list];this.video.push(...s)}))},swipeup(){this.count++,this.scrollTop-=565,this.$refs.main.style.transform=`translateY(${this.scrollTop}px)`,this.count==this.$refs.videobox.length-5&&this.getData()},swipedown(){this.scrollTop<0&&(this.scrollTop+=565),this.$refs.main.style.transform=`translateY(${this.scrollTop}px)`},colorRed(t){0==this.colorStatus?(t.target.style.color="red",this.colorStatus=1):1==this.colorStatus&&(t.target.style.color="white",this.colorStatus=0)},colorRed2(t){0==this.colorStatus2?(t.target.style.color="red",this.colorStatus2=1,this.likeCount++):1==this.colorStatus2&&(t.target.style.color="white",this.colorStatus2=0,this.likeCount--)},colorRed3(t){0==this.colorStatus3?(t.target.style.color="red",this.colorStatus3=1,this.collectCount++):1==this.colorStatus3&&(t.target.style.color="white",this.colorStatus3=0,this.collectCount--)},getcomments(){this.commentsArea=!this.commentsArea},tocomment(t){if(13==t.keyCode&&""!=this.text){let t=(new Date).getTime(),s=[];s.push(this.text),s.push(t),this.comments.push(s),this.text="",this.commentCount++}},delete1(t){t.target.parentElement.remove(),this.commentCount--}},components:{}}),w=p,y=(0,c.Z)(w,m,M,!1,null,"36dd686d",null),v=y.exports,S=function(){var t=this,s=t._self._c;return s("div",{staticClass:"photoview"},[t._l(t.imgs,(function(i,e){return s("div",{key:i.id,staticClass:"imgbox"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.url,expression:"item.url"}],staticClass:"lazyload-img",on:{click:function(s){return t.toggle(e)}}}),s("div",{staticClass:"text"},[t._v(t._s(i.title))])])})),s("wd-infinite-load",{ref:"loadmore",attrs:{loading:t.loading},on:{loadmore:t.loadmore}})],2)},f=[],C={data(){return{imgs:[],urls:[],num:0,loading:!1,time:1/0}},created(){this.getData=(0,n.Z)(this.getData)},mounted(){this.getData()},methods:{getData(){this.$axios.get("https://api.apiopen.top/api/getImages?page=0&size=10").then((({data:t})=>{this.imgs.push(...t.result.list);let s=[];this.imgs.forEach((t=>{s.push(t.url)})),this.urls=s}))},toggle(t){this.$preview({urls:this.urls,current:t})},loadmore(){this.loading=!0,this.time?setTimeout((()=>{this.num+=10,this.getData(),this.loading=!1,this.time--}),1e3):this.$refs.loadmore.loadEnd()}}},L=C,x=(0,c.Z)(L,S,f,!1,null,"969f396c",null),j=x.exports,N=function(){var t=this,s=t._self._c;return s("div",{staticClass:"newview"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.parentshow,expression:"parentshow"}],staticClass:"main"},[s("div",{staticClass:"selecttime"},[s("span",{staticClass:"demonstration"},[t._v("可选择日期以切换内容")]),s("el-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"选择日期"},on:{input:t.getData2},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}})],1),t._l(t.news,(function(i,e){return s("div",{key:i.id,staticClass:"new-list",on:{click:function(s){return t.getnews(i.id)}}},[s("div",{staticClass:"imgbox"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.images[0],expression:"item.images[0]"}],staticClass:"lazyload-img",on:{click:function(s){return t.toggle(e)}}}),s("div",{staticClass:"textbox"},[s("div",{staticClass:"text"},[t._v(t._s(i.title))]),s("div",{staticClass:"text2"},[t._v("作者: "+t._s(i.hint))])])])])}))],2),s("NewsList",{directives:[{name:"show",rawName:"v-show",value:t.childrenshow,expression:"childrenshow"}],attrs:{data:this.newslist,parentshow:this.parentshow,childrenshow:this.childrenshow},on:{returnparent:t.returnparent2}})],1)},D=[],I=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("div",{staticClass:"return",on:{click:t.returnparent}},[t._v("←"),s("br"),t._v("返"),s("br"),t._v("回")]),s("div",{staticClass:"imgbox"},[s("img",{attrs:{src:t.data.story.image,alt:""}}),s("div",{staticClass:"title"},[t._v(t._s(t.data.story.title))])]),s("div",{staticClass:"text",domProps:{innerHTML:t._s(t.data.story.body)}})])},_=[],A={props:{data:Object,parentshow:Boolean,childrenshow:Boolean},data(){return{parentshow2:this.parentshow,childrenshow2:this.childrenshow}},methods:{returnparent(){this.parentshow2=!this.parentshow2,this.childrenshow2=!this.childrenshow2,this.$emit("returnparent",{parentshow2:this.parentshow2,childrenshow2:this.childrenshow2})}},watch:{parentshow:function(t){this.parentshow2=t},childrenshow:function(t){this.childrenshow2=t}}},z=A,b=(0,c.Z)(z,I,_,!1,null,"1fdd241a",null),T=b.exports,k={data(){return{news:[],urls:[],newslist:{},parentshow:!0,childrenshow:!1,value1:""}},created(){this.getData=(0,n.Z)(this.getData)},mounted(){this.getData()},computed:{},methods:{getData(){let t=Number(this.value1);t++,String(t),this.$axios.get("https://apis.netstart.cn/zhihudaily/stories/latest").then((({data:t})=>{let s=[];s.push(...t.stories),this.news=s;let i=[];this.news.forEach((t=>{i.push(t.images[0])})),this.urls=i}))},getData2(){let t=Number(this.value1);t++,String(t),this.$axios.get(`https://apis.netstart.cn/zhihudaily/stories/before/${t}`).then((({data:t})=>{let s=[];s.push(...t.stories),this.news=s;let i=[];this.news.forEach((t=>{i.push(t.images[0])})),this.urls=i}))},toggle(t){this.$preview({urls:this.urls,current:t})},async getnews(t){await this.$axios.get(`https://apis.netstart.cn/zhihudaily/story/${t}`).then((({data:t})=>{this.newslist=t})),this.parentshow=!this.parentshow,this.childrenshow=!this.childrenshow},returnparent2(t){this.parentshow=t.parentshow2,this.childrenshow=t.childrenshow2}},components:{NewsList:T}},V=k,E=(0,c.Z)(V,N,D,!1,null,"d78876da",null),Y=E.exports,$=function(){var t=this,s=t._self._c;return s("div",{staticClass:"userview"},[s("SongListView",{directives:[{name:"show",rawName:"v-show",value:t.SongListViewStatus,expression:"SongListViewStatus"}],attrs:{index:this.index,songslist:this.songslist,songsForm:this.songsform,SongListViewStatus:this.SongListViewStatus,MusicViewStatus:this.MusicViewStatus},on:{getViewStatus:t.getViewStatus2,getPlayAndSongListViewStatus:t.getPlayAndSongListViewStatus2}}),t.playSongsViewStatus?s("PlaySongsView",{attrs:{MusicViewStatus:this.MusicViewStatus,playSongsViewStatus:this.playSongsViewStatus,SongsID:this.songsId,songsWords:this.lyricList,newsongsbgimg:this.songsbgimg},on:{getPlayViewStatus:t.getPlayViewStatus2}}):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.MusicViewStatus,expression:"MusicViewStatus"}],staticClass:"main"},[s("div",{staticClass:"top-nav"},[s("div",{staticClass:"recommend active",on:{click:function(s){return t.recommendClick(s)}}},[t._v(" 推荐音乐 ")]),s("div",{staticClass:"popular",on:{click:function(s){return t.popularClick(s)}}},[t._v("热歌榜")]),s("div",{staticClass:"search",on:{click:function(s){return t.searchClick(s)}}},[t._v("搜索")])]),t.recommendStatus?s("div",{staticClass:"recommend-list"},[s("h2",{staticClass:"remd_tl"},[t._v("编辑推荐")]),s("div",{staticClass:"remd_songs"},t._l(t.songslist,(function(i,e){return s("div",{key:i.id,staticClass:"songs_list",on:{click:function(s){return t.GoToSongListView(i.id,e)}}},[s("div",{staticClass:"imgbox"},[s("div",{staticClass:"mask"}),s("img",{staticClass:"listenicon",attrs:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+",alt:""}}),s("img",{attrs:{src:i.picUrl,alt:""}}),s("div",{staticClass:"playcount"},[t._v(" "+t._s(String(i.playCount).slice(0,4))+"."+t._s(String(i.playCount).slice(4,5))+"万 ")])]),s("div",{staticClass:"textbox"},[t._v(t._s(i.name))])])})),0),s("h2",{staticClass:"remd_tl"},[t._v("最新音乐")]),s("div",{staticClass:"remd_newsongs"},t._l(t.newsongs,(function(i){return s("div",{key:i.id,staticClass:"newsongs_list_wrap",on:{click:function(s){return t.playSongs(i.id,i.picUrl)}}},[s("div",{staticClass:"newsongs_list"},[s("div",{staticClass:"textbox"},[s("div",{staticClass:"toptext"},[t._v(" "+t._s(i.name)+" "+t._s(i.song.album.alias[0])+" ")]),s("div",{staticClass:"bottomtext"},[s("i",{staticClass:"SQicon"}),s("div",{staticClass:"artistsbox"},t._l(i.song.album.artists,(function(i){return s("span",{key:i.id,staticClass:"artists"},[t._v(" "+t._s(i.name)+" ")])})),0),t._v("  - "+t._s(i.name)+" ")])]),t._m(0,!0)])])})),0)]):t._e(),t.popularStatus?s("div",{staticClass:"popular-list"},[s("div",{staticClass:"topimg"},[s("div",{staticClass:"text"}),s("div",{staticClass:"hottime"},[t._v(" 更新日期："+t._s(String(this.date).slice(5,7))+"月"+t._s(String(this.date).slice(8,10))+"日 ")])]),s("div",{staticClass:"remd_newsongs"},t._l(t.popularSongs,(function(i,e){return s("div",{key:i.id,staticClass:"newsongs_list_wrap",on:{click:function(s){return t.playSongs(i.id,i.al.picUrl)}}},[s("div",{staticClass:"sgfl",class:{active:e<=2}},[t._v(" "+t._s(e+1<10?"0"+String(e+1):e+1)+" ")]),s("div",{staticClass:"newsongs_list"},[s("div",{staticClass:"textbox"},[s("div",{staticClass:"toptext"},[t._v(" "+t._s(i.name)+" "),s("span",{staticClass:"orginFont"},[t._v(t._s("("+i.alia[0]!=void 0?i.alia[0]:")"))])]),s("div",{staticClass:"bottomtext"},[s("div",{staticClass:"artistsbox"},t._l(i.ar,(function(i){return s("span",{key:i.id,staticClass:"artists"},[t._v(" "+t._s(i.name)+" ")])})),0),t._v("  - "+t._s(i.name)+" ")])]),t._m(1,!0)])])})),0)]):t._e(),t.searchStatus?s("div",{staticClass:"search-list"},[t.searchshow?s("div",{staticClass:"inputbox"},[s("div",{staticClass:"inputcover"},[s("i",{staticClass:"u-svg u-svg-srch"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWords,expression:"keyWords"}],staticClass:"input",attrs:{type:"search",name:"search",placeholder:"搜索歌曲、歌手、专辑",autocomplete:"off"},domProps:{value:t.keyWords},on:{input:[function(s){s.target.composing||(t.keyWords=s.target.value)},t.search],keydown:function(s){return t.enterToSearch(s)}}}),t._m(2)]),t._l(t.searchList,(function(i,e){return s("div",{key:e,staticClass:"searchTextList",on:{click:function(s){return t.getSongsList(i.name)}}},[t._v(" "+t._s(i.name)+" ")])}))],2):t._e(),t.hotwordsshow?s("div",{staticClass:"hotwords"},[s("h3",{staticClass:"title"},[t._v("热门搜索")]),s("ul",{staticClass:"listwrap"},t._l(this.hotwords,(function(i){return s("li",{key:i.first,staticClass:"list",on:{click:function(s){return t.hotWordsClick(s)}}},[t._v(t._s(i.first))])})),0)]):t._e(),t._l(t.searchsongsList,(function(i,e){return s("div",{key:e,staticClass:"songsList",on:{click:function(s){return t.playSongs(i.id,i.al.picUrl)}}},[s("span",{staticClass:"text"},[t._v(t._s(i.name))]),s("img",{attrs:{src:i.al.picUrl,alt:""}})])}))],2):t._e()])],1)},O=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"iconbox"},[s("div",{staticClass:"icon"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"iconbox"},[s("div",{staticClass:"icon"})])},function(){var t=this,s=t._self._c;return s("figure",{staticClass:"close"},[s("i",{staticClass:"u-svg u-svg-empty"})])}],Z=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("div",{staticClass:"GoBack",on:{click:t.GoToMusicViewPage}},[t._v("点击返回")]),s("div",{staticClass:"topdec",style:[{backgroundImage:`url(${t.songslist[t.index].picUrl})`}]},[s("div",{staticClass:"bgblur"}),s("div",{staticClass:"imgbox"},[s("div",{staticClass:"tips"},[t._v("歌单")]),s("div",{staticClass:"mask"}),s("img",{staticClass:"listenicon",attrs:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+",alt:""}}),s("img",{attrs:{src:t.songslist[t.index].picUrl,alt:""}}),s("div",{staticClass:"playcount"},[t._v(" "+t._s(String(t.songslist[t.index].playCount).slice(0,4))+"."+t._s(String(t.songslist[t.index].playCount).slice(4,5))+"万 ")])]),s("div",{staticClass:"textbox"},[s("div",{staticClass:"text"},[t._v(t._s(t.songslist[t.index].name))]),s("div",{staticClass:"userbox"})])]),s("h3",{staticClass:"u-smtitle"},[t._v("歌曲列表")]),s("div",{staticClass:"remd_newsongs"},t._l(t.songsForm,(function(i,e){return s("div",{key:i.id,staticClass:"newsongs_list_wrap",on:{click:function(s){return t.playSongs(i.id,i.al.picUrl)}}},[s("div",{staticClass:"sgfl"},[t._v(t._s(e+1))]),s("div",{staticClass:"newsongs_list"},[s("div",{staticClass:"textbox"},[s("div",{staticClass:"toptext"},[t._v(" "+t._s(i.name)+" "),s("span",{staticClass:"orginFont"},[t._v(t._s("("+i.alia[0]!=void 0?i.alia[0]:")"))])]),s("div",{staticClass:"bottomtext"},[s("div",{staticClass:"artistsbox"},t._l(i.ar,(function(i){return s("span",{key:i.id,staticClass:"artists"},[t._v(" "+t._s(i.name)+" ")])})),0),t._v("  - "+t._s(i.name)+" ")])]),t._m(0,!0)])])})),0)])},P=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"iconbox"},[s("div",{staticClass:"icon"})])}],U={props:{MusicViewStatus:Boolean,SongListViewStatus:Boolean,playSongsViewStatus:Boolean,songsForm:Array,songslist:Array,index:Number},data(){return{MusicViewStatus2:this.MusicViewStatus,SongListViewStatus2:this.SongListViewStatus,playSongsViewStatus2:this.playSongsViewStatus,songsId:0,lyricList:"",songsbgimg:""}},methods:{GoToMusicViewPage(){this.MusicViewStatus2=!this.MusicViewStatus2,this.SongListViewStatus2=!this.SongListViewStatus2,this.$emit("getViewStatus",{MusicViewStatus2:this.MusicViewStatus2,SongListViewStatus2:this.SongListViewStatus2})},async playSongs(t,s){this.songsId=t,this.songsbgimg=s,await this.$axios.get(`https://apis.netstart.cn/music/lyric?id=${this.songsId}`).then((({data:t})=>{if(this.lyricList=t,this.lyricList.lrc.lyric){let t=this.lyricList.lrc.lyric.split(/[(\f\n)\r\t\v]/).map((t=>{let s=t.slice(1,3),i=t.slice(4,6),e=t.slice(7,10),a=t.slice(11,t.length),o=60*parseInt(s)*1e3+1e3*parseInt(i)+parseInt(e);return isNaN(Number(e))&&(e=t.slice(7,9),a=t.slice(10,t.length),o=60*parseInt(s)*1e3+1e3*parseInt(i)+parseInt(e)),{min:s,sec:i,mill:e,lrc:a,time:o}}));t.forEach(((s,i)=>{i===t.length-1||isNaN(t[i+1].time)?s.pre=1e5:s.pre=t[i+1].time})),this.lyricList=t}})),this.SongListViewStatus2=!this.SongListViewStatus2,this.playSongsViewStatus2=!this.playSongsViewStatus2,this.$emit("getPlayAndSongListViewStatus",{SongListViewStatus2:this.SongListViewStatus2,playSongsViewStatus2:this.playSongsViewStatus2,songsId2:this.songsId,lyricList2:this.lyricList,songsbgimg2:this.songsbgimg})}},watch:{MusicViewStatus:function(t){this.MusicViewStatus2=t},SongListViewStatus:function(t){this.SongListViewStatus2=t},playSongsViewStatus:function(t){this.playSongsViewStatus2=t}}},Q=U,W=(0,c.Z)(Q,Z,P,!1,null,"ae6b51ae",null),B=W.exports,H=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main",style:[{backgroundImage:`url(${t.newsongsbgimg})`}]},[s("div",{staticClass:"goback",on:{click:t.Goback}},[t._v("点击返回")]),s("div",{staticClass:"mask"}),s("div",{ref:"musidLyric",staticClass:"musidLyric"},t._l(t.songsWords,(function(i,e){return s("p",{key:e,class:{active:1e3*t.currentTime>=i.time&&1e3*t.currentTime<i.pre}},[t._v(" "+t._s(i.lrc)+" ")])})),0),s("audio",{attrs:{controls:"",autoplay:""},on:{timeupdate:function(s){return t.getCurrentTime(s)}}},[s("source",{attrs:{src:"https://music.163.com/song/media/outer/url?id="+this.SongsID+".mp3"}})])])},F=[],G={props:{MusicViewStatus:Boolean,playSongsViewStatus:Boolean,SongsID:Number,songsWords:Array,newsongsbgimg:String},data(){return{MusicViewStatus3:this.MusicViewStatus,playSongsViewStatus2:this.playSongsViewStatus,currentTime:0}},methods:{Goback(){this.MusicViewStatus3=!this.MusicViewStatus3,this.playSongsViewStatus2=!this.playSongsViewStatus2,this.$emit("getPlayViewStatus",{MusicViewStatus3:this.MusicViewStatus3,playSongsViewStatus2:this.playSongsViewStatus2})},getCurrentTime(t){this.currentTime=t.target.currentTime}},watch:{MusicViewStatus:function(t){this.MusicViewStatus3=t},playSongsViewStatus:function(t){this.playSongsViewStatus2=t},currentTime:function(t){let s=document.querySelector("p.active");s&&s.offsetTop>300&&(this.$refs.musidLyric.scrollTop=s.offsetTop-300),t===this.duration&&(this.playListIndex===this.playList.length-1?(this.updatePlayListIndex(0),this.play()):this.updatePlayListIndex(this.playListIndex+1))}}},R=G,q=(0,c.Z)(R,H,F,!1,null,"3d5d28c5",null),X=q.exports,J={data(){return{songslist:[],newsongs:[],MusicViewStatus:!0,SongListViewStatus:!1,playSongsViewStatus:!1,songsform:[],index:0,songsId:0,lyricList:"",songsbgimg:"",recommendStatus:!0,popularStatus:!1,searchStatus:!1,popularSongs:[],date:r(new Date),keyWords:"",searchList:[],searchsongsList:[],searchshow:!0,hotwords:[],hotwordsshow:!0}},created(){this.getsongsData=(0,n.Z)(this.getsongsData),this.getnewsongsData=(0,n.Z)(this.getnewsongsData),this.getHotWords=(0,n.Z)(this.getHotWords)},mounted(){this.getsongsData(),this.getnewsongsData(),this.getHotWords()},methods:{getsongsData(){this.$axios.get("https://apis.netstart.cn/music/personalized?limit=6").then((({data:t})=>{this.songslist=[...t.result]}))},getnewsongsData(){this.$axios.get("https://apis.netstart.cn/music/personalized/newsong").then((({data:t})=>{this.newsongs=[...t.result]}))},recommendClick(t){t.target.className="recommend active",t.target.nextElementSibling.className="popular",t.target.nextElementSibling.nextElementSibling.className="search",this.recommendStatus=!0,this.popularStatus=!1,this.searchStatus=!1},popularClick(t){t.target.className="popular active",t.target.nextElementSibling.className="search",t.target.previousElementSibling.className="recommend",this.recommendStatus=!1,this.popularStatus=!0,this.searchStatus=!1,this.$axios.get("https://apis.netstart.cn/music/playlist/track/all?id=3778678&limit=20&offset=0").then((({data:t})=>{this.popularSongs=[...t.songs]}))},searchClick(t){t.target.className="search active",t.target.previousElementSibling.className="popular",t.target.previousElementSibling.previousElementSibling.className="recommend",this.recommendStatus=!1,this.popularStatus=!1,this.searchStatus=!0,this.searchshow=!0,this.searchsongsList=[],this.hotwordsshow=!0},async GoToSongListView(t,s){this.MusicViewStatus=!this.MusicViewStatus,this.SongListViewStatus=!this.SongListViewStatus,await this.$axios.get(`https://apis.netstart.cn/music/playlist/track/all?id=${t}&limit=10&offset=0`).then((({data:t})=>{this.songsform=[...t.songs]})),this.index=s},getViewStatus2(t){this.MusicViewStatus=t.MusicViewStatus2,this.SongListViewStatus=t.SongListViewStatus2},getPlayViewStatus2(t){this.MusicViewStatus=t.MusicViewStatus3,this.playSongsViewStatus=t.playSongsViewStatus2},getPlayAndSongListViewStatus2(t){this.SongListViewStatus=t.SongListViewStatus2,this.playSongsViewStatus=t.playSongsViewStatus2,this.songsId=t.songsId2,this.lyricList=t.lyricList2,this.songsbgimg=t.songsbgimg2},async playSongs(t,s){this.songsId=t,this.songsbgimg=s,await this.$axios.get(`https://apis.netstart.cn/music/lyric?id=${this.songsId}`).then((({data:t})=>{if(this.lyricList=t,this.lyricList.lrc.lyric){let t=this.lyricList.lrc.lyric.split(/[(\f\n)\r\t\v]/).map((t=>{let s=t.slice(1,3),i=t.slice(4,6),e=t.slice(7,10),a=t.slice(11,t.length),o=60*parseInt(s)*1e3+1e3*parseInt(i)+parseInt(e);return isNaN(Number(e))&&(e=t.slice(7,9),a=t.slice(10,t.length),o=60*parseInt(s)*1e3+1e3*parseInt(i)+parseInt(e)),{min:s,sec:i,mill:e,lrc:a,time:o}}));t.forEach(((s,i)=>{i===t.length-1||isNaN(t[i+1].time)?s.pre=1e5:s.pre=t[i+1].time})),this.lyricList=t}})),this.MusicViewStatus=!this.MusicViewStatus,this.playSongsViewStatus=!this.playSongsViewStatus},returnToPlayView(){this.MusicViewStatus=!this.MusicViewStatus,this.playSongsViewStatus=!this.playSongsViewStatus},search(){this.$axios.get(`https://apis.netstart.cn/music/cloudsearch?keywords=${this.keyWords}&limit=10`).then((t=>{let s=t.data.result.songs;this.searchList=s})),""==this.keyWords&&(this.searchList=[])},getSongsList(t){this.$axios.get(`https://apis.netstart.cn/music//cloudsearch?keywords=${t}&limit=10`).then((t=>{let s=t.data.result.songs;this.searchsongsList=s,this.searchshow=!1})),this.keyWords="",this.searchList=[]},enterToSearch(t){13==t.keyCode&&(this.$axios.get(`https://apis.netstart.cn/music//cloudsearch?keywords=${this.keyWords}&limit=10`).then((t=>{let s=t.data.result.songs;this.searchsongsList=s,this.searchshow=!1})),this.keyWords="",this.searchList=[])},async getHotWords(){await this.$axios.get("https://apis.netstart.cn/music//search/hot/").then((({data:t})=>{this.hotwords=[...t.result.hots],console.log(this.hotwords)}))},hotWordsClick(t){console.log(t.target.textContent),this.getSongsList(t.target.textContent),this.hotwordsshow=!1}},watch:{},components:{SongListView:B,PlaySongsView:X}},K=J,tt=(0,c.Z)(K,$,O,!1,null,"0e9683a2",null),st=tt.exports,it=function(){var t=this,s=t._self._c;return s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-width":"80px"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.login()}}},[s("el-form-item",{attrs:{prop:"userName",label:"用户名"}},[s("el-input",{attrs:{placeholder:"请输入用户名","prefix-icon":"icon-login_user",clearable:""},model:{value:t.formData.userName,callback:function(s){t.$set(t.formData,"userName",s)},expression:"formData.userName"}})],1),s("el-form-item",{attrs:{prop:"password",label:"密码"}},[s("el-input",{attrs:{placeholder:"请输入密码",type:"password","prefix-icon":"icon-login_pwd",clearable:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password",s)},expression:"formData.password"}})],1),s("el-form-item",[s("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(s){return t.login("formData")}}},[t._v("登录")]),s("el-button",{on:{click:function(s){return t.resetForm("formData")}}},[t._v("重置")])],1),s("router-link",{staticClass:"tips",attrs:{to:"register"}},[t._v("没有密码？注册")])],1)],1)},et=[],at={data(){return{formData:{userName:"",password:""},rules:{userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:{login(t){this.$refs[t].validate((t=>{if(!t)return console.log("error submit!!"),!1;this.$message({type:"success",message:"登录成功"}),this.$router.push({name:"home"})}))},resetForm(t){this.$refs[t].resetFields()}}},ot=at,nt=(0,c.Z)(ot,it,et,!1,null,null,null),rt=nt.exports,lt=function(){var t=this,s=t._self._c;return s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-width":"80px"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.register()}}},[s("el-form-item",{attrs:{prop:"userName",label:"用户名"}},[s("el-input",{attrs:{placeholder:"请输入用户名","prefix-icon":"icon-login_user",clearable:""},model:{value:t.formData.userName,callback:function(s){t.$set(t.formData,"userName",s)},expression:"formData.userName"}})],1),s("el-form-item",{attrs:{prop:"password",label:"密码"}},[s("el-input",{attrs:{placeholder:"请输入密码",type:"password","prefix-icon":"icon-login_pwd",clearable:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password",s)},expression:"formData.password"}})],1),s("el-form-item",{attrs:{prop:"cheackPassword",label:"确认密码"}},[s("el-input",{attrs:{placeholder:"再次输入密码",type:"password","prefix-icon":"icon-login_pwd",clearable:""},model:{value:t.formData.cheackPassword,callback:function(s){t.$set(t.formData,"cheackPassword",s)},expression:"formData.cheackPassword"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(s){return t.register("formData")}}},[t._v("注册")]),s("el-button",{on:{click:function(s){return t.resetForm("formData")}}},[t._v("重置")])],1),s("router-link",{staticClass:"tips",attrs:{to:"login"}},[t._v("已有密码？登录")])],1)],1)},ut=[],ct=(i(1703),{data(){let t=(t,s,i)=>{""===s?i(new Error("请再次输入密码")):s!==this.formData.password?i(new Error("两次输入密码不一致!")):i()};return{formData:{userName:"",password:"",cheackPassword:""},rules:{userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],cheackPassword:[{required:!0,validator:t,trigger:"blur"}]}}},methods:{register(t){this.$refs[t].validate((t=>{if(!t)return console.log("error submit!!"),!1;this.$message({type:"success",message:"注册成功"}),this.$router.push({name:"login"})}))},resetForm(t){this.$refs[t].resetFields()}}}),ht=ct,dt=(0,c.Z)(ht,lt,ut,!1,null,null,null),gt=dt.exports;e["default"].use(g.ZP);const mt=[{path:"",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/home",name:"home",component:v},{path:"/photo",name:"photo",component:j},{path:"/news",name:"news",component:Y},{path:"/music",name:"music",component:st},{path:"/login",name:"login",component:rt},{path:"/register",name:"register",component:gt}],Mt=new g.ZP({mode:"history",base:"",routes:mt});var pt=Mt,wt=i(3012),yt=i(2988),vt=i.n(yt),St=i(327),ft=i.n(St),Ct=i(3382),Lt=i.n(Ct),xt=i(5474),jt=i.n(xt),Nt=i(4219),Dt=i.n(Nt),It=i(9720),_t=i.n(It),At=i(2286),zt=i.n(At);const bt=[zt(),_t(),Dt(),jt(),Lt(),ft(),vt()],Tt={install:function(t){bt.forEach((s=>{t.use(s)}))}};var kt=Tt,Vt=i(2861),Et=i.n(Vt),Yt=i(2806),$t=i.n(Yt),Ot=i(8499),Zt=i.n(Ot);e["default"].use(Zt()),e["default"].use($t()),e["default"].use(Et()),e["default"].use(kt),e["default"].config.productionTip=!1,e["default"].use(wt.Z,{reqHandleFunc:t=>t,reqErrorFunc:t=>Promise.reject(t),resHandleFunc:t=>t,resErrorFunc:t=>Promise.reject(t)}),new e["default"]({router:pt,render:t=>t(d)}).$mount("#app")}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var o=s[e]={exports:{}};return t[e].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(s,e,a,o){if(!e){var n=1/0;for(c=0;c<t.length;c++){e=t[c][0],a=t[c][1],o=t[c][2];for(var r=!0,l=0;l<e.length;l++)(!1&o||n>=o)&&Object.keys(i.O).every((function(t){return i.O[t](e[l])}))?e.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(c--,1);var u=a();void 0!==u&&(s=u)}}return s}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[e,a,o]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var e in s)i.o(s,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,e){var a,o,n=e[0],r=e[1],l=e[2],u=0;if(n.some((function(s){return 0!==t[s]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(l)var c=l(i)}for(s&&s(e);u<n.length;u++)o=n[u],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},e=self["webpackChunkdemo01"]=self["webpackChunkdemo01"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(1115)}));e=i.O(e)})();