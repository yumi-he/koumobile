<template>
    <div>
        <!-- 顶部 -->
       
        <!-- 头部信息部分 -->
        <div class="info clearfix">
            <div class="info-l"></div>
            <div class="info-r">
                <ul>
                    <li class="name">
                        ADMIN
                    </li>
                    <li class="person_info ">
                        <div class="balance">
                            <p class="num">0.00</p>
                            <p class="balance_num">余额(美元) </p>
                        </div>
                        <div class="scoring">
                            <p class="num">0.00</p>
                            <p class="balance_num">积分</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        <!-- 我的订单 -->
        <div class="order">
            <div class="order_top">
                <div class="order_topl">
                    <img src="./images/order.png" alt="">
                    <span>我的订单</span>
                </div>
                <div class="order_topr">
                    <span>查看全部</span>
                    <img src="./images/lookall.png" alt="">
                </div>
            </div>
            <div class="border_bot">
                <ul>
                    <li>
                        <img src="./images/pay.png" alt="">
                        <span>待付款</span>
                    </li>
                    <li>
                        <img src="./images/send.png" alt="">
                        <span>待付款</span>
                    </li>
                    <li>
                        <img src="./images/goods.png" alt="">
                        <span>待付款</span>
                    </li>
                    <li>
                        <img src="./images/evaluation.png" alt="">
                        <span>待付款</span>
                    </li>
                    <li>
                        <img src="./images/after_sales.png" alt="">
                        <span>待付款</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 收藏足迹部分 -->
        <div class="care_box">
            <ul class="first">
                <li>
                    <img src="./images/care.png" alt="">
                    <span>收藏</span>
                </li>
                <li>
                    <img src="./images/footer.png" alt="">
                    <span>足迹</span>
                </li>
                <li>
                    <img src="./images/want.png" alt="">
                    <span>我想买</span>
                </li>
                <li>
                    <img src="./images/set.png" alt="">
                    <span>设置</span>
                </li>
                <li>
                    <img src="./images/coupons.png" alt="">
                    <span>优惠券</span>
                </li>
            </ul>
            <ul class="two">
                <li>
                    <img src="./images/adress.png" alt="">
                    <span>地址</span>
                </li>
                <li class="two-l">
                    <img src="./images/share.png" alt="">
                    <span>分享</span>
                </li>
            </ul>
            
        </div>
        <!-- 为您推荐 -->
        <div class="recommended">
            <div class="recommended_img">
                <img src="./images/like.png" alt="">
            </div>
            <ul class="like_box">
               <li class="like_info">
                   <img src="./images/like_pic.png" alt="">
                   <p>【日本直邮】refa美容仪 4carat 四轮铂金滚轮按摩仪</p>
                   <span class="like_price">$323.99</span>                  
               </li>
               <li class="like_info">
                   <img src="./images/like_pic.png" alt="">
                   <p>【日本直邮】refa美容仪 4carat 四轮铂金滚轮按摩仪</p>
                   <span class="like_price">$323.99</span>                  
               </li>
           </ul>
        </div>
    </div>
</template>
<script>

export default {
    components:{
        
    }
}
</script>
<style lang="scss" scoped>
    .info{
        box-sizing: border-box;
        width:750px;
        height:200px;
        background:rgba(255,255,255,1);
        padding-top: 27px;
        margin-top:3px;
        >div{
            float: left;
        }
        .info-l{
            width:160px;
            height:160px;
            background:rgba(226,51,60,1);
            opacity:0.3;
            border-radius:50%;
            margin: 0px 50px 28px 27px;
        }
        .info-r{
            .name{
                font-size:30px;
                //font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(161,30,63,1);
                line-height:24px;
                margin-top:29px;
                margin-bottom: 32px;
            }
            .balance{
                margin-right: 127px;                
            }
            .num{
                font-size:30px;
                font-family:PingFang-SC-Medium;
                font-weight:bold;
                color:rgba(227,11,91,1);
                margin-bottom: 15px;
            }   
            .person_info{
                display: flex;
            }        
            .balance_num,.scoring_num{
                font-size:20px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(227,11,91,1);
                
            }
        }
    }
    .order{
        box-sizing: border-box;
        margin-top:10px;
        width:750px;
        height:268px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 6px 0px rgba(221,221,221,1);
       
        .order_top{
            position: relative;
            height:125px;
            .order_topl{
                position: absolute;
                top:42px;
                left:45px;
                img{
                    width:40px;
                    height:38px;
                     vertical-align: middle;
                }
                span{
                    display: inline-block;
                    font-size:32px;
                    font-family:PingFang-SC-Medium;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    line-height:24px;
                    vertical-align: middle;
                    margin-right: 25px;
                }
            }
            .order_topr{
                position: absolute;
                top:42px;
                right:44px;
                img{
                    width:16px;
                    height:32px;
                    vertical-align: middle;
                }
                span{
                    font-size:32px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height:24px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 22px;
                }
            }
        }
        .border_bot{
            margin-bottom: 40px;
            padding:0 20px;
            ul{
                display: flex;
               justify-content: space-around;
                li{
                   
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    img{
                        width:60px;
                        height: 60px;
                        margin-bottom: 18px;
                    }
                    span{
                        font-size:22px;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:24px;
                    }
                }
            }
        }
    }
    .care_box{
        box-sizing: border-box;
        width:750px;
        height:300px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(221,221,221,1);
        margin-top: 2px;
        padding:25px 30px 20px 38px;
        .first{
            display: flex;
            justify-content: space-around;
            margin-bottom: 40px;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img{
                    width: 60px;
                    height:60px;
                    margin-bottom: 25px;
                }
                span{
                    font-size:24px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
            }
        }
        .two{
            display: flex;
           margin-left: 30px;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img{
                    width: 60px;
                    height:60px;
                    margin-bottom: 25px;
                }
                span{
                    font-size:24px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
            }

        }
    }
    .two-l{
        margin-left:80px;
    }
    .recommended{
        .recommended_img{
            width:100%;
            height:29px;
            padding:30px 0 19px;
            text-align: center;
            
            img{
                width: 339px;
                height:29px;
            }
        }
        .like_img{
        width:100%;
        height:29px;
        padding:30px 0 19px;
        text-align: center;
        
        img{
            width: 339px;
            height:29px;
        }
    }
    .like_box{
        padding: 0 10px;
        display: flex;
        .like_info{
            width:360px;
            height:534px;
            background:rgba(230,230,230,1);
            border-radius:10px;
            margin-right: 10px;
            img{
                width:360px;
                height:360px;
                border-radius:10px 10px 0px 0px;
            }
            p{
                font-size:20px;               
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:35px;
                margin:24px 15px 40px 22px;
                width:323px;
                height:49px;
            }
            .like_price{
                font-size:24px;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(255,0,0,1);
                line-height:30px;
                margin-left: 23px;
            }
        }
    }
    
    .ellipsis2{
         width:193px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    }
</style>

