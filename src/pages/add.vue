<template>
        <div>
          <div v-for="(list,index) in item" class="add">
            <input type="text" v-model="list.text" :id="index" data-field="date" placeholder="请输入你需要记住的事">
            <i class="iconfont icon-jia1" @click="btn(list)"></i>
          </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "add",
  data() {
    return {
      item: [
        {
          id:"",
          text: ""
        }
      ]
    };
  },
  methods: {
    btn(list) {
      var _this = this;
      var date = new Date();
      var fh1 = "-";
      var fh2 = ":";
      var fh3 = "";
      var year = date.getFullYear(); // 年
      var month = date.getMonth() + 1; // 月
      var day = date.getDate(); // 日
      var hour = date.getHours(); // 时
      var minutes = date.getMinutes(); // 分

      var formatNumber = function (n) {
        n = n.toString()
        return n[1] ? n : '0' + n
      }

      var currentdate = formatNumber(month) + '月' + formatNumber(day) + '日'
      var data = {
        text: list.text,
        currentdate: currentdate
      };

      list.text == "" ? Toast({message: '不能提交空值哦',iconClass: 'iconfont icon-warning',duration: 600}):this.$store.dispatch("setOrder", data);
      list.text = "";
      //  this.$router.back();
    }
  }
};
</script>


<style>
.add {
  width: 100%;
  height: 1.5rem;
  background: #32c9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
}
.add input {
  width: 88%;
  height: 1rem;
  border-radius: 8px;
  padding-left: 0.3rem;
  background: rgba(225, 225, 225, 0.3);
  color: #ffffff;
  opacity: 0.7;
  font-size: 0.365rem;
}
.add i {
  font-size: 1rem;
  color: white;
  position: absolute;
  right: 0.4rem;
}
input::-webkit-input-placeholder {
  color: #ffffff;
  opacity: 0.7;
}
</style>
