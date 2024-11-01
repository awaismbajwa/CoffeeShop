const getItemPrice = (item) => {
    return item.price? item.price : item.total_discounted_price;
}

const applyTax = (rate, price) => {
    const tax = price * (rate/100.0)
    return price+tax;
}

const calculateTotalTaxPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
        if (item.item){
            return total + applyTax(parseFloat(item.item.tax.rate), parseFloat(getItemPrice(item.item))) * (item.quantity ? item.quantity : 1);
        }
        else{
            return total + applyTax(parseFloat(item.tax.rate), parseFloat(getItemPrice(item))) * (item.quantity ? item.quantity : 1);
        }
    }, 0);
}

const fixQuantities = (cartItems) => {
    const counts = {};
    cartItems.forEach((item)=>{
        let prevItem = counts[item.id];
        counts[item.id] = {
            item: item,
            quantity: prevItem ? prevItem.quantity + 1 : 1
        };
    });
    return counts;
}

const getCSRFToken = ()=>{
    return document.querySelector('meta[name="csrf-token"]').content;
}

export default {
    getItemPrice: getItemPrice,
    applyTax: applyTax,
    calculateTotalPrice: (cartItems) => {
        return cartItems.reduce((total, item) => total + parseFloat(getItemPrice(item)), 0)
    },
    calculateTotalTaxPrice: calculateTotalTaxPrice,
    placeOrder: async (cartItems) => {
        console.log(cartItems);
        cartItems = fixQuantities(cartItems);
        let orderData = {
            status: "new",
            total_price: calculateTotalTaxPrice(Object.values(cartItems)),
            cart_items: cartItems
        }

        try {
            const response = await fetch('/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCSRFToken()
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const data = await response.json();
                return Promise.resolve({
                    status: `Order placed successfully! Order ID: ${data.order_id}`,
                    data: data
                })
            } else {
                const errorData = await response.json();
                return Promise.reject(errorData)
            }
        } catch (error) {
            return Promise.reject(`Request failed: ${error.message}`);
        }
    },
    fetchOrder: async (orderID) => {
        try {
            const response = await fetch('/orders/'+orderID, {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': getCSRFToken(),
                },
            });

            if (response.ok) {
                return Promise.resolve(await response.json());
            }
            else{
                return Promise.reject(await response.json());
            }
        } catch (error){
            console.error(error);
            return Promise.reject(error);
        }
    },
    fetchOrdersByStatus: async (status) => {
        try {
            const response = await fetch('/orders/status/'+status, {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': getCSRFToken(),
                },
            });

            if (response.ok) {
                return Promise.resolve(await response.json());
            }
            else{
                return Promise.reject(await response.json());
            }
        } catch (error){
            console.error(error);
            return Promise.reject(error);
        }
    },
    updateOrderStatus: async (order, status) => {
        try {
            const response = await fetch('/orders/'+order.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCSRFToken(),
                },
                body: JSON.stringify({
                    status: status
                })
            });

            if (response.ok) {
                return Promise.resolve(await response.json());
            } else {
                return Promise.reject(await response.json());
            }
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
    }
}