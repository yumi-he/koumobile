<template>
    <div class="header_top" v-if="flag">
        <span class="left" @click="click()">
            <img src="./images/关闭.png" alt="">
        </span>
        <div class="middle">
            <span class="middle-l">
                <img src="./images/top-logo.png" alt="">
            </span>
            <div class="middle-r">
                <p>KouHigh网APP </p>
                <p class="two">出国在海外，购物在口嗨</p>
            </div>
        </div>
        <div class="right">
            <img src="./images/button.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flag:true
        }
    },
    methods:{
        click:function(){
            this.flag = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    .header_top{
        width:750px;
        height:90px;
        background:rgba(255,255,255,1);

    }
    .left{
        float: left;
        display: block;
        width:32px;
        height:32px;
        img{
            width: 100%;
            height: 100%;
        }
        margin: 29px 28px 20px 29px;
    }
    .middle{
        float: left;
    }
    .middle-l{
        display:block;
        width: 60px;
        height: 60px;
        float: left;
        img{
            width: 100%;
            height: 100%;
        }
        margin: 15px 17px 15px 0;
    }
    .middle-r{
        float: left;
        margin: 17px 0 18px;
        width:265px;
        height:55px;
        p{
            width:265px;
            height:55px;
            border: 0;
            font-size:18px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(226,51,60,1);
        }
        .two{
            margin-top: -20px;
        }
    }
    .right{
        width:130px;
        height:56px;
        margin: 17px 20px 17px 0;
        float:right;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>

