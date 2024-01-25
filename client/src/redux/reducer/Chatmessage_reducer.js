import { createSlice } from "@reduxjs/toolkit";
const Chatmessage_Reducer = createSlice({
    name: "Chatmessages",
    initialState: {
        loading: false,
        Chatmessage: [],
        error: ""
    },
    reducers: {
        ChatmessageRequest(state, action) {
            return {
                ...state,
                Chatmessage: [],
                loading: true
            }
        },
        ChatmessageSuccess(state, action) {
            return {
                ...state,
                Chatmessage: action.payload,
                loading: false

            }
        },
        ChatmessageFail(state, action) {
            return {
                ...state,
                Chatmessage: [],
                loading: false,
                error: action.payload
            }
        },
        ClearChatmessagesData: (state, action) => {
            return {
                ...state,
                Chatmessage: []
            }
        }
    }
})

const { actions, reducer } = Chatmessage_Reducer;
export const { ChatmessageRequest, ChatmessageSuccess, ChatmessageFail, ClearChatmessagesData } = actions;
export default reducer;