<template>
    <div class="footer_guide">
        <router-link to="/home" class="guide_item " :class="{on:'/home'===$route.path}">
            <span class="item_img">
                <img :src="$route.path=='/home'?'/static/img/home2.png':'/static/img/home1.png'" alt="">
            </span>
            <span class="item-font">
                首页
            </span>
        </router-link>
        <router-link to="/classify" class="guide_item " :class="{on:'/classify'===$route.path}">
            <span class="item_img ">
                <img :src="$route.path==='/classify'?'/static/img/classify2.png':'/static/img/classify1.png'" alt="">
            </span>
            <span class="item-font">
                分类
            </span>
        </router-link>
        <router-link to="/service" class="guide_item " :class="{on:'/service'===$route.path}">
            <span class="item_img">
                <img :src="$route.path==='/service'?'/static/img/service2.png':'/static/img/service1.png'" alt="">
            </span>
            <span class="item-font">
                客服
            </span>
        </router-link>
        <router-link to="/shopcar" class="guide_item " :class="{on:'/shopcar'===$route.path}">
            <span class="item_img">
                <img :src="$route.path==='/shopcar'?'/static/img/shopcar2.png':'/static/img/shopcar1.png'" alt="">
            </span>
            <span class="item-font">
                购物车
            </span>
        </router-link>
        <router-link to="/mine" class="guide_item " :class="{on:'/mine'===$route.path}">
            <span class="item_img">
                <img :src="$route.path==='/mine'?'/static/img/my2.png':'/static/img/my1.png'" alt="">
            </span>
            <span class="item-font">
                我的
            </span>
        </router-link>
    </div>
</template>

<script>
    export default{   
        data(){
            return {
                flag:true
            }
        },   
        mounted() {
        },
        methods:{
            
            // click:function(src){
            //     console.log(document.getElementById("img1"))
            //     var i =  document.getElementById("img1");
            //     i.src=src;


            // }
            
        }
    }
</script>

<style lang="scss">
    .footer_guide{
        width:750px;
        //height:98px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 5px 0px rgba(221,221,221,1);
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        display: flex;   
       box-sizing: border-box;
        padding:0 30px 13px;                  
    }
    .guide_item{
         flex:1; 
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size:20px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(153,153,153,1);
        
    }
    .item_img{
        display: block;
        width:50px;
        height:50px;
        img{
             width:50px;
        height:50px;
        }
         margin:17px 0 13px;
    }             
   .footer_guide .guide_item.on{
       color:rgba(227,11,91,1);
      font-weight: 900;    
    }
    
</style>
