<template>
  <h1>Scrollbar 滚动条</h1>
  <h3>基础用法</h3>
  <div class="demo">
    <el-scrollbar height="400px">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </el-scrollbar>
  </div>
  <h3>横向滚动</h3>
  <div class="demo">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="item in 50" :key="`hor-${item}`">{{ item }}</p>
      </div>
    </el-scrollbar>
  </div>
  <h3>最大高度</h3>
  <div class="demo">
    <el-row :gutter="12">
      <el-button @click="addItem">Add Item</el-button>
      <el-button @click="delItem">Delete Item</el-button>
    </el-row>
    <el-scrollbar max-height="400px">
      <p
        v-for="item in items"
        :key="`auto-${item}`"
        class="scrollbar-demo-item"
      >
        {{ item }}
      </p>
    </el-scrollbar>
  </div>
  <h3>手动滚动</h3>
  <div class="demo">
    <el-scrollbar height="400px" ref="scrollbarRef" always @scroll="onScroll">
      <div ref="innerRef">
        <p v-for="item in 20" :key="`hand-${item}`" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </el-scrollbar>
    <el-slider
      v-model="value"
      :max="max"
      :format-tooltip="formatTooltip"
      @input="onDrag"
    ></el-slider>
  </div>
</template>

<script setup lang="ts">
import { ElScrollbar } from "element-plus";
import { ref, type Ref, onMounted } from "vue";

const items: Ref<number> = ref(3);
const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

function addItem() {
  items.value++;
}

function delItem() {
  if (items.value > 0) items.value--;
}

onMounted(() => {
  max.value = innerRef.value!.clientHeight - 380;
});

function onScroll({
  scrollTop,
  scrollLeft,
}: {
  scrollTop: number;
  scrollLeft: number;
}) {
  value.value = scrollTop;
}

function onDrag(drag: number) {
  scrollbarRef.value!.setScrollTop(drag);
}

function formatTooltip(value: number): string {
  return `${value}px`;
}
</script>

<style scoped lang="scss">
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-align: center;
  border-radius: var(--el-border-radius-base);
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.scrollbar-flex-content {
  display: flex;

  p {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: var(--el-border-radius-base);
    background: var(--el-color-error-light-9);
    color: var(--el-color-error);
  }
}
</style>
