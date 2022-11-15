<template>
    <h1>Config Provider 全局配置</h1>

    <h3>I18n 配置</h3>
    <div class="demo">
        <el-button @click="toggle">Switch Language</el-button>
        <br />
        <el-config-provider :locale="locale">
            <el-table mb-1 :data="[]"></el-table>
            <el-pagination :total="100"></el-pagination>
        </el-config-provider>
    </div>

    <h3>对按钮进行配置</h3>
    <div class="demo">
        <div mb="2">
            <el-checkbox v-model="config.autoInsertSpace">autoInsertSpace</el-checkbox>
        </div>
        <el-config-provider :button="config">
            <el-button>中文</el-button>
        </el-config-provider>
    </div>

    <h3>对消息进行配置</h3>
    <div class="demo">
        <el-config-provider :message="messageConfig">
            <el-button @click="open">OPEN</el-button>
        </el-config-provider>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { ElMessage } from 'element-plus';
const language = ref('zh-cn')
const locale = computed(() => language.value === 'zh-cn' ? zhCn : en)
const config = reactive({
    autoInsertSpace: true
});

const messageConfig = reactive({
    max:3
});

function toggle() {
    language.value = language.value === 'zh-cn' ? "en" : "zh-cn"
}

function open(){
    ElMessage("This is a message.")
}
</script>