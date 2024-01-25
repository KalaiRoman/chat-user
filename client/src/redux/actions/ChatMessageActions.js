import { getCommandsmessages } from "../../services/command_service/command_service";
import { ChatmessageFail, ChatmessageRequest, ChatmessageSuccess } from "../reducer/Chatmessage_reducer";

export const GetmessagesActions = (data) => async (dispatch) => {
    dispatch(ChatmessageRequest());
    try {
        const response = await getCommandsmessages(data);
        if (response) {
            dispatch(ChatmessageSuccess(response?.data));
        }
    } catch (error) {
        dispatch(ChatmessageFail(error?.response?.data?.message));

    }
}
