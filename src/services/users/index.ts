import * as integration from './integration';
import * as mock from './mock';
import { isMockMode } from '../../utils/env';

export const registerUser = isMockMode() ? mock.registerUser : integration.registerUser;
export const getUserByFirebaseUid = isMockMode()
  ? mock.getUserByFirebaseUid
  : integration.getUserByFirebaseUid;
