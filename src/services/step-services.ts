import { Api } from "./";

export type TStepBody = {
    id: number;
    title: string;
    description: string;
    status_id: number;
    created_at: string;
    last_change?: string;
    last_substep_id_change?: string;
    parent_task_id: number;
    substeps?: any[];
}

const formatDateAndHour = (value: string) => {
    const [date, time] = value.split('T');
    const [year, month, day] = date.split('-');
    const splitedTime = time.split(':');
    const hour = splitedTime[0];
    const minute = splitedTime[1];
    return [[day, month, year].join('/'), [hour, minute].join(':')].join(' ');
}

const create = async (body: TStepBody) => {
    try {
        const date = formatDateAndHour(new Date().toJSON());
        body = {
            ...body,
            status_id: 0,
            created_at: date,
            last_change: "",
            last_substep_id_change: "",
            substeps: []
        }
        const {data} = await Api.post("/steps", body);
        
    } catch (error) {
        console.error(error)
    }
}

const deleteById = async (id: number) => {
    try {
        const {data} = await Api.delete(`/steps/${id}`);

    } catch (error) {
        console.error(error)
    }
}

const updateById = async (id: number, body: TStepBody ) => {
    try {
        const {data} = await Api.patch(`/steps/${id}`, body);
        return data;
    } catch (error) {
        console.error(error)
    }
}

const getAll = async () => {
    try {
        const { data } = await Api.get("/steps"); 
        return data; 
    } catch(error) {
        console.error(error);
    }
}

const getAllByTaskId = async (parent_task_id: number) => {
    try {
        const { data } = await Api.get(`/steps?parent_task_id=${parent_task_id}`);
        return data
    } catch (error: any) {
        console.error(error)
    }
}

const getById = async (id: number) => {
    try {
        const { data } = await Api.get(`/steps/ID=${id}`); 
        return data; 
    } catch (error) {
        console.error(error)
    }
}

export const StepServices = {
    create,
    deleteById,
    updateById,
    getAll,
    getById,
    getAllByTaskId
}