import { configureStore } from '@reduxjs/toolkit';
import services from './services';

export const store = configureStore({
  reducer: services.reduce((accumulator, { reducerPath, reducer }) => ({
    ...accumulator,
    [reducerPath]: reducer,
  }), {}),

  middleware: (getDefaultMiddleware) => ([
    ...getDefaultMiddleware(),
    ...services.map(({ middleware }) => middleware),
  ]),
});
