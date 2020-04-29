import { fork, all } from "redux-saga/effects";
import auth from "./auth";
import user from "./user";
import master from "./master";
import news from "./news";
import faq from "./faq";
import complaints from "./complaints";
import rate from "./rates";
import comment from "./comment";
import category from "./category";
import notification from "./notification";
import ImageLocation from "./ImageLocation";
// console.log(user.default)
const rootSaga = function*() {
  yield all([
    ...auth.map(watcher => fork(watcher)),
    ...user.map(watcher => fork(watcher)),
    ...master.map(watcher => fork(watcher)),
    ...news.map(watcher => fork(watcher)),
    ...faq.map(watcher => fork(watcher)),
    ...complaints.map(watcher => fork(watcher)),
    ...rate.map(watcher => fork(watcher)),
    ...comment.map(watcher => fork(watcher)),
    ...category.map(watcher => fork(watcher)),
    ...notification.map(watcher => fork(watcher)),
    ...ImageLocation.map(watcher => fork(watcher))
  ]);
};
export default rootSaga;
