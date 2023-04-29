import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts";
import { TaskServices, TTaskBody } from "../../../services";
import { IAdd, IAddFile } from "../../../utils/icons";
import { NewTaskForm } from "../../form";
import { Modal } from "../../modal";
import { StyledLi, StyledTasksList, StyledTaskTitle, StyledUl } from "./tasks-list-style";

export const TasksList = () => {

    const [tasks, setTasks] = useState<TTaskBody[]>();
    const [openNewTaskModal, setOpenNewTaskModal] = useState<boolean>(false);
    const {selectedTaskID, setSelectedTaskID} = useContext(AppContext);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const getAllTasks = useCallback(async () => {
        const data = await TaskServices.getAll()
        setTasks(data);
    }, [])
  
    useEffect(() => {
        getAllTasks();
    }, [selectedTaskID])

    const handleOpenNewTaskModal = () => {
        setOpenNewTaskModal(true);
    }

    const handleCreateNewTask = useCallback(async() => {

    }, [])

    return (
        <StyledTasksList>

            <Modal
                onClose={() => setOpenNewTaskModal(false)}
                open={openNewTaskModal}
                title="Nova task"
                onCancel={() => setOpenNewTaskModal(false)}
                onConfirm={handleCreateNewTask}
                cancelText="Cancelar"
            >
                <NewTaskForm
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                />
            </Modal>

            <StyledUl>
                { 
                    tasks?.map(task => (
                        <StyledLi
                            selected={selectedTaskID===task.id}
                            onClick={() => setSelectedTaskID(task.id)}
                        >
                            <StyledTaskTitle>
                                {task.title}
                            </StyledTaskTitle>
                        </StyledLi>
                    ))
                }
                <StyledLi
                    selected={false}
                    onClick={handleOpenNewTaskModal}
                >
                    <StyledTaskTitle>
                        <IAdd />
                    </StyledTaskTitle>
                </StyledLi>
            </StyledUl>
        </StyledTasksList>
    );
}