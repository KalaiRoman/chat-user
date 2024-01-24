import { ToastSuccess } from "../../middleware/Toastmodal";
import { alluserservice } from "../../services/auth_service/auth_service";
import { createCommandService, deleteCommandService } from "../../services/command_service/command_service";
import { AlluserFail, AlluserRequest, AlluserSuccess } from "../reducer/Alluser_reducer";

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



export const CommandCreateActions = (id,data) => async (dispatch) => {
    try {
        const response = await createCommandService(id,data);
        if (response) {
            setTimeout(() => {
                // dispatch(getBlogActionData())
                dispatch(AllUsers());
                ToastSuccess("Command Created Successfully")
            }, 400);
        }
    } catch (error) {
        // ToastError(error?.response?.data?.message);
    }
}

export const CommandDeleteActions = (id, data) => async (dispatch) => {
    try {
        const response = await deleteCommandService(id, data);
        if (response) {
            // dispatch(getBlogActionData())
            setTimeout(() => {
                ToastSuccess("Command Deleted Successfully")
            }, 400);
        }
    } catch (error) {
        // ToastError(error?.response?.data?.message);
    }
}