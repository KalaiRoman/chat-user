
import instanceBaseurl from './../../config/Baseurl';

export async function loginUer(data) {
    try {
        const response = await instanceBaseurl.post(`/auth/login`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function registerUser(data) {
    try {
        const response = await instanceBaseurl.post(`/auth/register`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function alluserservice() {
    try {
        const response = await instanceBaseurl.get(`/auth/alluser`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function singleUserService(data) {
    try {
        const response = await instanceBaseurl.get(`/auth/get/${data}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function singleUserServiceUpdate(id, data) {
    try {
        const response = await instanceBaseurl.put(`/auth/update/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function forgetpasswordService(data) {
    try {
        const response = await instanceBaseurl.post(`/auth/forgetpassword/`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function changepasswordService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/auth/passwordchange/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function updateuserService(data) {
    try {
        const response = await instanceBaseurl.put(`/auth/update/`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}