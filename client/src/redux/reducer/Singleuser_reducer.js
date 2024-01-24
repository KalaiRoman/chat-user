import { createSlice } from "@reduxjs/toolkit";
const Singleuser_Reducer = createSlice({
    name: "Singleusers",
    initialState: {
        loading: false,
        Singleuser: {},
        error: ""
    },
    reducers: {
        SingleuserRequest(state, action) {
            return {
                ...state,
                Singleuser: [],
                loading: true
            }
        },
        SingleuserSuccess(state, action) {
            return {
                ...state,
                Singleuser: action.payload,
                loading: false

            }
        },
        SingleuserFail(state, action) {
            return {
                ...state,
                Singleuser: [],
                loading: false,
                error: action.payload
            }
        },
        ClearSingleusersData: (state, action) => {
            return {
                ...state,
                Singleuser: []
            }
        }
    }
})

const { actions, reducer } = Singleuser_Reducer;
export const { SingleuserRequest, SingleuserSuccess, SingleuserFail, ClearSingleusersData } = actions;
export default reducer;