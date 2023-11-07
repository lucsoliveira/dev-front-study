// import { ThemeContext, themes } from "./contexts/themeContext";
// import { StyledComponentsApp } from "./studies/styled-components";

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <div>
//         <StyledComponentsApp />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

import { ThemeContextProvider } from "./contexts/themeContext";
import { StyledComponentsApp } from "./studies/styled-components";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <StyledComponentsApp />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
