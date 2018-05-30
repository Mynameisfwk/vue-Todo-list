<template>
    <div>
        <div class="complete_header">
            <span>任务完成</span>
        </div>
        <div class="complete">
            <div v-for="(list,index) in item" :key="index" class="complete_list">
                <span class="yes">已完成</span>
                <del class="name">{{list.name}}</del>
                <i class="iconfont icon-lajitong" @click="del(list,index)"></i>
            </div>
            <div v-if="!item.length" class="complete_length">
                <img src="http://p6563v2ck.bkt.clouddn.com/%E4%BB%BB%E5%8A%A1.png">
                <span>你暂时还没有完成的任务哦～～</span>
            </div>
            <v-footer></v-footer>
        </div>
    </div>
    
</template>

<script>
import { Toast } from 'mint-ui';
import { mapState, mapMutations, mapGetters } from "vuex";
import footer from '../pages/footer'
export default {
    components:{
        'v-footer':footer
    },
    computed:{
        item(){
            return this.$store.state.item
        },
        ...mapGetters(["this.$store.state.item"])
    },
    methods: {
        del(list,index){
            Toast({
                message: '删除成功！',
                iconClass: 'iconfont icon-wancheng',
                duration: 600
            });
            this.$store.state.item.splice(index,1)
            localStorage.setItem("item",JSON.stringify(this.$store.state.item));
        }
    }
}
</script>


<style>
    .complete{
        margin-bottom: 1.6rem;
        padding-top: 1.5rem;
    }
    .complete_length{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 30%;
    }
     .complete_length span{
       font-size: .38rem;
       padding-top: .3rem;
       color: #cccccc
    }
    .complete_header{
        width: 100%;
        height: 1.5rem;
        background: #32c9ff;
        position: fixed
    }
    .complete_header span{
        font-size: .3rem;
        line-height: 1.5rem;
        font-size: .5rem;
        color: #ffffff;
        text-align: center;
        display: block;
    }
    .complete_list{
        width: 95%;
        height: 1.4rem;
        line-height: 1rem;
        margin: .3rem auto;
        background: #ffffff;
        border-radius: 5px
    }
    .complete_list i{
        float: right;
        width: 1rem;
        line-height: 1.4rem;
        margin-right: .3rem;
        font-size: .52rem;
        color: #cccccc;
    }
    .name{
        width: 6rem;
        font-size: .43rem;
        line-height: 1.4rem;
        padding-left: 0.5rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        float: left;
    }
    .yes{
        font-size: .43rem;
        line-height: 1.4rem;
        color: #32c9ff;
        padding-left: 0.5rem;
        float: left;
    }
</style>