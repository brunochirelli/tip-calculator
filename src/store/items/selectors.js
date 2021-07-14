import { createSelector } from 'reselect';

export const selectItem = (state, ownProps) => {
  // baseado nas props do item
  return state.items.find((item) => item.uuid === ownProps.uuid);
};

export const selectItemTotal = createSelector(
  [selectItem], // usamos sempre o retorno da função do array
  (item) => item.quantity * item.price
);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
