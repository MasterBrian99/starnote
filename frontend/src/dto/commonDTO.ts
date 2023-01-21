export interface CommonInterface<T = void> {
  status: number;
  message: string;
  data?: T;
}
