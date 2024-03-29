import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    //actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if (index >= 0) {
        //the item exists in the basket... remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove (id: ${action.payload.id}) as it's not in the basket`
        )
      }

      state.items = newBasket;
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//selectors - This is how we pull information from the global store slice
export const selectItems = (state) => state.basket.items;
//calculating the total amount of product in basket
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price ,0);

export default basketSlice.reducer;