"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  sessionId: string | null;
  username: string | null;
  login: (sessionId: string, username: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = 'sessionId';
const USERNAME_KEY = 'username';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedSessionId = sessionStorage.getItem(SESSION_KEY);
    const storedUsername = sessionStorage.getItem(USERNAME_KEY);

    if (storedSessionId && storedUsername) {
      setSessionId(storedSessionId);
      setUsername(storedUsername);
      setIsAuthenticated(true);
    } else if (pathname !== '/login') {
      router.push('/login');
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== '/login') {
      router.push('/login');
    }
  }, [isAuthenticated, pathname, isLoading, router]);

  const login = (newSessionId: string, newUsername: string) => {
    sessionStorage.setItem(SESSION_KEY, newSessionId);
    sessionStorage.setItem(USERNAME_KEY, newUsername);
    setSessionId(newSessionId);
    setUsername(newUsername);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(USERNAME_KEY);
    setSessionId(null);
    setUsername(null);
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        sessionId,
        username,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
