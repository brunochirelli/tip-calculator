import { connect } from 'react-redux';

import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  let subtotal = state.items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  let tipAmount = subtotal * (state.tipPercentage / 100);

  return {
    subtotal,
    tipAmount,
    total: subtotal + tipAmount
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
