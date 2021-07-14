import { connect } from 'react-redux';

import MenuItem from '../components/MenuItem';
import { removeItem, updateItem, updatePrice } from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';

/**
 * Estamos fazendo habilmente o separation of concerns
 */

const mapStateToProps = (state, ownProps) => {
  return {
    total: selectItemTotal(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updateQuantity: (quantity) => dispatch(updateItem(ownProps.uuid, quantity)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
