export const getError = (error) =>
  error?.response?.data?.message || error?.message;
