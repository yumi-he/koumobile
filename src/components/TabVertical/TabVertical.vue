<template>
    <div class="tab">
        <div class="calssify-con" >
            <div class="calssify-left" ref="wrapper">
                <ul class="calssify-left-ul" >
                    <li class=" calssify-left-li" v-for="(item,index) in categoryList" :key="index" @click="qiehuan(index)" :class="{active:index===classifyIndex}">{{item.name}}</li>
                </ul>
            </div>
            <div class="calssify-rigtht" ref="wrapper2" >
                <ul class="calssify-right-ul" >
                    <img src="./images/c_food.png" alt="">
                    <!-- 零食材料 -->
                    <li v-for="(item,index) in right" :key="index" >
                        
                        <p>{{item.name}}</p>
                        <div class="food_list clearfix">
                            <dl v-for="(goods,index) in item.child_category" :key="index">
                                <dt><img :src="goods.icon" alt=""></dt>
                                <dd class="ellipsis2">{{goods.name}}</dd>
                             </dl>                           
                        </div>
                    </li>                      
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {postReq} from '../../utils/fetch.js'
export default {
    data(){
        return{
            categoryList:[],
            classifyIndex: 0,
            right:[],
            index:0

        }
    },
    created() {
        this.getCategory();
    },
    methods:{
        //获取分数据
        getCategory(){
            postReq('/category/getCategory').then(res=>{
               // console.log(res);
                 let {errcode, message, content} = res;
                  if (errcode == 0) {
                      this.categoryList = content.category;
                    this.right = this.categoryList[0].child_category;
                   //  console.log( this.right);
                  }else{
                      errorInfo(errcode, message);
                 }
            
            })
        },
        //点击切换事件
         qiehuan(index) {
            var _this = this;
            _this.classifyIndex = index;
            _this.right = _this.categoryList[ _this.classifyIndex].child_category;
           // console.log( _this.right)
           
         },
    }

}
</script>
<style lang="scss" scoped>         
        .calssify-con{
            position: absolute;
            bottom: 0;
            top: 88px;
            margin-top: 2px;
            height: 100%;
            display: flex;
            .calssify-left{
                width: 150px;
                height: 100%;
                margin-bottom: 50px;
                .calssify-left-ul{
                    width: 150px;
                }
            }
             .calssify-rigtht{
                width: 600px;
                height:100%;
                background:rgba(255,255,255,1);
                // padding-left: 10px;
              
            }
        }  
        .calssify-left-li{
            width: 100%;
            height:88px;
            font-size:26px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height: 88px;
            text-align: center;
        }
        .calssify-right-ul{
            // height: 100%;
              padding-bottom: 200px;
            background:#ffffff;
            >img{
                    width:590px;
                    height:115px;
                    margin-bottom: 10px;
            }
            >li{
                margin-bottom: 30px;
                >p{
                    font-size:24px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    margin-bottom: 30px;
                    margin-left: 20px;
                }
            }
        }   
    
        
             
        
    .active {
        border-left: 2px solid;
        background:rgba(255,255,255,1);
        color:rgba(226,51,60,1);
    }
    .food_list{
        box-sizing: border-box;
       padding: 0 64px 0;
        dl{
            width:130px;
             height:130px;
             text-align: center;
             margin-bottom: 40px;
            float: left;
             margin-right: 40px;
             &:nth-child(3n){
                 margin-right: 0;
             }  
             dt{
                // width:130px;
                // height:130px;
                margin-bottom: 20px;
                img{
                    width:81px;
                    height:111px;
                  
                 }
             }        
            
            dd{
               
                font-size:24px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                
                
            }
        }
    }
    .ellipsis2{
         width:130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }
</style>

