export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const ITEM_QUANTITY_UPDATED = 'ITEM_QUANTITY_UPDATED';
export const ITEM_PRICE_UPDATED = 'ITEM_PRICE_UPDATED';

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
  type: ITEM_QUANTITY_UPDATED,
  payload: {
    uuid,
    quantity
  }
});

export const updatePrice = (uuid, price) => ({
  type: ITEM_PRICE_UPDATED,
  payload: {
    uuid,
    price
  }
});
