<script setup>
    const props = defineProps(["modelValue", "options"])
</script>

<template>
    <el-select :model-value="modelValue" size="small" @change="$emit('update:modelValue', $event)">
        <el-option v-for="option of props.options" :key="option" :label="option" :value="option" />
    </el-select>
</template>