import { Api } from "./";


type TStatusBody = {
    id: number,
    name: string;
}

const create = async (body: TStatusBody) => {
    try {
        await Api.post("/status", body);
        return;
    } catch (error) {
        console.error(error);
    }
}
const deleteById = async (id: number) => {
    try {
        await Api.delete(`/status/${id}`);
        return;
    } catch (error) {
        console.error(error);
    }
}
const updateById = async (id: number, body: TStatusBody) => {
    try {
        await Api.patch(`/status/${id}`, body);
        return;
    } catch (error) {
        console.error(error);
    }
}
const getAll = async () => {
    try {
        const {data} = await Api.get("/status");
        return data;
    } catch (error) {
        console.error(error);
    }
}
const getByID = async (id: number) => {
    try {
        const {data} = await Api.get(`/status/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const StatusServices = {
    create,
    updateById,
    deleteById,
    getAll,
    getByID
}