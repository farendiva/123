"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  user_type: string;
  pemodal_id: number;
  pemodal_status: number;
  pemodal_status_description: string;
}

interface UserContextType {
  user: User | null;
  updateUser: (newData: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{
  children: ReactNode;
  initialUser: User | null;
}> = ({ children, initialUser }) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const updateUser = (newData: User) => {
    setUser(newData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
