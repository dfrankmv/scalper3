<script setup>
    import {reactive} from 'vue'

    /**
     * data <- {
     *      amount: Float
     *      profit: Float
     *      direction: String
     *      orders: Order[]
     * }
     */
    const props = defineProps(["data"])

    // --------------------------------------------------------------------
    // SET HEADERS
    // --------------------------------------------------------------------
    const headers = [
        "#", "Timestamp", "Order ID", "Direction", "Status", "Price", 
        "Quantity", "Limit", "Amount", "PnL"
    ]

    // --------------------------------------------------------------------
    // HIGHLIGHT RELATED ROWS
    // --------------------------------------------------------------------
    let relatedRows = reactive([])
    function on_mouseover_row(order) {
        relatedRows = props.data.orders.filter(o => {
            if (order.CANCELED_ORDERS){
                return order.CANCELED_ORDERS.includes(o.ORDER_ID)
            } else {
                return false
            }
        })
        relatedRows.forEach(o => {o.HIGHLIGHT = true})
    }
    function on_mouseout_row() {
        relatedRows.forEach(o => {o.HIGHLIGHT = false})
    }

    // --------------------------------------------------------------------
    // CLASSES ON ROW
    // --------------------------------------------------------------------
    function class_row(order) {
        return {
            highlight: order.HIGHLIGHT,
            win: order.PNL > 0,
            loss: order.PNL < 0,
            draw: order.PNL === 0 && order.STATUS != "PENDING",
            canceled: order.STATUS == "CANCELED",
        }
    }
</script>

<template>
    <h4>Results ($ {{ data.orders.reduce((acc, obj) => acc + parseFloat(obj.PNL?obj.PNL:0), 0).toFixed(2) }})</h4>
    <table>
        <thead>
            <tr> 
                <th v-for="header of headers">{{ header }}</th> 
            </tr>
        </thead>
        <tbody>
            <tr v-for="(order,i) in data.orders"
                @mouseover="on_mouseover_row(order)" 
                @mouseout="on_mouseout_row()" 
                :class="class_row(order)">
                    <td>{{ i+1 }}</td>
                    <td>{{ order.TIMESTAMP }}</td>
                    <td>{{ order.ORDER_ID }}</td>
                    <td><c-direction-tag :order="order" /></td>
                    <td><c-status-dropdown :order="order"/></td>
                    <td>{{ order.PRICE }}</td>
                    <td>{{ order.QUANTITY }}</td>
                    <td>{{ order.LIMIT }}</td>
                    <td>{{ (order.QUANTITY * order.LIMIT).toFixed(2) }}</td>
                    <td>{{ order.PNL }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    /* font-family: monospace; */
    font-size: .7em;
    border: 1px solid #ddd;
    border-collapse: collapse;
    width: 100%;
}

thead {
    background-color: #ddd;
}

tr {
    border-bottom: 1px solid #ddd;
}

th, td {
    padding: 5px;
    border-right: 1px solid #ddd;
    text-align: left;
}

tr.highlight {
    background-color: rgb(241, 241, 165) !important;
    color: rgb(136, 136, 64) !important;
}
tr.win {
    background-color: rgb(211, 236, 211);
    color: green;
}
tr.canceled, tr.draw {
    background-color: #eee;
    color: #777
}
tr.loss {
    background-color: rgb(250, 224, 224);
    color: #b94747
}
</style>