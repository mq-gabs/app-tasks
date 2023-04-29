import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Modal, NewStepForm, StepCard } from "../../../../components";
import { AppContext } from "../../../../contexts";
import { StepServices, TStepBody, StatusServices } from "../../../../services";
import { IAddFile, IEditFile } from "../../../../utils/icons";
import { statusNames } from "../helpers";
import { StyledBoard, StyledBoardOptions, StyledColumn, StyledColumnBody, StyledColumnHeader, StyledColumnsWrap, StyledColumnBodyInner, StyledTextHeader, StyledWarning } from "./cards-board-styles";

export const CardsBoard = ({
}) => {

    const {selectedTaskID} = useContext(AppContext);

    const [isDragging, setIsDragging] = useState(false);
    const [allSteps, setAllSteps] = useState<TStepBody[]>([] as TStepBody[]);
    const [stepID, setStepID] = useState<number>(0);
    const [selectedStep, setSelectedStep] = useState<TStepBody>({} as TStepBody);
    const [columnStatusID, setColumnStatusID] = useState<number>(-1);
    const [openStepModal, setOpenStepModal] = useState<boolean>(false);
    const [openNewStepModal, setOpenNewStepModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<{id: number, name: string}[]>([]);

    const handleUpdateStepStatus = useCallback(async () => {

        const updatingStep = {...selectedStep, status_id: columnStatusID};
        const data = await StepServices.updateById(stepID, updatingStep);
        setAllSteps(allSteps.map(step => step.id===data.id ? data : step));

    }, [selectedStep, columnStatusID, stepID]);

    const handleCreateNewStep = useCallback(async () => {

        await StepServices.create({
            title: title,
            description: description,
            parent_task_id: selectedTaskID
        } as TStepBody);
        handleCloseNewStepModal();

    }, [title, description, selectedTaskID]);
   
    const handleDeleteStepByID = useCallback(async (id: number) => {

        await StepServices.deleteById(id);
        handleCloseStepModal();

    }, []);

    const handleGetAllStepsByTaskID = useCallback(async () => {

        const data = await StepServices.getAllByTaskId(selectedTaskID)
        setAllSteps(data);

    }, [selectedTaskID])

    const handleGetAllStatus = useCallback(async () => {

        const data = await StatusServices.getAll();
        setStatus(data);

    }, [])

    useEffect(() => {
        handleGetAllStatus();
    }, []);
    
    useEffect(() => {
        handleGetAllStepsByTaskID();
    }, [selectedTaskID, openStepModal, openNewStepModal])

    useEffect(() => {
        setSelectedStep(allSteps?.filter(step => step.id===stepID)[0]);
    }, [stepID, allSteps])

    const handleCloseNewStepModal = () => {
        setTitle('');
        setDescription('');
        setOpenNewStepModal(false);
    }

    const handleCloseStepModal = () => {
        // Verificar se há alterações não salvas antes de fechar
        setOpenStepModal(false);
    }

    return(
        <>
        <Modal
            open={openStepModal}
            onClose={handleCloseStepModal}
            title={`Card: #${stepID} - Status: ${status?.find(stt => stt.id===selectedStep?.status_id)?.name}`}
            hideButtons={true}
            onConfirm={handleCloseStepModal}
            confirmText="Ok"
            cancelText="Excluir"
            onCancel={() => handleDeleteStepByID(stepID)}
        >
            <p>{selectedStep?.title}</p>
            <p>{selectedStep?.description}</p>
            <p>{selectedStep?.created_at}</p>
        </Modal>

        <Modal
            open={openNewStepModal}
            onClose={handleCloseNewStepModal}
            title="Novo Step"
            onCancel={handleCloseNewStepModal}
            onConfirm={handleCreateNewStep}
            cancelText="Cancelar"
            confirmText="Criar"
        >
            <NewStepForm 
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            />
        </Modal>

        <StyledBoard>

        {
            status ? (
                <>
                    <StyledBoardOptions>
                        <Button 
                            buttonType="confirm"
                            text="Nova"
                            icon={<IAddFile />}
                            onClick={()=>setOpenNewStepModal(true)}
                        />
                        <Button 
                            buttonType="confirm"
                            text="Editar"
                            icon={<IEditFile />}
                            onClick={()=>{}}
                        />
                    </StyledBoardOptions>

                    <StyledColumnsWrap>
                        {
                            status.map((stt, index) => {

                                const filteredSteps = allSteps?.filter(steps => steps.status_id===stt.id);
                                return(
                                    <StyledColumn key={stt.id}>
                                        <StyledColumnHeader>
                                            <StyledTextHeader>
                                                {stt.name}
                                            </StyledTextHeader>
                                        </StyledColumnHeader>
                                        
                                        <StyledColumnBody isLast={index+1===statusNames.length}>
                                            <StyledColumnBodyInner 
                                                isDragging={isDragging} 
                                                onDragEnter={()=>setColumnStatusID(stt.id)}
                                                onDragEndCapture={handleUpdateStepStatus}
                                            >
                                                {filteredSteps.length!==0 ? (
                                                    filteredSteps.map(step => (
                                                        <StepCard 
                                                            key={step.id}
                                                            step={step}
                                                            isDragging={isDragging}
                                                            setIsDragging={setIsDragging}
                                                            setStepID={setStepID}
                                                            setShowModal={setOpenStepModal}
                                                        />
                                                    ))
                                                ) : (
                                                    <StepCard 
                                                        disabled
                                                        isDragging={false}
                                                        setIsDragging={()=>{}}
                                                        setShowModal={()=>{}}
                                                        setStepID={()=>{}}
                                                        step={{} as TStepBody}
                                                    />
                                                )
                                                }
                                            </StyledColumnBodyInner>
                                        </StyledColumnBody>
                                    </StyledColumn>
                                );
                            })
                        }
                    </StyledColumnsWrap>
                </>
            ) : (
                <StyledWarning>
                    Não foi possível conectar ao banco de dados...
                </StyledWarning>
            )
        }

        </StyledBoard>
        </>
    );
}