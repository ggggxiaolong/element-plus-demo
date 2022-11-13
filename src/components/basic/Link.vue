<template>
  <h1>Link 链接</h1>
  <h3>基础用法</h3>
  <div class="demo">
    <el-row>
      <el-link>Default</el-link>
      <el-link type="primary">Primary</el-link>
      <el-link type="success">Success</el-link>
      <el-link type="warning">Warning</el-link>
      <el-link type="info">Info</el-link>
    </el-row>
  </div>

  <h3>禁用状态</h3>
  <div class="demo">
    <el-row>
      <el-link disabled>Default</el-link>
      <el-link type="primary" disabled>Primary</el-link>
      <el-link type="success" disabled>Success</el-link>
      <el-link type="warning" disabled>Warning</el-link>
      <el-link type="info" disabled>Info</el-link>
    </el-row>
  </div>

  <h3>下划线</h3>
  <div class="demo">
    <el-row>
      <el-link :underline="false">Without Underline</el-link>
      <el-link>With Underline</el-link>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.el-row {
    a {
        margin-right: 8px;
    }
}
</style>
