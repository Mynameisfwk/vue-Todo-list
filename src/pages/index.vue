<template>
    <div>
        <v-add></v-add>
        <div class="data">
            <div class="list" v-for="(list,index) in home" :key="index" :id="list.id">
                <span class="time">{{list.currentdate}}</span>
                <span class="fx">{{list.text}}</span>
                <i class="iconfont icon-wancheng" @click="del(list,index)"></i>
            </div>
            <div v-if="!home.length" class="length">
                <img src="http://p6563v2ck.bkt.clouddn.com/%E8%AE%B0%E5%BD%95.png">
                <span>每天记录一点点～～</span>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { MessageBox ,Toast} from 'mint-ui';
import add from '../pages/add'
import footer from '../pages/footer'
export default {
    name:'index',
    data(){
        return{
            day:"",
            month:"",
            year:""
        }
    },
    components:{
        'v-add':add,
        'v-footer':footer
    },
    computed:{
        home(){
            return this.$store.state.home;
        },
        ...mapGetters(["this.$store.state.home"])
    },
    methods: {
        del(list,index){
            Toast({
                message: '你完成了一件任务！',
                iconClass: 'iconfont icon-wancheng',
                duration: 600
            });
            var data={
                name:list.text
            }
            this.$store.state.home.splice(index,1)
            this.$store.dispatch('setYes',data)
        }
    },
}
</script>

<style>
    .length{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 30%;
    }
    .length span{
       font-size: .38rem;
       padding-top: .3rem;
       color: #cccccc
    }
    .data{
        margin-bottom: 1.6rem;
        padding-top: 1.5rem;
    }
    .list{
        width: 95%;
        height: 1.4rem;
        line-height: 1rem;
        margin: .3rem auto;
        background: #ffffff;
        border-radius: 5px
    }
    .list i{
        float: right;
        width: 1rem;
        line-height: 1.4rem;
        margin-right: .3rem;
        font-size: .52rem;
        color: #32c9ff;
    }
    .time{
        font-size: .43rem;
        line-height: 1.4rem;
        color: #32c9ff;
        padding-left: 0.5rem;
        float: left;
    }
    .fx{
        width: 5rem;
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

</style>