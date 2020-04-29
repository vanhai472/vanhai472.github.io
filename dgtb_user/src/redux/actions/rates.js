import { GET_ALL_RATE_OPTION } from "./constants";

export const getAllRateOption = (...args) => ({
  type: GET_ALL_RATE_OPTION,
  args
});
