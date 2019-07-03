<template>
    <div>
        <div class="container">
           <div class="swiper-container swiper-container1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
                        <div class="img_container">
                            <img :src="item.web_image" style="cursor: pointer;">
                        </div>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination1" style="text-align: center;margin-top: -3px;position: absolute;z-index: 1;"></div>
           </div>
            <div class="search">
                <input type="text" placeholder="手机狂欢节 抢iPhone XS Max">
                <div class="search_img">
                    <img src="./images/search.png" alt="">
                 </div>
            </div>

       </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
import {postReq} from '../../utils/fetch.js'
export default {
    data(){
        return {
            banners:[]
        }
    },
    created() {
        this.getBannerImage();
    },
    methods:{
        getBannerImage(){
             postReq('/mall/getDataHome').then(res=>{
                 //console.log(res)
                 let {errcode, message, content} = res;
                 if(errcode == 0){
                     this.banners = content.banner;
                    // console.log(this.banners)
                 }else{
                     errorInfo(errcode, message);
                 }
             })
        }
    },
     mounted() {
        new Swiper('.swiper-container1', {
                  // Optional parameters
                  direction: 'horizontal',
                  loop: true,
                  speed : 1000,
                  observer:true,
                 observeParents:true,
                 loopFillGroupWithBlank: true,
                  // autoplay: 500,
                  autoplay:{
                    delay:3500,
                    disableOnInteraction: false,
                    // stopOnLastSlide:false
                   },
                  autoplayDisableOnInteraction: false,
                  effect: 'fade',
                  pagination: {
                    el:'.swiper-pagination1',
                    clickable: true,
                  },
                  // preventLinksPropagation: false,
                  paginationClickable: true,
                 // autoHeight: true
                });
    }
}
</script>
<style>
   .swiper-pagination1 span.swiper-pagination-bullet{
        width: 12px;
        height: 12px;
        background-color: blue;
        border-radius: 50%;
    }
</style>
<style lang="scss" scoped>
     .container{
        width: 750px;
        height: 360px;
        position: relative;
        .img_container{
            width: 750px;;
            height: 360px;
            img{
                width: 100%;
                 height: 100%;
            }
        }
        .search{
            position: absolute;
            top:26px;
            left:116px;
            z-index: 1;
            input{
                width:435px;
                height:19px;
                background:rgba(242,242,242,1);
                opacity:0.9;
                border-radius:24px;
                padding: 15px 0 14px 63px;
                outline: 0;
                font-size:16px;
                font-family:PingFang-SC-Medium;
                 font-weight:500;
                &::-webkit-input-placeholder{
                   color:rgba(153,153,153,1);
                }
            }
        }
    }
   .search_img{
       position: absolute;
       top:11px;
       left:24px;
       width: 26px;
       height: 26px;
       img{
           width: 100%;
           height: 100%;
       }
   }
</style>


