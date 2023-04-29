import { Api } from "./";


export type TTaskBody = {
    id: number;
    title: string;
    description: string;
    status_id: number;
    created_at: string;
    last_change?: string;
    last_step_id_change?: number;
    steps?: any[];
}

const formatDateAndHour = (value: string) => {
    const [date, time] = value.split('T');
    const [year, month, day] = date.split('-');
    const splitedTime = time.split(':');
    const hour = splitedTime[0];
    const minute = splitedTime[1];
    return [[day, month, year].join('/'), [hour, minute].join(':')].join(' ');
}

const create = async (body: TTaskBody) => {
    try {
        const date = formatDateAndHour(new Date().toJSON());
        body = {
            ...body,
            status_id: 0,
            created_at: date,
            last_change: "",
            last_step_id_change: -1,
            steps: []
        }
        const {data} = await Api.post("/tasks", body);
        return data;
    } catch (error) {
        console.error(error)
    }
}

const deleteById = async (id: number) => {
    try {
        const {data} = await Api.delete(`/tasks/${id}`);

    } catch (error) {
        console.error(error)
    }
}

const updateById = async (id: number, body: TTaskBody ) => {
    try {
        const {data} = await Api.patch(`/tasks/${id}`, body);

    } catch (error) {
        console.error(error)
    }
}

const getAll = async () => {
    try {
        const { data } = await Api.get("/tasks"); 
        return data; 
    } catch(error) {
        console.error(error);
    }
}

const getById = async (id: number) => {
    try {
        const { data } = await Api.get(`/tasks/ID=${id}`); 
        return data; 
    } catch (error) {
        console.error(error)
    }
}

export const TaskServices = {
    create,
    deleteById,
    updateById,
    getAll,
    getById
}