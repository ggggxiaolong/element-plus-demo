<template>
    <h1>字体</h1>
    <h3>Font-family</h3>
    <div class="demo">
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial,
        sans-serif;
    </div>
    <h3>字号</h3>
    <div class="demo">
        <table>
            <tbody>
                <tr>
                    <td w="33%">Level</td>
                    <td w="33%">Font Size</td>
                    <td w="34%">Demo</td>
                </tr>
                <tr v-for="(font, i) in fontSizes" :key="i" :style="{ fontSize: `var(--el-font-size-${font.type})` }">
                    <td>{{ font.level }}</td>
                    <td>{{ useCssVar(`--el-font-size-${font.type}`).value + " " + formatType(font.type) }}</td>
                    <td>Build with Element</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'

const fontSizes = ref([
    {
        level: "Supplementary text",
        type: "extra-small",
    },
    {
        level: "Body (small)",
        type: "small",
    },
    {
        level: "Body",
        type: "base",
    },
    {
        level: "Small Title",
        type: "medium",
    },
    {
        level: "Main Title",
        type: "extra-large",
    },
]);


function formatType(type: string): string {
    return type.split('-').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join('')
}
</script>