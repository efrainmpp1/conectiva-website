import { AuthUser } from '../interfaces/AuthUser';

export const AUTH_KEY = 'user';

export const clearAuthStorage = (): void => {
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(AUTH_KEY);
};

export const setAuthStorage = (user: AuthUser, stayLoggedIn: boolean): void => {
  const storage = stayLoggedIn ? localStorage : sessionStorage;
  storage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const syncAuthStorage = (user: AuthUser): void => {
  const storage = localStorage.getItem(AUTH_KEY) ? localStorage : sessionStorage;
  storage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const getStoredAuthUser = (): AuthUser | null => {
  const stored = localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY);
  return stored ? (JSON.parse(stored) as AuthUser) : null;
};
