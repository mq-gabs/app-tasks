import { StyledText } from "../../layouts";
import { IHelp, IHome, IProfile, ISettings, ITasksList } from "../../utils/icons";
import { StyledBottomSection, StyledImage, StyledLi, StyledLink, StyledMidSection, StyledNavbar, StyledTopSection, StyledUl } from "./navbar-styles";


export const Navbar = () => {

    return (
        <StyledNavbar>
            <StyledTopSection>
                <StyledLink to="/">
                    <StyledImage 
                        src="../../assets/favicon.svg"
                        alt="Logo"
                    />
                </StyledLink>
            </StyledTopSection>

            <StyledMidSection>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to="/">
                            <IHome />
                            <StyledText>
                                HOME
                            </StyledText>
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/task-manager">
                            <ITasksList />
                            <StyledText>
                                TASKS
                            </StyledText>
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/settings">
                            <ISettings />
                            <StyledText>
                                AJUSTES
                            </StyledText>
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/help">
                            <IHelp />
                            <StyledText>
                                AJUDA
                            </StyledText>
                        </StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledMidSection>

            <StyledBottomSection>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to="/profile">
                            <IProfile />
                            <StyledText>
                                PROFILE
                            </StyledText>
                        </StyledLink>
                    </StyledLi>
                </StyledUl>

            </StyledBottomSection>
        </StyledNavbar> 
    );
}