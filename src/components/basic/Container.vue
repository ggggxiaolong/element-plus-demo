<template>
  <h1>Container 布局容器</h1>
  <p><code>&#60;el-container&#62;</code>: 顶栏容器</p>
  <p><code>&#60;el-aside&#62;</code>: 侧边栏容器</p>
  <p><code>&#60;el-main&#62;</code>: 主要区容器</p>
  <p><code>&#60;el-footer&#62;</code>: 底栏容器</p>
  <h3>常见页面布局</h3>
  <div class="demo easy" h="210px">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
  <div class="demo easy" mt="4" h="260px">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
  <div class="demo easy" mt="4" h="210px">
    <el-container>
      <el-aside width="150px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
  <div class="demo easy" mt="4" h="210px">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
  <div class="demo easy" mt="4" h="210px">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <div class="demo easy" mt="4" h="210px">
    <el-container>
      <el-aside width="150px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
  <div class="demo easy" mt="4" h="210px">
    <el-container>
      <el-aside width="150px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <h3>例子</h3>
  <div class="demo" h="500px">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option 4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><IconMenu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option 4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon><Setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option 4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header text-right text-3 justify-end items-center flex class="demo-header">
          <el-dropdown>
            <el-icon><Setting /></el-icon>
            <template #dropdown>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </template>
          </el-dropdown>
          <span ml="4px">Tom</span>
        </el-header>
        <el-main p="0" block>
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
section {
  height: 100%;
}
%content-common {
  background: var(--el-color-primary-light-3);
  color: var(--el-text-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.easy {
  header,
  footer {
    @extend %content-common;
  }
  main {
    @extend %content-common;
    background: var(--el-color-primary-light-8);
  }
  aside {
    @extend %content-common;
    background: var(--el-color-primary-light-7);
  }
}

.demo-header {
    background: var(--el-color-primary-light-3);
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { Message, Menu as IconMenu, Setting } from "@element-plus/icons-vue";

const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};

const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>
