import { CHANGE_BACKGROUND_CALENDAR } from "./constants";

export const changeBackground = (value) => ({
  type: CHANGE_BACKGROUND_CALENDAR,
  payload: value,
});
