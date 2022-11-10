<template>
  <h1>Icon 图标</h1>
  <div class="demo">
    <el-row :gutter="12">
      <el-icon><Share /></el-icon>
      <el-icon color="#409EFC"><Edit /></el-icon>
      <el-icon><Delete /></el-icon>
      <el-icon><Search /></el-icon>
      <el-icon class="is-loading"><Loading /></el-icon>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Share, Edit, Delete, Search, Loading } from "@element-plus/icons-vue";
</script>
