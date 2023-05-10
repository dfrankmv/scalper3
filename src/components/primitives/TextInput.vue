<script setup>
    import { ref } from 'vue';
    const modelValue = ref("")
    const _val = ref(props.modelValue)

    const props = defineProps(["modelValue", "label", "prefix"])
</script>

<template>
    <el-form-item :label="label">
        <el-input v-model="_val" @input="$emit('update:modelValue', $event)">
            <template v-if="prefix" #prefix>
                <el-icon>{{ prefix }}</el-icon>
            </template>
        </el-input>
    </el-form-item>
</template>