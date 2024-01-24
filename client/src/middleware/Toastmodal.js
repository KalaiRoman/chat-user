import toast from 'react-hot-toast';

export const ToastSuccess = async (data) => {
    return toast.success(data);
}

export const ToastError = async (data) => {
    return toast.error(data);
}