<script setup>
const props = defineProps(["modelValue", "title"])
</script>

<template>
    <el-dialog :modelValue="modelValue" :title="title" @close="$emit('update:modelValue', false)">
        <slot></slot>
    </el-dialog>
</template>