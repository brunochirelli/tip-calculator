import {
  ITEM_ADDED,
  ITEM_REMOVED,
  UPDATE_PRICE,
  UPDATE_QUANTITY
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sand', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    // fazendo isso temos como sobrescrever se algo for
    // depois de enviar. Tipo um default/fallback.
    const item = { uuid: id++, quantity: 1, ...action.payload };

    return [...state, item];
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((e) => e.uuid !== action.payload.uuid);
  }

  if (action.type === UPDATE_QUANTITY) {
    /**
     * Mapeie o array e veja qual é o que tem o mesmo uuid
     * que o payload e então atualize o atributo com o novo valor
     */
    return state.map((e) => {
      if (e.uuid === action.payload.uuid) {
        e.quantity = action.payload.quantity;
      }

      /**
       * Em todos os casos, retorne o elemento
       */
      return e;
    });
  }

  if (action.type === UPDATE_PRICE) {
    return state.map((e) => {
      if (e.uuid === action.payload.uuid) {
        e.price = action.payload.price;
      }

      return e;
    });
  }

  return state;
};

export default reducer;
