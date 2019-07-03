<template>

        <div class=" swiper-container2" style="width: 100%;">
            <ul class="swiper-wrapper">
                     <li class="swiper-slide" v-for="(item,index) in newData" :key="index">
                        <dl class="day_pro" @click="goInfo(item.goods_id)">
                            <dt>
                                <img :src="item.cover" alt="">
                            </dt>
                            <p class="ellipsis2">{{item.name}}</p>
                            <dd class="price_info">
                                <span class="p_left">{{item.symbol}}{{item.price}}</span>
                                <span class="p_right">{{item['click_count']}}看过</span>
                            </dd>
                        </dl>
                    </li>
            </ul>
        </div>

</template>
<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
import {postReq} from '../../utils/fetch.js'
export default {
    data(){
        return{
            newData:[]

        }
    },
    created() {
        this.getNewData();
    },
    methods:{
        //获取每日上新的数据
        getNewData(){
             postReq('/mall/getDataHome').then(res=>{
                   // console.log(res);
                 let {errcode, message, content} = res;
                  if (errcode == 0) {
                      this.newData = content.activityGoods[0].goods;
                    // console.log( this.newData)
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
    mounted() {
        new Swiper('.swiper-container2',{
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            observer:true,
            observeParents:true,
            slidesOffsetAfter : 100,
           loopFillGroupWithBlank: true,
            autoplay:{
                delay:1500,
                disableOnInteration:false,
             }

        })
    }
}
</script>
<style lang="scss" scoped>
    .swiper-container2{
        margin: 0 10px;
        .swiper-slide{
            margin-right: 16px;
            width:auto;
            height:auto;
            background:rgba(255,255,255,1);
            padding: 0 0 30px;
        }
    }
    .day_pro{
        width: 100%;
        height: 100%;

        dt{
            width:250px;
            height:219px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            width:215px;
            height:60px;
            line-height: 30px;
            font-size:20px;
            //font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            margin: 17px 17px 30px 18px;
        }
        .p_left{
            margin: 29px 0 29px 19px;
            font-size:24px;
            font-weight:bold;
            color:rgba(250,37,23,1);
        }
        .p_right{
           // position: absolute;
          margin-left:20px;

            bottom: 0;
            font-size:12px;
            font-weight:500;
            color:rgba(153,153,153,1);
           // line-height:30px;
        }
    }

    .ellipsis2{
         width:215px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
</style>


