<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><watermelon/></el-icon>Basic 基础组建
            </template>
            <el-menu-item-group>
              <el-menu-item :index="PATH.BASIC_BUTTON"
                >Button 按钮</el-menu-item
              >
              <el-menu-item :index="PATH.BASIC_BORDER">Border 边框</el-menu-item>
              <el-menu-item :index="PATH.BASIC_COLOR">Color 色彩</el-menu-item>
              <el-menu-item :index="PATH.BASIC_CONTAINER">Container 布局容器</el-menu-item>
              <el-menu-item :index="PATH.BASIC_ICON">Icon 图标</el-menu-item>
              <el-menu-item :index="PATH.BASIC_LAYOUT">Layout 布局</el-menu-item>
              <el-menu-item :index="PATH.BASIC_LINK">Link 链接</el-menu-item>
              <el-menu-item :index="PATH.BASIC_SCROLLBAR">Scrollbar 滚动条</el-menu-item>
              <el-menu-item :index="PATH.BASIC_SPACE">Space 间距</el-menu-item>
              <el-menu-item :index="PATH.BASIC_TYPOGRAPHY">Typography 排版</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <router-view />
      <div class="float-icon el-backtop">
        <el-button v-if="isDark" :icon="Sunny" text circle @click="toggleDark()"/>
        <el-button v-else :icon="Moon" text circle @click="toggleDark()"/>
      </div>
      <el-backtop :bottom="32" :right="80" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import {isDark, toggleDark} from '@/composables'
import { Watermelon, Sunny, Moon } from "@element-plus/icons-vue";
import { PATH } from "@/router/path";

</script>

<style scoped>
.layout-container {
  width: 100%;
  height: 100%;
}
.float-icon {
  bottom: 32px;
  right: 32px;
}
</style>
<style>
a {
  text-decoration: none;
  color: var(--el-menu-text-color);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--el-text-color-regular);
  font-weight: 600;
}
body {
  font-family: var(--el-font-family);
  /* color: var(--el-text-color-primary);
  background-color: var(--el-bg-color); */
}

.demo {
  border: 1px solid var(--el-border-color);
  padding: 1.5rem;
}

</style>
