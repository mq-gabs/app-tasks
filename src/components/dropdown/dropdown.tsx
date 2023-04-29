import { ReactNode, useState } from "react";
import { Button } from "../button";
import { StyledDropdown, StyledDropdownBar, StyledDropdownContent, StyledTextBar } from "./dropdown-styles";

type TDropdown = {
    children: ReactNode;
    title: string;
}

export const Dropdown = ({
    children,
    title
}: TDropdown) => {

    const [open, setOpen] = useState(false);

    return(
        <StyledDropdown >
            <StyledDropdownBar state={open}>
                <StyledTextBar>
                    {title}
                </StyledTextBar>
                <Button text="X" onClick={() => setOpen(!open)} />
            </StyledDropdownBar>
            <StyledDropdownContent state={open} >
                {children}
            </StyledDropdownContent>
        </StyledDropdown>
    );
}