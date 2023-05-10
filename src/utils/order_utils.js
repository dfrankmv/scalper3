function normalizeOrder(response, orders) {
    let new_order = {
        TIMESTAMP       : response?.TIMESTAMP ?? new Date().toLocaleString().replace(",", ""),
        DIRECTION       : response?.DIRECTION ?? "",
        QUANTITY        : response?.QUANTITY ?? "",
        PRICE           : response?.PRICE ?? "",
        AMOUNT          : response?.AMOUNT ?? "",
        LIMIT           : response?.LIMIT ?? "",
        ORDER_ID        : response?.ORDER_ID ?? "",
        PNL             : response?.PNL ?? "",
        STATUS          : response?.STATUS ?? "PENDING",
        CANCELED_ORDERS : response?.CANCELED_ORDERS ?? [],
    }
    if (new_order.PRICE == "" && new_order.CANCELED_ORDERS.length > 0) {
        const canceled_orders = new_order.CANCELED_ORDERS
        let total_qty = 0
        let total_amount = 0
        for ( let order of orders ) {
            if (new_order.CANCELED_ORDERS.includes(order.ORDER_ID)) {
                total_qty += parseFloat(order.QUANTITY)
                total_amount += parseFloat(order.AMOUNT)
            }
        }
        new_order.PRICE = (total_amount/total_qty).toFixed(2)
    }
    new_order.AMOUNT = new_order.PRICE * new_order.QUANTITY
    return new_order
}

function updateOrders(orders, order_ids, keys, new_values) {
    for ( let order of orders ) {
        if (order_ids.includes(order.ORDER_ID)) {
            for (const [i, key] of keys.entries()) {
                order[key] = new_values[i]
            }
        }
    }
}

function updatePNL(orders, order_ids) {
    for ( const order of orders ) {
        const raw_pnl = ( order.LIMIT - order.PRICE ) * order.QUANTITY
        if (order_ids.includes(order.ORDER_ID)) {
            if (["FILLED", "CLOSED"].includes(order.STATUS)) {
                if (order.DIRECTION.includes("LONG")) {
                    order.PNL = raw_pnl.toFixed(2)
                } else {    // SHORT
                    order.PNL = -1*raw_pnl.toFixed(2)
                }
            } else {
                order.PNL = ""
            }
        }
    }
}

export {
    normalizeOrder,
    updateOrders,
    updatePNL,
}