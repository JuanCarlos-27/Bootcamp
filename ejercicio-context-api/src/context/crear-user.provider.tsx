'use client';

import { createContext, useState } from 'react';
interface User {
  username: string;
  email: string;
  password: string;
  name: string;
}

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
}>({
  user: {
    username: "",
    email: "",
    password: "",
    name: ""
  },
  setUser: () => { }
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };