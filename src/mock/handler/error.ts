import { delay, http, HttpResponse } from 'msw';

export const make400Error = (url: string) => {
  return http.get(url, async () => {
    await delay(2000);
    return HttpResponse.json(null, { status: 400 });
  });
};

export const make500Error = (url: string) => {
  return http.get(url, async () => {
    await delay(2000);
    return HttpResponse.json(null, { status: 500 });
  });
};

export const makeNetworkError = (url: string) => {
  return http.get(url, async () => {
    await delay(2000);
    return HttpResponse.error();
  });
};
