import { connect } from 'react-redux';

import MenuItem from '../components/MenuItem';
import { removeItem, updateItem, updatePrice } from '../store/items/actions';

const mapStateToProps = (state, ownProps) => {
  // sem necessidade de passar ownProps
  return {
    total: ownProps.quantity * ownProps.price
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
