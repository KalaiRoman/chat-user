import { createSlice } from "@reduxjs/toolkit";
const LoginToken_Reducer = createSlice({
    name: "token",
    initialState: {
        loading: false,
        token: [],
        error: ""
    },
    reducers: {
        loginTokenRequest(state, action) {
            return {
                ...state,
                loginuser: [],
                loading: true
            }
        },
        loginTokenSuccess(state, action) {
            return {
                ...state,
                loginuser: action.payload,
                loading: false

            }
        },
        loginTokenFail(state, action) {
            return {
                ...state,
                loginuser: [],
                loading: false,
                error: action.payload
            }
        },
        ClearLoginUserData: (state, action) => {
            return {
                ...state,
                loginuser: []
            }
        }
    }
})

const { actions, reducer } = LoginToken_Reducer;
export const { loginTokenRequest, loginTokenSuccess, loginTokenFail, ClearLoginUserData } = actions;
export default reducer;