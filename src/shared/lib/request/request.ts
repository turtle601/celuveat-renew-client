import { REQUEST_ERROR_MESSAGE } from '../../constant/message';
import { networkError, requestError } from './error';

export const requestAPI = <T>(
  url: string,
  params?: URLSearchParams
): Promise<T> => {
  const fullUrl = params ? `${url}?${params.toString()}` : `${url}`;

  return new Promise((resolve, reject) => {
    fetch(fullUrl)
      .then((response) => {
        if (!response.ok) {
          reject(requestError({ error: new Error(REQUEST_ERROR_MESSAGE) }));
        }

        return response.json();
      })
      .then((data: T) => resolve(data))
      .catch((error) => {
        reject(networkError({ error }));
      });
  });
};
