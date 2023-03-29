import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import orderSlice from "slice/orderSlice";
import wizardPageSlice from "slice/wizardPageSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
    page: wizardPageSlice,
  },
  middleware: [logger],
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
