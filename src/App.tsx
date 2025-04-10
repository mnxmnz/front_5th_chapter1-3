import React, { useState } from "react";
import { generateItems } from "./utils";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { Header } from "./components/header/Header";
import { ItemList } from "./components/item-list/ItemList";
import { ComplexForm } from "./components/complex-form/ComplexForm";
import { NotificationSystem } from "./components/notification-system/NotificationSystem";

const App: React.FC = () => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  };

  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <main className="container mx-auto p-4">
              <ItemList items={items} onAddItemsClick={addItems} />
              <ComplexForm />
              <NotificationSystem />
            </main>
          </div>
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
