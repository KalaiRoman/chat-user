


import instanceBaseurl from './../../config/Baseurl';
export async function createCommandService(data) {
    try {
        const response = await instanceBaseurl.post(`/chat/create/`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function deleteCommandService(id, data) {
    try {
        const response = await instanceBaseurl.delete(`/chat/delete/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getCommandsmessages(data) {
    try {
        const response = await instanceBaseurl.post(`/chat/getmessages/`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

