<template>
    <div>
        <div class="top">
            <div class="top_left">
                <img src="/static/img/back.png" alt="">
            </div>
            <div class="top_right">
                购物车
            </div>
        </div>
        <div class="bottom">
            <img src="static/img/gouwuche.png" alt="">
            <h1>购物车是空的哦，快去购物吧</h1>
            <a href="#/" class="router-link-active">逛一逛</a>
        </div>
    </div>
</template>

<script>

export default {

}
</script>
<style lang="scss" scoped>
    .top{
        box-sizing: border-box;
        width:100%;
        height:130px;
        background-color: #fff;
        >div{
            float: left;
        }
        .top_left{
            width: 10%;
            height: 130px;
            img{
                width: 60px;
                height: 60px;
                margin:35px 30px;
            }
        }
        .top_right{
            width: 80%;
            height: 100%;
            text-align: center;
            font-size: 0.50rem;
            line-height: 1.85rem;
        }
    }
    .bottom{
        box-sizing: border-box;
        img{
            width: 4.4rem;
            height: 5.2rem;
            display: block;
            margin: auto;
            padding-top: 1.5rem;
        }
        h1{
            margin-top: 0.5rem;
            text-align: center;
            color: #959595;
            font-size: 0.6rem;
        }
        a{
            display: block;
            text-align: center;
            margin: 0.8rem auto;
            width: 210px;
            height: 67px;
            line-height: 67px;
            border-radius: 6px;
            text-align: center;
            background: #e0524b;
            color: white;
            font-weight: 800;
            font-size: 0.5rem;
        }
    }
</style>


