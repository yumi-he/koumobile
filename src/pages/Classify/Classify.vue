<template>
    <div>
        <!-- 头部搜索部分 -->
        <div class="search">
            <input type="text" placeholder="手机狂欢节 抢iPhone XS Max">
            <div class="search_img">
                <img src="./images/search.png" alt="">
            </div>
        </div>
        <!-- 主要内容部分 -->
        <tab-vertical/>
    </div>
</template>

<script>
import TabVertical from '../../components/TabVertical/TabVertical.vue'
export default {
    components:{
        TabVertical
    }
}
</script>
<style lang="scss" scoped>
    .search{
        width:750px;
        height:88px;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 3px 0px rgba(193,188,188,1);
        position: fixed;
        z-index: 10;
        input{
             width:435px;
            height:19px;
            background:rgba(242,242,242,1);
            opacity:0.9;
            border-radius:24px;
            outline: 0;
            padding: 15px 0 14px 63px;
            margin:20px 126px;
            &::-webkit-input-placeholder{
                color:rgba(153,153,153,1);
            }
        }
    }
    .search_img{
       position: absolute;
       top:31px;
       left:150px;
       width: 26px;
       height: 26px;
       img{
           width: 100%;
           height: 100%;
       }
   }


</style>

