import { ActionTypes } from "../constant"

const initialState = {
  items: [],
  cart: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ActionTypes.GetData:
      return { ...state, items: payload }

    case ActionTypes.AddToCart:

      let myObj = [...state.cart];

      if (state.cart.length == 0) {

        myObj.push({ ...payload, count: 1 });
      }
      else {
        let checkItem = myObj.filter((value) => {
          return value.id === payload.id;
        })
        if (checkItem.length) {
         let newArr = myObj.map((value) => {
            if (value.id === payload.id) {
              return { ...value, count: value.count + 1 };
            }
            else {
              return value;
            }
          })

          return {...state, cart: newArr }
        }
        else{
          myObj.push({...payload, count:1});
        }

      }
      return { ...state, cart:myObj};

    default:
      return state
  }
}
