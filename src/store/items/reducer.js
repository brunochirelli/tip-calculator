import produce from 'immer';

import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sand', price: 12, quantity: 1 }
];

/** Produce é do Immer */
export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    /**
     * fazendo isso temos como sobrescrever se algo for
     * depois de enviar. Tipo um default/fallback.
     */
    // const item = { uuid: id++, quantity: 1, ...action.payload };
    // return [...state, item];
    /**
     * Usando Immer
     */
    // return produce(state, (draftState) => {
    //   const item = { uuid: id++, quantity: 1, ...action.payload };
    //   draftState.push(item);
    // });
    /**
     * Wrapping o reducer com produce()
     */
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((e) => e.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    /**
     * Mapeie o array e veja qual é o que tem o mesmo uuid
     * que o payload e então atualize o atributo com o novo
     * valor vai mudar o state.
     *
     * Tudo isso antes do Immer.
     *
     * Vou aplicar Immer em seguida:
     */
    // return produce(state, (draftState) => {
    //   const item = draftState.find((item) => item.uuid === action.payload.uuid);
    //   item.quantity = parseInt(action.payload.quantity, 10);
    // });

    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }

  return state;
}, initialItems);

export default reducer;
