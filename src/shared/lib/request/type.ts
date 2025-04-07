export interface IGenericError<T extends string> {
  errorType: T;
  errorMessage: string;
}

export const REQUEST = 'REQUEST' as const;
export interface IRequestError extends IGenericError<typeof REQUEST> {
  error: unknown;
}

export const NETWROK = 'NETWROK' as const;
export interface INetworkError extends IGenericError<typeof NETWROK> {
  error: unknown;
}
