import { createSlice } from "@reduxjs/toolkit";
const Alluser_Reducer = createSlice({
    name: "Allusers",
    initialState: {
        loading: false,
        Alluser: [],
        error: ""
    },
    reducers: {
        AlluserRequest(state, action) {
            return {
                ...state,
                Alluser: [],
                loading: true
            }
        },
        AlluserSuccess(state, action) {
            return {
                ...state,
                Alluser: action.payload,
                loading: false

            }
        },
        AlluserFail(state, action) {
            return {
                ...state,
                Alluser: [],
                loading: false,
                error: action.payload
            }
        },
        ClearAllusersData: (state, action) => {
            return {
                ...state,
                Alluser: []
            }
        }
    }
})

const { actions, reducer } = Alluser_Reducer;
export const { AlluserRequest, AlluserSuccess, AlluserFail, ClearAllusersData } = actions;
export default reducer;