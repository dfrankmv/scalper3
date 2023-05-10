<script setup>
    import {normalizeOrder} from '../../utils/order_utils'
    import {updateOrders} from '../../utils/order_utils'
    import {updatePNL} from '../../utils/order_utils'
    import axios from 'axios'

    /**
     * data <- {
     *      amount: Float
     *      profit: Float
     *      direction: String
     *      orders: Order[]
     * }
     */
    const props = defineProps(["data"])

    function click(direction) {
        props.data.direction = direction
        const payload = {
            amount: props.data.amount,
            profit: props.data.profit,
            command: props.data.direction
        }
        axios.request({
            url: "https://btkoyynnmnzjxrrzb2jczgkhzq0osuea.lambda-url.sa-east-1.on.aws/",
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify(props.data)
        })
        .then(response => {
            // GET NORMALIZED ORDER
            const new_order = normalizeOrder(response.data, props.data.orders)
            

            // UPDATE CANCELED ORDERS
            if (new_order.DIRECTION.includes("AVG")) {
                updateOrders(props.data.orders, new_order.CANCELED_ORDERS, ["STATUS"], ["CANCELED"])
            } else if (new_order.DIRECTION.includes("X_")) {
                //TODO update the limit of the canceled orders
                updateOrders(props.data.orders, new_order.CANCELED_ORDERS, ["STATUS", "LIMIT"], ["CLOSED", parseFloat(new_order.PRICE).toFixed(2)])
            }

            updatePNL(props.data.orders, new_order.CANCELED_ORDERS)

            // ADD NEW ORDER
            if (!new_order.DIRECTION.includes("X_")) {
                props.data.orders.push(new_order)
            }   
        })
        //TODO Hacer la implementación del REQUEST a AWS Lambda
    }
</script>

<template>
    <c-row>
        <c-button-group>
            <c-button type="success" @click="click('long')">
                <IconArrowUpRight class="icon-right-space" /> Long 
            </c-button>
            <c-button type="success" @click="click('avglong')">
                <IconArrowsCollapse />
            </c-button>
            <c-button type="success" @click="click('xlong')">
                <IconClose />
            </c-button>
        </c-button-group>
        <c-button-group class="float-right">
            <c-button type="danger"  @click="click('xshort')">
                <IconClose />
            </c-button>
            <c-button type="danger"  @click="click('avgshort')">
                <IconArrowsCollapse />
            </c-button>
            <c-button type="danger"  @click="click('short')">
                <IconArrowDownRight class="icon-right-space" />Short
            </c-button>
        </c-button-group>
    </c-row>
</template>