export interface IRankApi {
  clearTop10: () => Promise<any>;
  clearRoom: (params: any) => Promise<any>;
}