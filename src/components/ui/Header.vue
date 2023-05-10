<script setup>
    /**
     * data <- {
     *      amount: Float
     *      profit: Float
     *      direction: String
     *      orders: Order[]
     * }
     */
    const props = defineProps(["data"])
</script>

<template>
    <el-page-header icon="">
        <template #title>
            <h3>Scalper</h3>
        </template>
        <template #extra>
            <c-button-group>
                <c-add-button :data="data" />
                <c-cloud-button :data="data" />
                <c-button><IconGearFill /></c-button>
            </c-button-group>
        </template>
    </el-page-header>
    <!-- <c-cloud-modal v-model="cloud_modal_visibility" title="Cloud" /> -->
</template>

<style>
.el-divider {
    display: none;
}
</style>