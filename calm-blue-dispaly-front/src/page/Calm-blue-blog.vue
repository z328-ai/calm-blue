<template>
    <el-container class="layout-container-demo" style="height: 695px" >
      <el-header style="text-align: right; font-size: 12px;margin-bottom: 20px" height="60px">
        <el-menu
           :default-active="activeIndex"
           class="el-menu-demo"
           mode="horizontal"
           :ellipsis="false"
           style="margin-left: 0px;margin-right: 0px;">
    <el-menu-item index="0">
      <el-image style="width: 60px; height: 60px" src="https://golang.halfiisland.com/logo.png" fit="contain" />
    </el-menu-item>
      <el-input
            style="width:800px;height: 45px;margin-top: 3px;"
            v-model="input2"
            class="w-50 m-2"
            size="large"
            placeholder="输入内容"
            :suffix-icon="Search">
            </el-input>
    <div class="flex-grow" />

    <el-menu-item index="1" >区块链购物</el-menu-item>
    <el-menu-item index="2">静蓝音乐</el-menu-item>
    <el-menu-item index="3">谷歌地图</el-menu-item>
    <el-menu-item index="4">作者介绍</el-menu-item>
    <el-menu-item index="5">文档</el-menu-item>
    <el-menu-item index="6">
      <template #title>
         <el-dropdown>
              <el-badge :value="12" class="item">
             <el-avatar shape="square" :size="60" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
             </el-badge>
              <template #dropdown>
              <el-dropdown-menu>
                  <el-dropdown-item>登录</el-dropdown-item>
                  <el-dropdown-item>信息</el-dropdown-item>
                  <el-dropdown-item>注销</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
      </template>
     
    </el-menu-item>
  </el-menu> 
        </el-header>
       
      <el-container>
        <LeftAside></LeftAside>
        <Main></Main>   
        <RightAside></RightAside>
      </el-container>
    </el-container>
  </template>
  
  
<script setup lang="ts">  //setup:1.导入的组件无需注册，便能直接用2.数据可以不用放在setup(){}方法里面
import { ref } from 'vue'  //将数据传入ref(数据)返回对象{value:数据}
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue' //命名导入
import { Search } from '@element-plus/icons-vue'
import LeftAside from '../components/calm-blue-blog/LeftAside.vue'
import Main from '../components/calm-blue-blog/Main.vue'
import RightAside from '../components/calm-blue-blog/RightAside.vue'
const activeIndex = ref('1')
const input2 = ref('')

</script>

<style scoped>




/* 让导航分开 */
.flex-grow {
  flex-grow: 1;
}
</style>
