export const initialState = {
  basket: [],
  user: null
}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'addBasket':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'removeBasket':
      /*
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id)
      }
      */
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } 

      return {
        ...state,
        basket: newBasket
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}

export default reducer