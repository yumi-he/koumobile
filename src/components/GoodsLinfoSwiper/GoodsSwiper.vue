<template>
    <div class="container">
        <div class="swiper-container swiper-container3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="img_container">
                            <img src="./images/goods.png" style="cursor: pointer;">
                        </div>
                    </div>   
                     <div class="swiper-slide">
                        <div class="img_container">
                            <img src="./images/goods.png" style="cursor: pointer;">
                        </div>
                    </div> 
                     <div class="swiper-slide">
                        <div class="img_container">
                            <img src="./images/goods.png" style="cursor: pointer;">
                        </div>
                    </div>                            
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination2" style="text-align: center;margin-top: -3px;position: absolute;z-index: 1;"></div>
           </div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
export default {
    mounted() {
         new Swiper('.swiper-container3', {
                  // Optional parameters
                  direction: 'horizontal',
                  loop: true,
                  speed : 1000,
                  observer:true,
                 // observeParents:true,
                 // loopFillGroupWithBlank: true,
                  // autoplay: 500,
                  autoplay:{
                    delay:3500,
                    disableOnInteraction: false,
                    stopOnLastSlide:false
                   },
                  autoplayDisableOnInteraction: false,
                  effect: 'fade',
                  pagination: {
                    el:'.swiper-pagination2',
                    clickable: true,
                  },
                  // preventLinksPropagation: false,
                  paginationClickable: true,
                 // autoHeight: true
        });
    },
}
</script>
<style>
   .swiper-pagination2 span.swiper-pagination-bullet{
        width: 12px;
        height: 12px;
        background-color: blue;
        border-radius: 50%;
    }
</style>
<style lang="scss" scoped>
    .container{
        width:750px;
        height: 684px;
        .img_container{
            width: 750px;
            height:684px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>


