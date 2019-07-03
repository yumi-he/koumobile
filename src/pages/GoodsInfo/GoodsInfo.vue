<template>
    <div>
        <div class="goosinfo_top">
            <goods-swiper/>
        </div>
      

    </div>
</template>
<script>
import GoodsSwiper from '../../components/GoodsLinfoSwiper/GoodsSwiper.vue'
export default {
    components:{
        GoodsSwiper
    }
}
</script>
<style lang="scss" scoped>
    .goosinfo_top{
        box-sizing: border-box;
        width:750px;
        height:910px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 4px 0px rgba(221,221,221,1);
        border-radius:0px 0px 10px 10px;
    }
</style>


