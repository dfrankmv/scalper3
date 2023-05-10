<script setup>
const props = defineProps(["label", "type"])
</script>

<template>
    <el-tag :type="props.type" size="small">
        {{ label }}
    </el-tag>
</template>