import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Home } from "./components/Home";

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
};

export default App;
