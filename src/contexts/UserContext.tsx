import React, { createContext, useContext, useState } from "react";
import { useMemo, useCallback } from "../@lib/hooks";
import { useNotification } from "./NotificationContext";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { addNotification } = useNotification();
  const [user, setUser] = useState<User | null>(() => null);

  const login = useCallback(
    (email: string) => {
      setUser({
        id: 1,
        name: "홍길동",
        email,
      });
      addNotification("성공적으로 로그인되었습니다", "success");
    },
    [addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification("성공적으로 로그아웃되었습니다", "success");
  }, [addNotification]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
