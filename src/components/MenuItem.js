import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
  Label
} from '@twilio-paste/core';
import { useDispatch } from 'react-redux';

import { toCurrency } from '../utilities';

export const MenuItem = ({
  uuid,
  name,
  price,
  quantity,
  total,
  updatePrice = () => {},
  updateQuantity = () => {},
  remove = () => {}
}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleUpdateQuantity = (e) => {
    updateQuantity(e.target.value);
  };
  const handleUpdatePrice = (e) => {
    updatePrice(e.target.value);
  };

  return (
    <Card marginTop="space40">
      <Heading variant="heading30" as="h3">
        {name}
      </Heading>
      <Flex>
        <Box padding="space20">
          <Label htmlFor={`$item-${uuid}-price`}>Price</Label>
          <Input
            id={`$item-${uuid}-price`}
            insertBefore={<div>$</div>}
            defaultValue={price}
            type="number"
            onChange={handleUpdatePrice}
          />
        </Box>
        <Box padding="space20">
          <Label htmlFor={`$item-${uuid}-quantity`}>Quantity</Label>
          <Input
            id={`$item-${uuid}-quantity`}
            defaultValue={quantity}
            type="number"
            onChange={handleUpdateQuantity}
          />
        </Box>
        <Box padding="space20" textAlign="right" width="100%">
          <Heading variant="heading50">Total</Heading>
          {toCurrency(total)}
        </Box>
      </Flex>
      <Box width="100%" textAlign="right">
        <Button variant="destructive_secondary" size="small" onClick={remove}>
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default MenuItem;
