
import bill from './bill';
import makeInvoice from './makeInvoice';
import financialInvoice from './financialInvoice';
import kingdee from './kingdee';

export default {
  ...bill,
  ...makeInvoice,
  ...financialInvoice,
  ...kingdee
}
