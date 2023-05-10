<script setup>
    import {reactive, ref} from 'vue'
    const props = defineProps(["data", "visible"])
    const emit = defineEmits(['submit'])
    const order = reactive({
        TIMESTAMP: "",
        ORDER_ID: "",
        DIRECTION: "",
        STATUS: "",
        PRICE: "",
        QUANTITY: "",
        LIMIT: "",
        AMOUNT: "",
        PNL: "",
    })
    function submit() {
        const new_order = {
            TIMESTAMP: order.TIMESTAMP,
            ORDER_ID: order.ORDER_ID,
            DIRECTION: order.DIRECTION,
            STATUS: order.STATUS,
            PRICE: order.PRICE,
            QUANTITY: order.QUANTITY,
            LIMIT: order.LIMIT,
            AMOUNT: order.AMOUNT,
            PNL: order.PNL,
        }
        props.data.orders.push(new_order)
        emit("submit")
    }
</script>

<template>
    <c-modal :model-value="visible" title="Add order manually">
        <c-form label-position="left">
            <c-text-input label="Timestamp" v-model="order.TIMESTAMP" />
            <c-text-input label="Order ID" v-model="order.ORDER_ID" />
            <c-text-input label="Direction" v-model="order.DIRECTION" />
            <c-text-input label="Status" v-model="order.STATUS" />
            <c-text-input label="Price" prefix="$" v-model="order.PRICE" />
            <c-text-input label="Quantity" prefix="B" v-model="order.QUANTITY" />
            <c-text-input label="Limit" prefix="$" v-model="order.LIMIT" />
            <c-text-input label="Amount" prefix="$" v-model="order.AMOUNT" />
            <c-text-input label="PnL" prefix="$" v-model="order.PNL" />
            <c-button type="primary" @click="submit">Add</c-button>
            <pre><code>{{ JSON.stringify(order, null, 4) }}</code></pre>
        </c-form>
    </c-modal>
</template>