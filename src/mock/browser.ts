import { setupWorker } from 'msw/browser';

import { makeNetworkError } from './handler/error';
import { API_URL } from '../shared/constant/url';

export const worker = setupWorker(makeNetworkError(`${API_URL}/map`));
