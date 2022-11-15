<template>
  <h1>Space 间距</h1>
  <h3>基础用法</h3>
  <div class="demo">
    <el-space wrap>
      <el-card v-for="i in 3" :key="i" class="box-card" w="250px">
        <template #header>
          <span>Card name</span>
          <el-button text>Operation</el-button>
        </template>
        <div v-for="o in 4" :key="o" class="item" mb="4">List item {{ o }}</div>
      </el-card>
    </el-space>
  </div>

  <h3>垂直布局</h3>
  <div class="demo">
    <el-space wrap direction="vertical">
      <el-card v-for="i in 2" :key="i" class="box-card" w="250px">
        <template #header>
          <span>Card name</span>
          <el-button text>Operation</el-button>
        </template>
        <div v-for="o in 4" :key="o" class="item" mb="4">List item {{ o }}</div>
      </el-card>
    </el-space>
  </div>

  <h3>控制间距的大小</h3>
  <div class="demo">
    <el-row>
      <el-radio-group v-model="size" mb="4">
        <el-radio :label="`large`">Large</el-radio>
        <el-radio :label="`default`">Default</el-radio>
        <el-radio :label="`small`">Small</el-radio>
      </el-radio-group>
    </el-row>
    <el-space wrap :size="size">
      <el-card v-for="i in 3" :key="i" class="box-card" w="250px">
        <template #header>
          <span>Card name</span>
          <el-button text>Operation</el-button>
        </template>
        <div v-for="o in 4" :key="o" class="item" mb="4">List item {{ o }}</div>
      </el-card>
    </el-space>
  </div>

  <h3>自定义 Size</h3>
  <div class="demo">
    <el-slider v-model="slideSize"></el-slider>
    <el-space wrap :size="slideSize">
      <el-card v-for="i in 2" :key="i" class="box-card" w="250px">
        <template #header>
          <span>Card name</span>
          <el-button text>Operation</el-button>
        </template>
        <div v-for="o in 4" :key="o" class="item" mb="4">List item {{ o }}</div>
      </el-card>
    </el-space>
  </div>

  <h3>自动换行</h3>
  <div class="demo">
    <el-space wrap>
      <el-button text v-for="i in 20">Text button</el-button>
    </el-space>
  </div>

  <h3>行间分隔符</h3>
  <div class="demo">
    <el-space :size="10" spacer="|">
      <el-button>Button1</el-button>
      <el-button>Button2</el-button>
    </el-space>
  </div>
  <h3>VNode 分隔符</h3>
  <div class="demo">
    <el-space :size="10" :spacer="spacer">
      <el-button>Button1</el-button>
      <el-button>Button2</el-button>
    </el-space>
  </div>

  <h3>对齐方式</h3>
  <div class="demo">
    <el-space direction="vertical">
      <el-space class="demo-container">
        string
        <el-button>button</el-button>
        <el-card>
          <template #header>header</template>
          body
        </el-card>
      </el-space>

      <el-space class="demo-container" alignment="flex-start">
        string
        <el-button>button</el-button>
        <el-card>
          <template #header>header</template>
          body
        </el-card>
      </el-space>

      <el-space class="demo-container" alignment="flex-end">
        string
        <el-button>button</el-button>
        <el-card>
          <template #header>header</template>
          body
        </el-card>
      </el-space>
    </el-space>
  </div>

  <h3>填充容器</h3>
  <div class="demo">
    <div>Fil: <el-switch v-model="fill"></el-switch></div>

    <el-space :fill="fill" w="100%">
      <el-card v-for="i in 3" :key="i" w="480px">
        <template #header>
          <span>Card name</span>
          <el-button ml="4">Operation button</el-button>
        </template>
        <div v-for="item in 4" mb="4">List item {{ item }}</div>
      </el-card>
    </el-space>
  </div>

  <div class="demo" mt="4">
    <el-row>
      <el-col :span="24">
        direction:
        <el-radio-group v-model="direction">
          <el-radio :label="'horizontal'">horizontal</el-radio>
          <el-radio :label="'vertical'">vertical</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="24"><el-slider v-model="fillRation"></el-slider></el-col>
    </el-row>
    <el-space fill wrap w="100%" :fill-ratio="fillRation" :direction="direction">
      <el-card v-for="i in 5" :key="i" w="480px">
        <template #header>
          <span>Card name</span>
          <el-button ml="4">Operation button</el-button>
        </template>
        <div v-for="item in 4" mb="4">List item {{ item }}</div>
      </el-card>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import { ElDivider } from "element-plus";
// import "element-plus/theme-chalk/src/divider.scss";
const size = ref("default");
const slideSize = ref(20);
const fill = ref(false);
const direction = ref("horizontal");
const fillRation = ref(30);

const spacer = h(ElDivider, { direction: "vertical" });
</script>

<style scoped lang="scss">
.demo-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--el-border-color);
}
</style>
