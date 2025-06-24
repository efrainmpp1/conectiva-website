export const AUTH_KEY = "user";

export interface StoredAuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export const clearAuthStorage = () => {
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(AUTH_KEY);
};

export const setAuthStorage = (
  user: StoredAuthUser,
  stayLoggedIn: boolean,
) => {
  const storage = stayLoggedIn ? localStorage : sessionStorage;
  storage.setItem(AUTH_KEY, JSON.stringify(user));
};
