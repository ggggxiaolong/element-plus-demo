<template>
  <h1>Color 彩色</h1>
  <h3>主色</h3>
  <el-row>
    <el-col
      :span="10"
      :xs="{ span: 12 }"
      :style="{
        background: 'var(--el-color-primary)',
        borderRadius: 'var(--el-border-radius-base)',
        boxShadow: 'var(--el-box-shadow-lighter)',
      }"
    >
      <div color="white" p="4">
        Brand Color
        <div text="xs" m-t="2px">{{ getValue("color", "primary") }}</div>
      </div>
      <el-row h="40px">
        <el-col
          :span="4"
          :style="{ background: 'var(--el-color-primary-dark-2)' }"
        />
        <el-col
          :span="4"
          :style="{ background: 'var(--el-color-primary-light-3)' }"
        />
        <el-col
          :span="4"
          :style="{ background: 'var(--el-color-primary-light-5)' }"
        />
        <el-col
          :span="4"
          :style="{ background: 'var(--el-color-primary-light-7)' }"
        />
        <el-col
          :span="4"
          :style="{ background: 'var(--el-color-primary-light-8)' }"
        />
        <el-col
          :span="4"
          :style="{ background: 'var(--el-color-primary-light-9)' }"
        />
      </el-row>
    </el-col>
  </el-row>

  <h3>辅助色</h3>
  <el-row>
    <el-col
      v-for="col in colors"
      :key="col"
      :span="6"
      :style="{
        background: `var(--el-color-${col})`,
        borderRadius: 'var(--el-border-radius-base)',
        boxShadow: 'var(--el-box-shadow-lighter)',
      }"
    >
      <div color="white" p="4">
        {{ col.toUpperCase() }}
        <div text="xs" m-t="2px">{{ getValue("color", col) }}</div>
      </div>
      <el-row h="40px">
        <el-col
          :span="4"
          :style="{ background: `var(--el-color-${col}-dark-2)` }"
        />
        <el-col
          :span="4"
          :style="{ background: `var(--el-color-${col}-light-3)` }"
        />
        <el-col
          :span="4"
          :style="{ background: `var(--el-color-${col}-light-5)` }"
        />
        <el-col
          :span="4"
          :style="{ background: `var(--el-color-${col}-light-7)` }"
        />
        <el-col
          :span="4"
          :style="{ background: `var(--el-color-${col}-light-8)` }"
        />
        <el-col
          :span="4"
          :style="{ background: `var(--el-color-${col}-light-9)` }"
        />
      </el-row>
    </el-col>
  </el-row>
  <h3>中性色</h3>
  <el-row :gutter="12">
    <el-col :span="6">
      <div>
        <div
          v-for="col in textColors"
          :key="`text-${col}`"
          :style="{
            background: `var(--el-text-color-${col.type})`,
            color: 'var(--el-bg-color)',
          }"
          class="demo-color-box"
        >
          {{ col.name }}
          <div mt="2px">{{ getValue("text-color", col.type) }}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <div
          v-for="col in borderColors"
          :key="`border-${col}`"
          :style="{
            background: `var(--el-border-color${col.type ? '-' : ''}${
              col.type
            })`,
            color: 'var(--el-text-color-color)',
          }"
          class="demo-color-box"
        >
          {{ col.name }}
          <div mt="2px">{{ getValue("border-color", col.type) }}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <div
          v-for="col in fillColors"
          :key="`fill-${col}`"
          :style="{
            background: `var(--el-fill-color${col.type ? '-' : ''}${col.type})`,
            color: 'var(--el-text-color-color)',
          }"
          :class="{ 'demo-color-box': true, border: col.border }"
        >
          {{ col.name }}
          <div mt="2px">{{ getValue("fill-color", col.type) }}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <div
          v-for="col in otherColors"
          :key="`other-${col}`"
          :style="
            col.direct
              ? {}
              : {
                  background: `var(--el-${col.type})`,
                  color: `var(${
                    col.whiteColor ? '--el-bg-color' : '--el-text-color-color'
                  })`,
                }
          "
          :class="{
            'demo-color-box': true,
            border: col.border,
            'bg-transparent': col.direct,
          }"
        >
          {{ col.name }}
          <div mt="2px">{{ getValue("", col.type) }}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";

const getValue = (prefix: string, type: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(
      `--el${prefix ? "-" : ""}${prefix}${type ? "-" : ""}${type}`
    )
    .toUpperCase();
};

const colors = ref(["success", "warning", "danger", "info"]);

const textColors = ref([
  {
    name: "Primary Text",
    type: "primary",
  },
  {
    name: "Regular Text",
    type: "regular",
  },
  {
    name: "Secondary Text",
    type: "secondary",
  },
  {
    name: "Placeholder Text",
    type: "placeholder",
  },
  {
    name: "Disabled Text",
    type: "diabled",
  },
]);

const borderColors = ref([
  {
    name: "Darker Border",
    type: "darker",
  },
  {
    name: "Dark Border",
    type: "dark",
  },
  {
    name: "Base Border",
    type: "",
  },
  {
    name: "Light Border",
    type: "light",
  },
  {
    name: "Lighter Border",
    type: "lighter",
  },
  {
    name: "Extra-light Border",
    type: "extra-light",
  },
]);

const fillColors = ref([
  {
    name: "Darker Fill",
    type: "darker",
  },
  {
    name: "Dark Fill",
    type: "dark",
  },
  {
    name: "Base Fill",
    type: "",
  },
  {
    name: "Light Fill",
    type: "light",
  },
  {
    name: "Lighter Fill",
    type: "lighter",
  },
  {
    name: "Extra-light Fill",
    type: "extra-light",
  },
  {
    name: "Blank Fill",
    type: "blank",
    border: true,
  },
]);

const otherColors = ref([
  {
    name: "Basic Black",
    type: "color-black",
    whiteColor: true,
  },
  {
    name: "Basic White",
    type: "color-white",
    border: true,
  },
  {
    name: "Transparent",
    type: "transparent",
    direct: true,
  },
  {
    name: "Page Background",
    type: "bg-color-page",
  },
  {
    name: "Base Background",
    type: "bg-color",
    border: true,
  },
  {
    name: "Overlay Background",
    type: "bg-color-overlay",
    border: true,
  },
]);
</script>

<style scoped>
.demo-color-box {
  height: 112px;
  border-radius: var(--el-border-radius-base);
  padding: 20px;
  margin: 8px 0;
  font-size: var(--el-font-size-base);
}

.border {
  border: 1px solid var(--el-border-color-light);
}

.bg-transparent {
  color: var(--el-text-color-primary);
  background-image: linear-gradient(45deg, #f4f4f5 25%, rgba(255, 0, 0, 0) 25%),
    linear-gradient(135deg, #f4f4f5 25%, rgba(0, 0, 0, 0) 25%),
    linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, #f4f4f5 75%),
    linear-gradient(135deg, rgba(0, 0, 0, 0) 75%, #f4f4f5 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
}
</style>
