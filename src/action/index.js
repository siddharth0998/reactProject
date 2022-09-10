import { ActionTypes } from "../constant"

export const GetProductData = (items) => {
    return {
    type: ActionTypes.GetData,
    payload : items
  }
}
export const AddItem = (payload) => {
  return {
    type : ActionTypes.AddToCart,
    payload
  }
}
