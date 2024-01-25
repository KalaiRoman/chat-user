import { ToastSuccess } from "../../middleware/Toastmodal";
import { alluserservice } from "../../services/auth_service/auth_service";
import { createCommandService, deleteCommandService } from "../../services/command_service/command_service";
import { AlluserFail, AlluserRequest, AlluserSuccess } from "../reducer/Alluser_reducer";
import { GetmessagesActions } from "./ChatMessageActions";

export const AllUsers = () => async (dispatch) => {
    dispatch(AlluserRequest());
    try {
        const response = await alluserservice();
        if (response) {
            dispatch(AlluserSuccess(response?.data));
        }

    } catch (error) {
        dispatch(AlluserFail(error?.response?.data?.message));

    }
}



export const CommandCreateActions = (data, chatid) => async (dispatch) => {
    try {
        const response = await createCommandService(data);
        if (response) {
            dispatch(GetmessagesActions(chatid));
        }
    } catch (error) {
        // ToastError(error?.response?.data?.message);
    }
}

export const CommandDeleteActions = (id, chatid) => async (dispatch) => {
    try {
        const response = await deleteCommandService(id);
        if (response) {
            setTimeout(() => {
                ToastSuccess("Command Deleted Successfully");
                dispatch(GetmessagesActions(chatid));
            }, 400);
        }
    } catch (error) {
    }
}