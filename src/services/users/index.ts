import * as integration from './integration';
import * as mock from './mock';
import { isMockMode } from '../../utils/env';

export const registerUser = isMockMode() ? mock.registerUser : integration.registerUser;
export const getUserByFirebaseUid = isMockMode()
  ? mock.getUserByFirebaseUid
  : integration.getUserByFirebaseUid;
export const getUserHistoricalServices = isMockMode()
  ? mock.getUserHistoricalServices
  : integration.getUserHistoricalServices;
export const getNumberOfHistoricalServicesByUserId = isMockMode()
  ? mock.getNumberOfHistoricalServicesByUserId
  : integration.getNumberOfHistoricalServicesByUserId;
export const getLastServiceUsedByUserId = isMockMode()
  ? mock.getLastServiceUsedByUserId
  : integration.getLastServiceUsedByUserId;
