<script setup>
    import {ref} from 'vue'
    const props = defineProps(["data", "visible"])
    const orders_dump = ref(JSON.stringify(props.data.orders, null, 4))
    function downloaded(e) {
        props.data.orders = e
        orders_dump.value = JSON.stringify(e, null, 4)
    }
    function open() {
        orders_dump.value = JSON.stringify(props.data.orders, null, 4)
    }
</script>

<template> 
    <c-modal :model-value="visible" title="Sync orders with cloud" @open="open">
        <c-form label-position="top">
            <c-text-area v-model="orders_dump" label="Orders" class="ta" />
        </c-form>
        <c-row>
            <c-upload-button :data="data" />
            <c-download-button :data="data" @downloaded="downloaded" />
        </c-row>
    </c-modal>
</template>

<style>
    .ta textarea {
        font-family: monospace;
        font-size: .8em;
    }
</style>