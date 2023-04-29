import { Ball } from "./ball";
import { StyledBallContainer, StyledStatusText, StyledListItem, StyledListText } from "./list-item-styles";

type TTaskListItem = {
  value: string;
  status: string;
  active?: boolean;
  onClick: () => void;
  primaryColor?: boolean;
}

export const ListItem = ({
  value,
  status,
  active,
  onClick,
  primaryColor = false
}: TTaskListItem) => {
  return (
    <StyledListItem onClick={onClick} active={active} primaryColor={primaryColor} >
      <StyledStatusText status={status}>
        {status}
      </StyledStatusText>
      <StyledListText>
        {value}
      </StyledListText>
      {/* {active && (
      <StyledBallContainer>
          <Ball />
        </StyledBallContainer>
      )} */}
    </StyledListItem>
  );
}