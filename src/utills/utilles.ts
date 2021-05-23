export const sum = (arr: string[]) =>
  arr.reduce((acc, cur) => acc + (Number(cur) || 0), 0);
