<template>
    <div>
        <!-- 顶部app广告 -->
        <header-top/>
        <!-- 轮播图 -->      
       <swiper/>
       <!-- 导航部分 -->
        <div class="nav">
           <div>
               <span class="nav_img">
                   <img :src="navList['app_footmark']" alt="">
               </span>
                <span class="nav_font">
                    足迹
                </span>
           </div>
           <div>
               <span class="nav_img">
                   <img :src="navList['app_collectio']" alt="">
               </span>
                <span class="nav_font">
                    收藏
                </span>
           </div>
           <div>
               <span class="nav_img">
                   <img :src="navList['app_complain']" alt="">
               </span>
                <span class="nav_font">
                    我来上架
                </span>
           </div>
           <div>
               <span class="nav_img">
                   <img :src="navList['app_sign']" alt="">
               </span>
                <span class="nav_font">
                   签到
                </span>
           </div>
           <div>
               <span class="nav_img">
                   <img :src="navList['app_invitation']" alt="">
               </span>
                <span class="nav_font">
                    邀请有礼
                </span>
           </div>
     </div>
       <!-- 活动接口 -->
       <div class="active">
           <div class="active_img">
              <img :src="activelist['img_a']" alt=""> 
           </div>
       </div>
       <!-- 礼包、折扣部分 -->
       <div class="discount clearfix">
           <div class="discount-l right">
               <div class="newperson">
                   <a href="javascript:;">新人礼包</a>                  
               </div>
               <div class="gift">
                    <img :src="discountData['app_nb']" alt="">
                </div>
                <div class="gift_price">
                    新人大礼包
                    &nbsp;&nbsp;&nbsp;&nbsp;0刀购
                </div>
           </div>
           <div class="discount-r">
               <div class="hot_discount">
                   <a href="javascript:;">爆款折扣</a>
                   <div class="hot_pro">
                       <img src="./images/hot.png" alt="">
                   </div>
                   <div class="hot_pro_r">
                       <img src="./images/hot.png" alt="">
                   </div>
               </div>
           </div>
       </div>
       <!-- 每日上新 -->
       <div class="day_product">
           <div class="day_img">
               <img src="./images/day.png" alt="">
           </div>           
            <new-swiper/>         
       </div>  
       <!-- 主要内容部分  -->
       <div class="main_box">
           <ul>
               <!-- 零食 -->
               <li v-for="(item,index) in dataList" :key="index">                  
                   <div class="info_box" >
                       <a href="javascript:;" class="food_link">
                           <img :src="item.icon" alt="">
                       </a>
                       <div class="info_box_2 clearfix" >
                            <dl class="info_list" v-for="(items,index) in item.goods" :key="index" @click="goInfo(items.goods_id)">
                                <dt class="foodpic">
                                    <img :src="items.cover" alt="">
                                </dt>
                                <p class="ellipsis2">
                                    {{items.name}}
                                </p>
                                 <dd class="price_info">
                                    <span class="p_left">{{mainSymbol}}{{items.price}}</span>
                                    <span class="p_right">{{items.stock}}看过</span>
                                </dd>
                            </dl>
                       </div>
                   </div>
               </li>              
           </ul>
       </div>
       <!-- 猜你喜欢 -->
       <div class="like">
           <div class="like_img">
               <img src="./images/like.png" alt="">
           </div>
           <ul class="like_box">
               <li class="like_info" v-for="(item,index) in likeList" :key="index" @click="goInfo(item.goods_id)" >
                  <a href="javascript:;"><img :src="item.cover" alt=""></a> 
                   <p class="ellipsis2">{{item.name}}</p>
                   <span class="like_price">{{likeSymbol}}{{item.price}}</span>                  
               </li>             
           </ul>
       </div>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
import NewSwiper from '../../components/NewSwiper/NewSwiper.vue'

import {postReq} from '../../utils/fetch.js'
export default {
    data(){
        return {
           navList:[],//足迹、收藏部分数据
           activelist:[],//活动接口图片
           discountData:[],//新人大礼包部分数据
           dataList:[],//主要内容部分数据
           mainSymbol:'',//主要内容部分数据
           likeList:[],//猜你喜欢的数据
           likeSymbol:''//猜你喜欢部分的符号
           
            
        }
    },
    created() {
        this.getNavList();
       this.getDataList();
       this.getLikeData();
    },
    methods:{
        //获取足迹、收藏部分的数据
        getNavList(){
             postReq('/mall/getHomeImg').then(res=>{
                    //console.log(res);
                 let {errcode, message, content} = res;
                  if (errcode == 0) {
                      this.navList =  content.app_icon;
                      this.activelist = content.active;
                      this.discountData = content.advertise;
                     //console.log( this.discountData)
                  }else{
                       errorInfo(errcode, message);
                  }
             })
        },
        //主要部分数据加载
        getDataList(){
             postReq('/mall/getDataHome').then(res=>{
               //  console.log(res);
                 let {errcode, message, content} = res;
                 if(errcode == 0){
                     this.mainSymbol = content.symbol;
                    this.dataList = content.topic;
                           
                  // console.log( this.dataList);
                 }else{
                      errorInfo(errcode, message);
                 }
             })
        },
        //获取猜你喜欢的数据
        getLikeData(){
             postReq('/goods/getLikeGoods').then(res=>{
                // console.log(res);
                 let {errcode, message, content} = res;
                 if(errcode == 0){
                     this.likeSymbol = content.symbol;
                     this.likeList = content.like;
                    // console.log(this.likeList); 

                 }else{
                      errorInfo(errcode, message);
                 }


             })
        },
        //点击跳转到详情页
         goInfo(id){
               //第一种：直接传递一个字符串---最简单的
              // this.$router.push('/home/goodsinfo/'+id);
               //第二种：传递一个对象path
               this.$router.push({path:'/home/goodsinfo/'+id})
               //第三种：传递命名的路由----name为路由规则里面定义的路由的名字
               //this.$router.push({name:'goosinfo',params:{id:_id}})
           }

    },
    components:{
        HeaderTop,
        NewSwiper,
        Swiper
       
    }
}
</script>
<style lang="scss" scoped>
    .nav{
        display: flex;
        padding: 20px 50px 12px;
        justify-content: space-between;
       
        > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           // margin-right:47px;
        }
        
    }
    .nav_img{
        width: 116px;
        height: 116px;       
        img{
            width: 116px;
            height: 116px;
        }
    }
    .nav_font{      
        font-size:22px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .active{
        padding: 0 18px 0 14px;
        .active_img{
            width: 718px;
            height:270px;
           
            img{
                width:100%;
                height: 100%;
            }
        }
    }
    .discount{
        padding:0 10px;
        display: flex;
        height: 280px;
        >div{
            width:363px;
            height:278px;
            background:rgba(242,242,242,1);
            border:1px solid rgba(221,221,221,1);
            //float: left;
            position: relative;
        }
        .right{
            border-right: 0;
            width:364px;
        }
        .newperson,.hot_discount{
            position: absolute;
            top: 0;
            left:0;
            // width:140px;
            // height:46px;
            background:linear-gradient(90deg,rgba(227,11,91,1) 0%,rgba(195,125,239,1) 100%);
            border-radius:0px 0px 30px 0px;
            padding: 10px 19px 11px 18px;
            a{
                font-size:26px;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(255,255,255,1);
                
            }          
        }
        .gift{
            position: absolute;
            top:68px;
            left:24px;
            width:154px;
            height:192px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .gift_price{
            position: absolute;
            top:107px;
            left:201px;
            width:150px;
            height:65px;
            font-size:30px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(203,97,203,1);
        }
    }
    .hot_pro{
        position: absolute;
        top:85px;
        left:70px;
        width:67px;
        height:160px;
        img{
            width: 100%;
            height:100%;
        }   
    }
    .hot_pro_r{
        position: absolute;
        top:85px;
        left:229px;
        width:67px;
        height:160px;
        img{
            width: 100%;
            height:100%;
        }
    }
    .day_product{
        margin-bottom: 20px;
    }
    .day_img{
        width:100%;
        height:29px;
        padding:30px 0 19px;
        text-align: center;
        
        img{
            width: 339px;
            height:29px;
        }
        
    }
    .main_box{
        .main_link{
           width:100%;
            height:29px;
            padding:30px 0 19px;
            text-align: center;           
            img{
                width: 339px;
                height:29px;
            } 
        }
        .info_box{
            padding:0 9px 0px 10px;
            p{
                height: 53px;
            }
             
        }
        .food_link{
            display: block;
            width:730px;
            height:146px;
            //margin: 0 10px;
           
            img{
                 width:730px;
                 height:146px;
            }
        }
        .info_box_2{          
            .info_list{
                width:234px;
                height:auto;
                padding-bottom: 15px;
                background:rgba(255,255,255,1);
                float: left;
                 margin-right:8px;
                 margin-bottom: 10px;
                &:nth-child(3n){
                    margin-right: 0;
            }

            .foodpic{
               
                // width:200px;
                // height:175px;
                img{
                    width:200px;
                    height:175px;
                    // width: 100%;
                    // height: 100%;
                }
            }
            p{
                font-size:18px;               
                font-weight:500;
                color:rgba(51,51,51,1);
                margin:4px 24px 26px 23px;
                line-height: 26px;
               
            }
            .p_left{
                margin: 29px 0 29px 10px;
                font-size:20px;           
                font-weight:bold;
                color:rgba(250,37,23,1);
            }
            .p_right{
               
                margin-left: 15px;
                bottom: 0;           
                font-size:12px;           
                font-weight:500;
                color:rgba(153,153,153,1);
            }
        }
        }
        
    }
    .like{
       // height: 1000px;
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
        width: 100%;
        flex-wrap: wrap;
        .like_info{
            width:360px;
            height:534px;
            background:rgba(230,230,230,1);
            border-radius:10px;
            margin-right: 10px;
            margin-bottom: 10px;
            a{
                display: block;
                background: #fff;
            }
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
               height:69px;
            }
            .like_price{
                font-size:24px;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(255,0,0,1);
                line-height:30px;
                margin-left: 23px;
                margin-bottom: 10px;
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
</style>


