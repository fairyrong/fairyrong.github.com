---
layout: post
title: vueMusic笔记
date:   2018-04-02 20:50:42
categories: vue
---
vuemusic慕课网实战视频，实践中学习是最好的途径，一个音乐APP从环境，安装，项目结构/搭建,到vue全家桶的应用，学习笔记
## 1.vuex
在src文件夹下新建一个store文件夹，该文件夹下有多个js文件

·actions.js涉及的异步操作
·getters.js store中定义的getter
    这里返回state里的singer
    export const singer = state => state.singer1
·index.js  组装模块并导出
·mutation.js 根级别的mutation
```
//使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
import * as types from './mutation-types'
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}
export default mutations
```
·mutation-type.js 对mutation作相应的映射
·state.js 定义store的state
## 2.vue-router
### router文件夹下index.js配置歌手页的子路由
```
 {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
  }
```
### singer.vue中使用vue-router
```
<template>
  <div class="singer" ref="singer">
    <listview :data = "singers"  @select="selectSinger"></listview>
    <router-view></router-view>
  </div>
</template>
```
### 歌手页点击歌手时singer.vue 中通过@select接受子组件传递来的singer属性，@select="selectSinger"selectSinger方法根据singer.id实现子路由跳转
```
 selectSinger(singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer)
  }
```
### listview.vue歌手列表通过$emit方法传递出singer，这里的item代表每个singer
```
selectItem(item) {
        this.$emit('select', item)
        //console.log('item:' + item)
}
```
## 3.better-scorll
http://ustbhuangyi.github.io/better-scroll/doc/api.html
使用过程中要细心，认真，尽量完美实现效果
## 4.工厂方法