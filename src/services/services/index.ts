import * as mock from './mock';
import * as integration from './integration';
import { isProductionEnv } from '../../utils/env';

export const getServices = isProductionEnv()
  ? integration.getServices
  : mock.getServices;

export const getServiceById = isProductionEnv()
  ? integration.getServiceById
  : mock.getServiceById;
