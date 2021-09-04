export interface IRankApi {
  clearTop10: () => Promise<any>;
  clearRoom: (params: any) => Promise<any>;
}

export interface IBoardApi {
  allBoard: () => Promise<any>;
}