import { Input } from "../../input";
import { StyledDescriptionText, StyledForm, StyledTitleText } from "./new-task-form-styles";

type TNewTaskForm = {
  title: string;
  setTitle: Function;
  description: string;
  setDescription: Function;   
}

export const NewTaskForm = ({
  title,
  setTitle,
  description,
  setDescription
}: TNewTaskForm) => {
  return (
    <StyledForm>
            <label htmlFor="task-title" >
                <StyledTitleText>
                    Título
                </StyledTitleText>
            </label>
            <Input
                focus
                placeholder="Título"
                value={title}
                setValue={setTitle}
                type={"text"}
            />
            <label htmlFor="task-description">
                <StyledDescriptionText>
                    Descrição
                </StyledDescriptionText>
            </label>
            <Input
                placeholder="Descrição"
                value={description}
                setValue={setDescription}
                type={"text"}
            />
        </StyledForm>
  );
}