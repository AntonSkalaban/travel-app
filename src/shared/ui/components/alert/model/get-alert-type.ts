export const getAlertType = (isFetching: boolean, isError: boolean) => {
  return !isFetching && !isError ? "success" : "error";
};
