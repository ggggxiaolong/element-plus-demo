<template>
  <h1>Button 按钮</h1>
  <p>常用的操作按钮</p>
  <h3>基础用法</h3>
  <div class="demo">
    <el-row gutter="20" mb-4>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-row gutter="20" mb-4>
      <el-button plain>Default</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>
    <el-row gutter="20" mb-4>
      <el-button round>Default</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>
    <el-row gutter="20">
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
  </div>
  <h3>禁用状态</h3>
  <div class="demo">
    <el-row gutter="20" mb-4>
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>
    <el-row gutter="20">
      <el-button plain disabled>Default</el-button>
      <el-button type="primary" plain disabled>Primary</el-button>
      <el-button type="success" plain disabled>Success</el-button>
      <el-button type="info" plain disabled>Info</el-button>
      <el-button type="warning" plain disabled>Warning</el-button>
      <el-button type="danger" plain disabled>Danger</el-button>
    </el-row>
  </div>
  <h3>链接按钮</h3>
  <div class="demo">
    <el-row gutter="20" mb-4>
      <el-button link>Default</el-button>
      <el-button type="primary" link>Primary</el-button>
      <el-button type="success" link>Success</el-button>
      <el-button type="info" link>Info</el-button>
      <el-button type="warning" link>Warning</el-button>
      <el-button type="danger" link>Danger</el-button>
    </el-row>
    <el-row gutter="20">
      <el-button link disabled>Default</el-button>
      <el-button type="primary" link disabled>Primary</el-button>
      <el-button type="success" link disabled>Success</el-button>
      <el-button type="info" link disabled>Info</el-button>
      <el-button type="warning" link disabled>Warning</el-button>
      <el-button type="danger" link disabled>Danger</el-button>
    </el-row>
  </div>
  <h3>文字按钮</h3>
  <div class="demo">
    <el-row gutter="20" mb-4>
      <el-button text>Default</el-button>
      <el-button type="primary" text>Primary</el-button>
      <el-button type="success" text>Success</el-button>
      <el-button type="info" text>Info</el-button>
      <el-button type="warning" text>Warning</el-button>
      <el-button type="danger" text>Danger</el-button>
    </el-row>
    <el-row gutter="20" mb-4>
      <el-button text bg>Default</el-button>
      <el-button type="primary" text bg>Primary</el-button>
      <el-button type="success" text bg>Success</el-button>
      <el-button type="info" text bg>Info</el-button>
      <el-button type="warning" text bg>Warning</el-button>
      <el-button type="danger" text bg>Danger</el-button>
    </el-row>
    <el-row gutter="20">
      <el-button text disabled>Default</el-button>
      <el-button type="primary" text disabled>Primary</el-button>
      <el-button type="success" text disabled>Success</el-button>
      <el-button type="info" text disabled>Info</el-button>
      <el-button type="warning" text disabled>Warning</el-button>
      <el-button type="danger" text disabled>Danger</el-button>
    </el-row>
  </div>
  <h3>按钮组</h3>
  <div class="demo">
    <el-row gutter="20">
      <el-col :span="12">
        <el-button-group>
          <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
          <el-button type="primary"
            >Next Page
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </el-button-group>
      </el-col>
      <el-col :span="6">
        <el-button-group>
          <el-button type="primary" :icon="Edit" />
          <el-button type="primary" :icon="Share" />
          <el-button type="primary" :icon="Delete" />
        </el-button-group>
      </el-col>
    </el-row>
  </div>
  <h3>加载状态按钮</h3>
  <div class="demo">
    <el-row gutter="20">
      <el-button type="primary" loading>Loading</el-button>
      <el-button type="primary" :loading-icon="Eleme" loading
        >Loading</el-button
      >
      <el-button type="primary" loading>
        <template #loading>
          <div class="custom-loading">
            <svg class="circular" viewBox="-10, -10, 50, 50">
              <path
                class="path"
                d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
                style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
              />
            </svg>
          </div>
        </template>
        Loading
      </el-button>
    </el-row>
  </div>
  <h3>调整尺寸</h3>
  <div class="demo">
    <el-row gutter="20" mb-4>
      <el-button size="large">Large</el-button>
      <el-button>Default</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="large" :icon="Search">Large</el-button>
      <el-button :icon="Search">Default</el-button>
      <el-button size="small" :icon="Search">Small</el-button>
    </el-row>
    <el-row gutter="20" mb-4>
      <el-button size="large" round>Large</el-button>
      <el-button round>Default</el-button>
      <el-button size="small" round>Small</el-button>
      <el-button size="large" :icon="Search" round>Large</el-button>
      <el-button :icon="Search" round>Default</el-button>
      <el-button size="small" :icon="Search" round>Small</el-button>
    </el-row>
    <el-row gutter="20">
      <el-button size="large" :icon="Search" round circle/>
      <el-button :icon="Search" round circle/>
      <el-button size="small" :icon="Search" round circle/>
    </el-row>
  </div>
  <h3>自定义颜色</h3>
  <div class="demo">
    <el-row gutter="20">
      <el-button color="#626aef" :dark="isDark">Default</el-button>
      <el-button color="#626aef" plain :dark="isDark">Plain</el-button>
      <el-button color="#626aef" disabled :dark="isDark">Disabled</el-button>
      <el-button color="#626aef" plain disabled :dark="isDark">Disabled Plain</el-button>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Star,
  Message,
  Search,
  ArrowLeft,
  ArrowRight,
  Share,
  Eleme,
} from "@element-plus/icons-vue";
import {isDark} from "../../composables"
</script>
<style scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>
