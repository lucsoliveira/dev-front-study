import styled from "styled-components";
import { useThemeContext } from "../../hooks/useThemeContext";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section<{ theme: any }>`
  padding: 4em;
  background: ${(props) => props.theme.background};
`;

const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// É possível extender classes ou funcoes existentes
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;

export function StyledComponentsApp(props: { theme: any }) {
  const { changeTheme, actualTheme } = useThemeContext();
  // const theme = useContext(ThemeContext);

  function toogleTheme() {
    changeTheme();
  }
  return (
    <div>
      <Wrapper theme={actualTheme}>
        <Title>Hello Worlds!</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
      <TomatoButton $primary>Primary</TomatoButton>
      <br />
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
      <br />
      Tema: {JSON.stringify(actualTheme)}
      <br />
      <button
        onClick={() => {
          toogleTheme();
        }}
      >
        Alterar Tema
      </button>
    </div>
  );
}
