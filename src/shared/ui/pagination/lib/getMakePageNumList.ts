export const getMakePageNumList = (
  currentPage: number,
  totalPage: number,
  range: number
) => {
  const halfRange = Math.floor(range / 2);

  const startPage = Math.max(
    1,
    Math.min(currentPage - halfRange, totalPage - range + 1)
  );
  const lastPage = Math.min(totalPage, startPage + range - 1);

  return Array.from(
    { length: lastPage - startPage + 1 },
    (_, i) => startPage + i
  );
};
