<template>
  <h1>自动补全输入框</h1>
  <h3>基础用法</h3>
  <div class="demo">
    <el-row class="text-center">
      <el-col :span="6">
        <div class="sub-title my-2 text-sm text-gray-600">
          list suggestions when activated
        </div>
        <el-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearch"
          clearable
          class="inline-input w-50"
          placeholder="Please input"
          @select="handleSelect"
          @clear="handleClear"
        >
        </el-autocomplete>
        <p>{{ selectState1 ? selectState1.value : "no select" }}</p>
      </el-col>
      <el-col :span="6">
        <div class="sub-title my-2 text-sm text-gray-600">
          list suggestions on input
        </div>
        <el-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          clearable
          class="inline-input w-50"
          placeholder="Please input"
        >
        </el-autocomplete>
      </el-col>
    </el-row>
  </div>

  <h3>自定义模板</h3>
  <div class="demo">
    <el-autocomplete
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please input"
    >
      <template #suffix>
        <el-icon><Edit /></el-icon>
      </template>
      <template #default="{ item }">
        <div>{{ item.value }}</div>
        <span>{{ item.link }}</span>
      </template>
    </el-autocomplete>
  </div>

  <h3>远程搜索</h3>
  <div class="demo">
    <el-autocomplete
      v-model="state1"
      :fetch-suggestions="serverQuerySearch"
      placeholder="Please input"
    >
      <template #suffix>
        <el-icon><Edit /></el-icon>
      </template>
      <template #default="{ item }">
        <div>{{ item.value }}</div>
        <span>{{ item.link }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";
import { AutocompleteFetchSuggestionsCallback } from "element-plus";
import { Edit } from "@element-plus/icons-vue";

interface RestaurantItem {
  value: string;
  link: string;
}

const restaurants = ref<RestaurantItem[]>([]);
const state1 = ref("");
const selectState1: Ref<RestaurantItem | undefined> = ref();
let timeout: number;

function querySearch(
  queryString: string,
  cb: AutocompleteFetchSuggestionsCallback
) {
  const lowerQuery = queryString.toLowerCase();
  const results = queryString
    ? restaurants.value.filter(
        (r) => r.value.toLowerCase().indexOf(lowerQuery) === 0
      )
    : restaurants.value;
  return cb(results);
}

function serverQuerySearch(
  queryString: string,
  cb: AutocompleteFetchSuggestionsCallback
) {
  const lowerQuery = queryString.toLowerCase();
  const results = queryString
    ? restaurants.value.filter(
        (r) => r.value.toLowerCase().indexOf(lowerQuery) === 0
      )
    : restaurants.value;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
}

function handleSelect(item: RestaurantItem) {
  selectState1.value = item;
}

function handleClear() {
  selectState1.value = undefined;
}

function loadAll() {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ];
}

onMounted(() => {
  restaurants.value = loadAll();
});
</script>
