"use strict";(self["webpackChunkdemo03"]=self["webpackChunkdemo03"]||[]).push([[28],{2028:function(t,s,e){e.r(s),e.d(s,{default:function(){return n}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"before-login-view"},[s("div",{staticClass:"bg-img"},[s("div",{staticClass:"top-delete-icon",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"cross"}})],1)]),s("div",{staticClass:"form"},[s("form",[s("div",{staticClass:"phone-ipt-wrap"},[s("span",{staticClass:"add86"},[t._v("+86")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"输入手机号"},domProps:{value:t.phoneNumber},on:{input:function(s){s.target.composing||(t.phoneNumber=s.target.value)}}})]),s("div",{staticClass:"captcha-ipt-wrap"},[s("input",{ref:"theCaptcha",attrs:{type:"text",placeholder:"输入验证码"}}),s("div",{ref:"Captcha",staticClass:"getCaptcha",on:{click:t.getCaptcha}},[t._v(" 获取验证码 ")])])])]),s("div",{staticClass:"to-agree"},[s("div",{staticClass:"checkbox-wrap"},[s("input",{ref:"agreeCheck",attrs:{type:"checkbox"}})]),t._m(0)]),s("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("注册/登录")]),s("div",{staticClass:"password-to-login"},[t._v("账号密码登录 "),s("van-icon",{attrs:{name:"arrow"}})],1),t._m(1),s("div",{staticClass:"bottom-icon"},t._l(t.iconData,(function(t,e){return s("div",{key:e,staticClass:"icon"},[s("img",{staticClass:"auto-img",attrs:{src:t.icon,alt:""}})])})),0)])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"agree-text"},[t._v(" 我已阅读并同意 "),s("span",{staticClass:"blue-text"},[t._v("《用户服务协议》")]),t._v(" 和"),s("span",{staticClass:"blue-text"},[t._v("《隐私政策》")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"third-to-login"},[s("div",{staticClass:"line"}),s("div",{staticClass:"text"},[t._v("第三方账号登录")]),s("div",{staticClass:"line"})])}],r=(e(7658),{name:"beforeLogin",data(){return{iconData:[{icon:e(70)},{icon:e(5404)},{icon:e(6094)}],timer:null,seconds:60,phoneNumber:"",captcha:""}},methods:{getCaptcha(){this.$refs.agreeCheck.checked?(this.captcha=123456,this.$toast(`验证码为:${this.captcha}`),this.$refs.Captcha.textContent=this.seconds,this.timer=setInterval((()=>{this.$refs.Captcha.textContent=this.seconds,this.seconds--,this.$refs.Captcha.style.pointerEvents="none",0==this.seconds&&(clearInterval(this.timer),this.timer=null,this.$refs.Captcha.textContent="获取验证码",this.$refs.Captcha.style.pointerEvents="auto",this.seconds=60)}),1e3)):this.$toast("请先勾选协议")},login(){let t=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;""==this.captcha||this.captcha!=this.$refs.theCaptcha.value?this.$toast("请输入正确的验证码"):t.test(this.phoneNumber)?(this.$toast("登录成功"),window.localStorage.setItem("appActiveIndex",4),window.localStorage.setItem("token","u235gty6h88"),this.phoneNumber="",this.captcha="",this.$router.push({name:"user"})):this.$toast("请输入正确的手机号格式")},goBack(){this.$router.go(-1)}}}),o=r,c=e(1001),A=(0,c.Z)(o,a,i,!1,null,"f84d6c3c",null),n=A.exports},5404:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAhFBMVEUAAAAq0Zoq0Zoq0poq0Zoq05os0p0s05wr05wq0psq0poq0Zoq0por0pst1p8u1qAq0poq0Zor0Zsr05sq0Zr///851KHV9utC1qXr+/Z04b5K2Kny/PnD8uO58N1U2q6h69N948Fm3rfk+fKZ6c+H5cbd9+/O9Oix7tpe3LOo7NaP58qjo4K4AAAAFHRSTlMA+u3G4mZJNipVuq+kmRwT0ot7QGv0EBgAAAQRSURBVGjevNSLFYMgDAVQ8kFARVt9+8/aAWwtQuAukJPkJe65mI51lpcyEetL5vVI0XUW/aKEL0gX36v67lfFLV397qylhVCAluQMhcwoxjk4G+eMh+bTtZsEFWRqHbKgkoSWIGc0yNUR94wm7F2NTdBMtopQMQzw45C9YeRdOeax444KQxqLj5dhikNhrAjGqChiiWCOklW/9j0HQhcU/uSZ0QnH2/tVdKN39yzoSFr/pP33nNDZ9GPBjM54a1iw/Zo9BvDuYmcMwPulcMYQ+fIqMciH13rdTRiGoQCsdmhsgDQEx0l6v0JL+/7vN4FoV4Yax/3R7wF6GsWxvV2lsvj6+sRqPlc4MH/kM1Z0ngTvsKLdkpJWYZfoiuJKJ3WpsMxW+oZNrelFEzLZ3Fv24SDq6F1QL4j2x70SPDWNnQpCiA075x6s7EqzEgWh/XM8eOAUZHM1kPF+HOdhSHZBhoFkOh74XE5gIHJ4BG9glxGvUZDYPHZ4MDQ5yCHy5XDFFxqlkSrisaRu6jap9Uh8yXtYqZgGzfAfY5KhUSp+UBvnA/eYZGncNZYjc5fsOd9wPi21CnfV9LcEPLa2IvoTGwApPRX/GosWVte3oGfFea9plPbDTwQ6abtWydr1CVY1MeK0MIDJylskST5xfaslq+qiVJlrekr6DG4O3NbTWE9bwNQxvdCh4/7zsTy4MSqnd1XotGseYZXSrHx2SjvU2ZHrHx3N6SxTqzJ8B/EXrgDtkLss2ecaVzT3ZVWSzVVxrcvDoqH4y5yZ6DYIA0FUiVI1V9Wq3bU5Yg4XKMf//1+lShTLiXasQCLeB2At4JnZXatiFunRwVvCJnFNRv2kIK6aGR7pwKtG+eN2ZTZ1U0/hHJaEafdOuE5CyTFVrmVFrmHHQT75IQiIoCH95IeZZ5WKRypZQI6EiC7sUzs/e0mp/i9fqUlxtCyZZ4J07GMtYy6ySXwSxvo15yUHoERbPFAAqSfKXc0BRGIQ2FMIyrBLksyteC+EPaGdGPKZ33gzxltI4XWmjDEg3p4IMcpCU7ejOijDkBIE+hcKoGOO/x6U10VrtLYBHaQCLcyeAmgvg/IlHFDJsTrwI1/PWOycgnegMb8zjWFXPM8ZzSvNAgPhUcT7ZvmTC8LDF3yhsJz5gGR9wgO2u3IR5yRzQCNFTNqyD+7Rt4ssQqKqYQcNrzDR21KbkKgssp9Gm7ayinLD/E0irw8alFstX+Lj41YDyUACX2tYhjx1/bOOhdcTV3xrWWr+dm8HRAAAIAgD+7e2gwI3zLFfLONywnUm1bNwQoBj0ACKm9wQkZGVVTEhmY/OcbGgh0eyQaiewPLRr5Q5t8BuFWVvwvuCXaFv0LgsKb0TzmY76h+tNmvZg5lOvA8Ol7t/Qvdc2dIAAAAASUVORK5CYII="},70:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAAAArr/wrr/wws/8rrvwsr/8ssf8rr/9CvP8ssP8rrvwrrvwsrvwrrv0rr/0rr/wrrvwrrvwsrv0rrvwtsPwrr/8rrvz////0+/7j9P5Iufw8tfwysfzU7/7L6/5awPzA5/6g2/2q3v1sx/x2y/204v2H0f2T1v0wEtO6AAAAFnRSTlMA68YX4Ek2KgZV97qvpJlj79KLe2tAGSlKXwAAA2dJREFUaN7E1mtyozAQBOCRkEG8/WxBTPxMOfe/4W52f7gqseUZkMh3AVV39RSQmM3yTV3qlVFFocxKl/UmzyzFlW0rg4dMtc0ojqStFbxU3SYUmM0rsFR5yNbTZgm2ZZNSGLsSQuWOpltojKAXU0vWGElPKTxpMEEzeuKtwiSqHRdXYzI9IvRCIQAlHZldI5C1nV5z/Lozg4BMRkypQlAqZc6qQGAFa2I5IsgZeRHFy8xpgSiKlLwyhUhURh6JQTTGc89WIyJt6Zk1olrLBh1/2olCZCqhRzSi0/RAixm07KLjl91gFg19k2ImKX9ZUfe1wGwW3MBRI+8wox3dlZhROW3Sx89T3znXH87XATLp+Bsebr27685vELjfsl1C5qNz35wlqZd23H/lcHE/vUtC5/RfBYnh4B7pBC9X9E8CkZN7rN+DLRnxPby5Z05ga+lLDYF95566gqumLwoCZ/fcO7gU/ZVBYOicxxFcGRFtIXB1PhdwbaXHdHE+PQD+QRkI9M6LfcuGyEJgcB6iXVvZtt6c3w1cGeWQbSvQunLaQODg/Lo9mDZUQ9R0qK5rKiFr2u8MppI0RE2H6lrTCmx799oHeFZkwHZ0r32Cx5D6ncSKCv67B/dafwRL8Yc5M9pBEIahqCgPGiW+KJ1jGxsy+f8/VBON0Qc5JcZwHglJM1jb21seuDkJwbQwcPHLuDxygS9XFABXfSVNp0E4gaQTLCDWCIFf7SUsmVk0nBwomRUTAAwuCCrWFnvRkUFb3PAvzTFACCDp40VJMy591kxcKrHjYm9R0sBGEIYELqGgjyLSRRb3LDeIoD+wuuVdDy90AuPbAQ5treQG/mlb14MZyNCG+pOjCiQ9Xv9OoRzMk4zhXU2otFZEBh2RsEfmCx9TPRW3K6XdZJP/fuDMdM+OGGy8VfCxbaOyFGk6YUuRm6hGAC02UbltHEjFdNg25kZ5+3nkcOkmzKlb/WrAxrfkOd8f5bdrTUyQ45RliO1TDN6H2F3sU+m/HqFkWs5j/fPHhddcVnzX7u2ACAAQhmGgf9doAJZeOh35xKKmJ+OGwrUp1Udwgotj8ADFR25gZGRkVSQks9I5CguaeSQBQu0Edhr9NjDnQdjdQ9lH8H7brvA5aHQuKa8TTvd2dDta7VjLsJkuvw8eO1/SKvbe0bsAAAAASUVORK5CYII="},6094:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=28.2b380f91.js.map