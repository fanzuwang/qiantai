export default {
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || {}
    },
    mutations: {
        modify(state, data) {
            let { id, num } = data;
            state.cart[id] = num;
            localStorage.setItem('cart', JSON.stringify(state.cart));
            console.log(state.cart);
        }
    },
    // 相当于computed数据
    getters: {
        total(state) {
            return Object.values(state.cart).reduce((sum, v) => sum += v, 0);
        }
    }
}