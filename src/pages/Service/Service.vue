<template>
    <div class="service">
        <div class="top"></div>
        <div class="header_top">联系客服</div>
        <div class="middle">
            <img src="/static/img/kefu.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .service{
        height: 100%;
    }
    .top{
        width:749px;
        height:40px;
        background:rgba(255,255,255,1);
    }
    .header_top{
        box-sizing: border-box;
        width:749px;
        height:96px;
        background:rgba(255,255,255,1);
        border-radius:0px 0px 10px 10px;
        font-size:38px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(52,52,52,1);
        text-align: center;
        padding-top:25px;
    }
    .middle{
        padding: 10px 21px 0 21px;
        width: 750px;
        height: 1036px;
        box-sizing: border-box;
        img{
            width: 698px;
            height: 1036px;
        }
    }
</style>


