import * as mock from './mock';
import * as integration from './integration';
import { isProductionEnv } from '../../utils/env';

export const getBalance = isProductionEnv()
  ? integration.getBalance
  : mock.getBalance;

export const buyCredits = isProductionEnv()
  ? integration.buyCredits
  : mock.buyCredits;
