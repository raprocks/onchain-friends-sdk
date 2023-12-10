// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface QueryResponse<T extends Record<string, any>> {
  data: T;
  error: Error;
}
