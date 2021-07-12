import { Stack } from '@twilio-paste/stack';

import { toCurrency } from '../utilities';
import SummaryLine from './SummaryLine';

export const Summary = ({ subtotal = 0, tipAmount = 0, total = 0 }) => {
  return (
    <Stack orientation="vertical" spacing="space30">
      <SummaryLine title="Subtotal">{toCurrency(subtotal)}</SummaryLine>
      <SummaryLine title="Tip Amount">{toCurrency(tipAmount)}</SummaryLine>
      <SummaryLine title="Total">{toCurrency(total)}</SummaryLine>
    </Stack>
  );
};
