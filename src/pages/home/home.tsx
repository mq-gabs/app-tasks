import { StyledSpan, StyledText } from "../../layouts";
import { StyledBox, StyledImage, StyledMainText, StyledSection, StyledTopBox } from "./home-styles";


export const Home = () => {
  return (
    <>
      <StyledTopBox>
        <StyledText>
          Bem vindo ao <StyledSpan>TASKS</StyledSpan>

        </StyledText>
      </StyledTopBox>
      <StyledBox>
        <StyledSection>

          <StyledMainText>
            Seja mais <StyledSpan>produtivo</StyledSpan>!
          </StyledMainText>

          <StyledText>
            Gerencie suas atividades com <StyledSpan>pracitidade</StyledSpan> e <StyledSpan>organização</StyledSpan>.
          </StyledText>
          <StyledText>
            Divida seus projetos em um <StyledSpan>passo a passo</StyledSpan> com facilidade.
          </StyledText>
          <StyledText>
            Defina suas <StyledSpan>prioridades</StyledSpan> para administrar o seu <StyledSpan>tempo</StyledSpan>
            e cumpra os <StyledSpan>prazos</StyledSpan> estabelecidos.
          </StyledText>
        </StyledSection>
        <StyledImage
          src="../../assets/home-img.svg"
          alt="Um homem trabalhando no computador."
        />
      </StyledBox>
    </>
  );
}