import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import facenetReducer from '../features/auth/facenetSlice'
import userReducer from '../features/dashboard/userSlice'
import matchReducer from '../features/dashboard/matchSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        facenet: facenetReducer,
        user: userReducer,
        match: matchReducer,
           },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
