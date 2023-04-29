import { TTaskBody } from "../../services/task-services";
import { StyledCard, StyledDate, StyledDescription, StyledTitle } from "./step-card-styles";


type TStepCard =  {
    disabled?: boolean;
    step: TTaskBody;
    setStepID: Function;
    isDragging: boolean;
    setShowModal: Function;
    setIsDragging: Function;
}

export const StepCard = ({
    disabled=false,
    step,
    isDragging,
    setIsDragging,
    setStepID,
    setShowModal,
}: TStepCard  ) => {

    return(
        !disabled ? (
            <StyledCard 
            disabled={disabled}
            draggable
            isDragging={isDragging}
            onDrag={() => setIsDragging(true)} 
            onDragEnd={() => setIsDragging(false)}
            onMouseOver={() => setStepID(step.id)}
            onClick={() => setShowModal(true)}
            >    
                <StyledTitle>
                    {step.title}
                </StyledTitle>
                <StyledDescription>
                    {step.description}
                </StyledDescription>
                <StyledDate>
                    {step.created_at}
                </StyledDate>
            </StyledCard>
        ) : (
            <StyledCard isDragging={false} disabled={disabled}>
                <StyledTitle>
                    {"Vazio"}
                </StyledTitle>
            </StyledCard>
        )
    );
}