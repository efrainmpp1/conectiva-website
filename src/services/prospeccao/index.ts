import * as integration from './integration';
import * as mock from './mock';
import { isMockMode } from '../../utils/env';

export const enviarDescricaoProspeccao = isMockMode()
  ? mock.enviarDescricaoProspeccao
  : integration.enviarDescricaoProspeccao;
