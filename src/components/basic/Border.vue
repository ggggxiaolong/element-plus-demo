<template>
  <h1>Border 边框</h1>
  <h3>边框样式</h3>
  <div class="demo">
    <table class="demo-border">
      <tr>
        <td class="text">Name</td>
        <td class="text">Thickness</td>
        <td class="line">Demo</td>
      </tr>
      <tr>
        <td class="text">Solid</td>
        <td class="text">1px</td>
        <td class="line"><div></div></td>
      </tr>
      <tr>
        <td class="text">Dashed</td>
        <td class="text">2px</td>
        <td class="line"><div class="dashed"></div></td>
      </tr>
    </table>
  </div>
  <h3>圆角</h3>
  <div class="demo">
    <el-row :gutter="12" class="demo-radius">
      <el-col
        v-for="(radius, i) in radiusGroup"
        :key="i"
        :span="6"
        :xs="{ span: 12 }"
      >
        <div class="title">{{ radius.name }}</div>
        <div class="value">
          <code>border-radius: {{ getValue(radius.type) || "0px" }}</code>
        </div>
        <div
          class="radius"
          :style="{
            borderRadius: radius.type
              ? `var(--el-border-radius-${radius.type})`
              : '',
          }"
        ></div>
      </el-col>
    </el-row>
  </div>
  <h3>阴影</h3>
  <div class="demo">
    <div class="flex justify-between items-center flex-wrap">
      <div
        v-for="(shadow, i) in shadowGroup"
        :key="`shaodw-${i}`"
        class="flex flex-col justify-center items-center"
        m="auto"
        w="46"
      >
        <div
          class="inline-flex"
          h="30"
          w="30"
          m="2"
          :style="{ boxShadow: `var(${getCssVarName(shadow.type)})` }"
        />
        <span p="y-4" text="sm">{{ shadow.name }}</span>
        <code text="xs">{{ getCssVarName(shadow.type) }}</code>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const radiusGroup = ref([
  {
    name: "No Radius",
    type: "",
  },
  {
    name: "Small Radius",
    type: "small",
  },
  {
    name: "Large Radius",
    type: "base",
  },
  {
    name: "Round Radius",
    type: "round",
  },
]);

const getValue = (type: string): string | void => {
  const getCssVarValue = (prefix: string, type: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`
    );
  return getCssVarValue("border-radius", type);
};

const shadowGroup = ref([
  {
    name: "Basic Shadow",
    type: "",
  },
  {
    name: "Light Shadow",
    type: "light",
  },
  {
    name: "Lighter Shadow",
    type: "lighter",
  },
  {
    name: "Dark Shadow",
    type: "dark",
  },
]);

const getCssVarName = (type: string): string => {
  return `--el-box-shadow${type ? "-" : ""}${type}`;
};
</script>
<style scoped lang="scss">
.demo-border {
  .text {
    width: 15%;
  }
  .line {
    width: 70%;
    div {
      width: 100%;
      height: 0;
      border-top: 1px solid var(--el-border-color);
    }

    .dashed {
      border-top: 2px dashed var(--el-border-color);
    }
  }
}

.demo-radius {
  .title {
    color: var(--el-text-color-regular);
    font-size: 18px;
    margin: 10px 0;
  }
  .value {
    color: var(--el-text-color-primary);
    font-size: 16px;
    margin: 10px 0;
  }
  .radius {
    height: 40px;
    width: 70%;
    border: 1px solid var(--el-border-color);
    border-radius: 0;
    margin-top: 20px;
  }
}
</style>
