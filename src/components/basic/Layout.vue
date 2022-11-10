<template>
  <h1>Layout 布局</h1>
  <h3>基础布局</h3>
  <div class="demo">
    <el-row>
      <el-col :span="24"><div class="gride-dark" /></el-col>
      <el-col :span="12" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="12" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="8" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="8" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="8" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="6" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="6" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="6" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="6" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>
    </el-row>
  </div>

  <h3>分栏间隔</h3>
  <div class="demo">
    <el-row :gutter="12">
      <el-col :span="6"><div class="gride-dark" /></el-col>
      <el-col :span="6"><div class="gride-dark" /></el-col>
      <el-col :span="6"><div class="gride-dark" /></el-col>
      <el-col :span="6"><div class="gride-dark" /></el-col>
    </el-row>
  </div>

  <h3>混合布局</h3>
  <div class="demo">
    <el-row :gutter="12">
      <el-col :span="16"><div class="gride-dark"></div></el-col>
      <el-col :span="8"><div class="gride-light"></div></el-col>

      <el-col :span="8" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="8" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>

      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>
      <el-col :span="16" mt="2"><div class="gride-dark"></div></el-col>
      <el-col :span="4" mt="2"><div class="gride-light"></div></el-col>
    </el-row>
  </div>

  <h3>列偏移</h3>
  <div class="demo">
    <el-row :gutter="12">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6" :offset="6"><div class="gride-light"></div></el-col>

      <el-col :span="6" :offset="6" mt="2"
        ><div class="gride-dark"></div
      ></el-col>
      <el-col :span="6" :offset="6" mt="2"
        ><div class="gride-dark"></div
      ></el-col>
      <el-col :span="12" :offset="6" mt="2"
        ><div class="gride-light"></div
      ></el-col>
    </el-row>
  </div>
  <h3>对齐方式</h3>
  <div class="demo">
    <el-row :gutter="12">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6"><div class="gride-light"></div></el-col>
      <el-col :span="6"><div class="gride-dark"></div></el-col>
    </el-row>
    <el-row :gutter="12" justify="center" mt="2">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6"><div class="gride-light"></div></el-col>
      <el-col :span="6"><div class="gride-dark"></div></el-col>
    </el-row>
    <el-row :gutter="12" justify="end" mt="2">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6"><div class="gride-light"></div></el-col>
      <el-col :span="6"><div class="gride-dark"></div></el-col>
    </el-row>
    <el-row :gutter="12" justify="space-between" mt="2">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6"><div class="gride-light"></div></el-col>
      <el-col :span="6"><div class="gride-dark"></div></el-col>
    </el-row>
    <el-row :gutter="12" justify="space-around" mt="2">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6"><div class="gride-light"></div></el-col>
      <el-col :span="6"><div class="gride-dark"></div></el-col>
    </el-row>
    <el-row :gutter="12" justify="space-evenly" mt="2">
      <el-col :span="6"><div class="gride-dark"></div></el-col>
      <el-col :span="6"><div class="gride-light"></div></el-col>
      <el-col :span="6"><div class="gride-dark"></div></el-col>
    </el-row>
  </div>
  <h3>响应式布局</h3>
  <div class="demo">
    <el-row :gutter="8">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="gride-dark"></div
      ></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="gride-light"></div
      ></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="gride-dark"></div
      ></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="gride-light"></div
      ></el-col>
    </el-row>
  </div>
  <h3>基于端点的隐藏类</h3>
  <div class="demo">
    <ul>
      <li><code>hidden-xs-only</code> - 当视口在 <code>xs</code> 尺寸时隐藏</li>
      <li><code>hidden-sm-only</code> - 当视口在 <code>sm</code> 尺寸时隐藏</li>
      <li>
        <code>hidden-sm-and-down</code> - 当视口在
        <code>sm</code> 及以下尺寸时隐藏
      </li>
      <li>
        <code>hidden-sm-and-up</code> - 当视口在 <code>sm</code>及以上尺寸时隐藏
      </li>
      <li><code>hidden-md-only</code> - 当视口在 <code>md</code>尺寸时隐藏</li>
      <li>
        <code>hidden-md-and-down</code> - 当视口在
        <code>md</code>及以下尺寸时隐藏
      </li>
      <li>
        <code>hidden-md-and-up</code> - 当视口在
        <code>md</code> 及以上尺寸时隐藏
      </li>
      <li><code>hidden-lg-only</code> - 当视口在 <code>lg</code> 尺寸时隐藏</li>
      <li>
        <code>hidden-lg-and-down</code> - 当视口在
        <code>lg</code> 及一下尺寸时隐藏
      </li>
      <li>
        <code>hidden-lg-and-up</code> - 当视口在
        <code>lg</code> 及以上尺寸时隐藏
      </li>
      <li><code>hidden-xl-only</code> - 当视口在 <code>xl</code> 尺寸时隐藏</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
%gride-content {
  min-height: 36px;
  border-radius: var(--el-border-radius-base);
}

.gride-dark {
  @extend %gride-content;
  background: var(--el-color-primary-light-5);
}
.gride-light {
  @extend %gride-content;
  background: var(--el-color-primary-light-8);
}
</style>
