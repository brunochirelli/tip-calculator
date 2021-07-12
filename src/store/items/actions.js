export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const UPDATE_PRICE = 'UPDATE_PRICE';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: {
    uuid
  }
});

export const updateItem = (uuid, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: {
    uuid,
    quantity
  }
});

export const updatePrice = (uuid, price) => ({
  type: UPDATE_PRICE,
  payload: {
    uuid,
    price
  }
});
