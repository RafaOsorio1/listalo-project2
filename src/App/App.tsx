import { AppProvider } from '../Context/AppContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <AppProvider>
      <AppUI></AppUI>
    </AppProvider>
  );
}

export default App;
