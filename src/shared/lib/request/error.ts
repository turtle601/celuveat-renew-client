import {
  NETWORK_ERROR_MESSAGE,
  REQUEST_ERROR_MESSAGE,
} from '../../constant/message';

import type { INetworkError, IRequestError } from './type';

export function requestError(response: { error: unknown }): IRequestError {
  return {
    ...response,
    errorType: 'REQUEST',
    errorMessage: REQUEST_ERROR_MESSAGE, // 4xx, 5xx 에러
  };
}

export function networkError(response: { error: unknown }): INetworkError {
  return {
    ...response,
    errorType: 'NETWROK', // 네트워크 에러, CORS 에러, 요청 시간 초과 등
    errorMessage: NETWORK_ERROR_MESSAGE,
  };
}
