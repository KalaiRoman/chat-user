import { changepasswordService, forgetpasswordService, loginUer, registerUser } from "../../services/auth_service/auth_service"
// import { SingleuserActionData } from "./SingleuserAction";
import { ToastSuccess, ToastError } from './../../middleware/Toastmodal';

export const LoginAction = (data, navigate) => async (dispatch) => {
    try {
        const response = await loginUer(data);
        if (response) {
            localStorage.setItem("user_token", JSON.stringify(response?.token));
            ToastSuccess("User Login Successfully")
            setTimeout(() => {
                navigate("/chatuser");
                // dispatch(SingleuserActionData());
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}


export const RegisterAction = (data, navigate) => async () => {
    try {
        const response = await registerUser(data);
        if (response) {
            ToastSuccess("User Register Successfully");
            setTimeout(() => {
                navigate("/");
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}
export const ForgetpasswordActions = (data, navigate) => async () => {

    try {
        const response = await forgetpasswordService(data);
        if (response) {
            setTimeout(() => {
                navigate("/changepassword", { state: { user: response?.userid } });
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}

export const ChangepasswordActions = (id, data, navigate) => async () => {
    try {
        const response = await changepasswordService(id, data);
        if (response) {
            setTimeout(() => {
                ToastSuccess(response?.message);
                navigate("/login");
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}