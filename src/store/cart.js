export default{
    state:{
        cart:{}
    },
    mutations: {
        modify(state,data){
            let{id,num}=data;
            state.cart[id]=num;
            console.log(state.cart);
        }
    }
}