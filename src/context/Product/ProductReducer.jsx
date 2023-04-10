const productReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: payload,
                product:[{
                    id:"",
                    name:"",
                    SKU:"",
                    description:"",
                    price:"",
                    image:"",
                    stock:""
                }]
            }
        case "GET_PRODUCT":
            return {...state, product: payload}
        case "ADD_PRODUCT":
            return {...state, products: [...state.products, payload]}
        case "DELETE_PRODUCT":
            return {...state, products: state.products.filter(product => product._id !== payload)}
        case "UPDATE_PRODUCT":
            return {...state, products: state.products.map(product => product._id === payload._id ? payload : product)}
        default:
            return state;
    }
}