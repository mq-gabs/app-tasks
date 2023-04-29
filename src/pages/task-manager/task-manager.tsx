import { Input } from "../../components";
import { StyledStepList, StyledStepListBox, StyledStepListTopText, StyledTaskList, StyledTaskListBox, StyledTaskListTopText, StyledTaskManager } from "./task-manager-styles";
import { ListItem } from "./list-item";
import { stepInfoTest, taskInfoTest } from "./list-item/helpers";
import { useEffect, useState } from "react";


export const TaskManager = () => {

  const [activeTask, setActiveTask] = useState<number>(-1);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [openStepBar, setOpenStepBar] = useState<boolean>(false);

  useEffect(() => {
    if(activeTask !== -1) setOpenStepBar(true);
  }, [activeTask])

  return (                              
    <StyledTaskManager>
      <StyledTaskListBox>
        <StyledTaskListTopText>
          TASKS
        </StyledTaskListTopText>
        <Input 
          placeholder="Pesquisar TASK"
          type="text"
          value=""
          setValue={() => {}}
        />
        <StyledTaskList>
          {taskInfoTest?.map(taskInfo => (
            <ListItem
              primaryColor
              value={taskInfo.title}
              status={taskInfo.status}
              active={activeTask === taskInfo.id}
              onClick={() => setActiveTask(taskInfo.id)}
            />
          ))}
        </StyledTaskList>
      </StyledTaskListBox>
      <StyledStepListBox open={openStepBar}>
        <StyledStepListTopText>
          STEPS
        </StyledStepListTopText>
        <StyledStepList>
          {stepInfoTest?.map(stepInfo => (
            <ListItem
              value={stepInfo.title}
              status={stepInfo.status}
              active={activeStep === stepInfo.id}
              onClick={() => setActiveStep(stepInfo.id)}
            />
          ))}
        </StyledStepList>
      </StyledStepListBox>
    </StyledTaskManager>
  );
}