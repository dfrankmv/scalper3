<script setup>
    import {ref} from 'vue'
    const props = defineProps(["modelValue", "label", "prefix"])
</script>

<template>
    <el-form-item :label="label">
        <el-input :model-value="modelValue" type="textarea" rows="8" @update:modelValue="$emit('update:modelValue', $event)">
        </el-input>
    </el-form-item>
</template>