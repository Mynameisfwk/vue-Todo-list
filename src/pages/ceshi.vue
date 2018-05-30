<template>
    <div id="box">
        <div class="box">{{name}}</div>
    </div>
    
</template>

<style>
    #box{
        position: fixed;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-image: url('http://p6563v2ck.bkt.clouddn.com/61638944EABCF64C8F62733C6ED355E0.jpg');
    }
</style>


<script>
export default {
    data(){
        return{
            name:'3'
        }
    },
    created(){
        var _this=this
        var time=3
        var timer=setInterval(function(){
            if(time>0){
                time=time-1
                _this.name=time
            }else if(time==0){
                _this.$router.push({
                    path:'index'
                })
                clearInterval(timer);
            }
        },1000)
    },
}
</script>

<style>
.box{
    color:#ffffff;
    border: 2px solid #ffff;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 50%;
    font-size: .6rem;
    float: right;
    margin: 0.3rem;
}
</style>

