import { useState } from 'react';

import { Box, Button, Input, Label } from '@twilio-paste/core';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addNewItem } from '../store/items/actions';

export const NewItemForm = ({ onSubmit }) => {
  /**
   * Neste componente, utilizamos o connect() do Redux para
   * isolar a store com suas actions para fora da UI e
   * apenas acabando por consumi-las via um HOC (connect) do
   * próprio Redux.
   */
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const isValid = () => {
    if (!name) return false;
    if (!price.length) return false;
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(name, price);
    }

    // Alteramos para mapDispatchToProps()
    // dispatch(addNewItem(name, price));

    setName('');
    setPrice(0);
  };

  return (
    <Box marginBottom="space80">
      <form onSubmit={handleSubmit}>
        <Box marginBottom="space80">
          <Label htmlFor="item-name">Item Name</Label>
          <Input
            id="item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box marginBottom="space80">
          <Label htmlFor="item-price">Price</Label>
          <Input
            id="item-price"
            insertBefore={<div>$</div>}
            type="number"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </Box>
        <Button
          disabled={!isValid()}
          fullWidth
          onClick={handleSubmit}
          type="submit"
          variant="primary"
        >
          🍳 Add Item
        </Button>
      </form>
    </Box>
  );
};

NewItemForm.propTypes = {
  /**
   * Essa função é recebida via mapDispatchToProps usando o
   * Connect API do Redux.
   */
  onSubmit: PropTypes.func
};

export default NewItemForm;
