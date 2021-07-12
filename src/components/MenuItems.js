import { Stack } from '@twilio-paste/stack';
import PropTypes from 'prop-types';

import { MenuItemContainer } from '../containers/MenuItemContainer';
import MenuItem from './MenuItem';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContainer {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};

MenuItems.propTypes = {
  /**
   * Meu comentário
   */
  items: PropTypes.array
};
