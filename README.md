# 基于vue2.0+vuex+localStorage写的记事本

## 写在前面

> 这个demo虽然功能少，但是其知识点很精华 基本上vuex知识点大部分都在这里面了，麻雀虽小 五脏内全

> 如果你觉的对你有帮助帮忙点个star谢谢 感谢大佬！

> 前端交流群740625675 志同道合的可以加下一起学习！



## 代码预览

> vuex官方文档 https://vuex.vuejs.org/ 我觉的官方文档说明很详细<br>

> localStorage用来本地储存

```bash
const state={
    home:localStorage["home"]?JSON.parse(localStorage["home"]): [],
    item:localStorage["item"]?JSON.parse(localStorage["item"]): [],
}

export default state

```

```bash
const mutations={
    
    [types.SET_SHIXIANG](state,data){
        state.home.push(data)
        localStorage.setItem("home",JSON.stringify(state.home));
    },
   
    [types.SET_YES](state,data){
        state.item.push(data)
        localStorage.setItem("item",JSON.stringify(state.item));
    }
}

export default mutations

```


```bash
const actions={
    setOrder ({commit}, data) {
        commit('SET_SHIXIANG', data);
    },
    setYes({commit},data){
        commit('SET_YES',data)
    }
}

export default actions

```

## 项目截图
<img style='float: left;' src='https://user-gold-cdn.xitu.io/2018/5/30/163aec35481bb6f5?w=361&h=640&f=png&s=20853'>
<img src='https://user-gold-cdn.xitu.io/2018/5/30/163aec3a4883a6a6?w=361&h=640&f=png&s=21366'>



## 项目运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 写在最后
前端实习生一枚，做的不好，还望大佬嘴留情 轻喷 大佬我想要个star

<img src="https://user-gold-cdn.xitu.io/2018/5/17/1636bde1d014d991?w=198&h=198&f=jpeg&s=3630"></img>
