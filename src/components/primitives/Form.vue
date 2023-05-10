<script setup>
const props = defineProps(["labelPosition"])
</script>

<template>
    <el-form :label-position="labelPosition" label-width="80px">
        <slot></slot>
    </el-form>
</template>