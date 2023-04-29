import { useState } from 'react';
import { ThemeContext } from 'styled-components';
import { AppContext } from './contexts';
import { StyledApp } from './layouts';
import { Routing } from './routing';

export default function App() {

  const [selectedTaskID, setSelectedTaskID] = useState<number>(-1);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <AppContext.Provider value={{selectedTaskID, setSelectedTaskID}}>
          <StyledApp >
            <Routing />
          </StyledApp>
        </AppContext.Provider>
      </ThemeContext.Provider>
  );
}