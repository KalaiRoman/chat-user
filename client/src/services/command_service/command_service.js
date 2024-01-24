


import instanceBaseurl from './../../config/Baseurl';
export async function createCommandService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/chat/create/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function deleteCommandService(id, data) {
    try {
        const response = await instanceBaseurl.post(`/chat/delete/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function LikePostService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/blog/postlike/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

