import { alluserservice } from "../../services/auth_service/auth_service";
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
