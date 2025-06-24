import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../services/firebase";
import {
  AUTH_KEY,
  clearAuthStorage,
  setAuthStorage,
} from "../../utils/authStorage";

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const formatFirebaseUser = (firebaseUser: User): AuthUser => ({
  uid: firebaseUser.uid,
  email: firebaseUser.email,
  displayName: firebaseUser.displayName,
  photoURL: firebaseUser.photoURL,
});

interface AuthContextProps {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  loading: boolean;
  login: (email: string, password: string, stayLoggedIn: boolean) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: (stayLoggedIn: boolean) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  loading: true,
  login: async (_email: string, _password: string, _stayLoggedIn: boolean) => {},
  signUp: async () => {},
  loginWithGoogle: async (_stayLoggedIn: boolean) => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = formatFirebaseUser(firebaseUser);
        setUser(userData);

        const storage = localStorage.getItem(AUTH_KEY)
          ? localStorage
          : sessionStorage;
        storage.setItem(AUTH_KEY, JSON.stringify(userData));
      } else {
        setUser(null);
        clearAuthStorage();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (
    email: string,
    password: string,
    stayLoggedIn: boolean,
  ) => {
    const persistence = stayLoggedIn ? browserLocalPersistence : browserSessionPersistence;
    await setPersistence(auth, persistence);
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const u = cred.user;
    const userData: AuthUser = {
      uid: u.uid,
      email: u.email,
      displayName: u.displayName,
      photoURL: u.photoURL,
    };
    setUser(userData);
    clearAuthStorage();
    setAuthStorage(userData, stayLoggedIn);
  };

  const signUp = async (name: string, email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (cred.user && name) {
      await updateProfile(cred.user, { displayName: name });
    }
  };

  const loginWithGoogle = async (stayLoggedIn: boolean) => {
    const provider = new GoogleAuthProvider();
    const persistence = stayLoggedIn ? browserLocalPersistence : browserSessionPersistence;
    await setPersistence(auth, persistence);
    const cred = await signInWithPopup(auth, provider);
    const u = cred.user;
    const userData: AuthUser = {
      uid: u.uid,
      email: u.email,
      displayName: u.displayName,
      photoURL: u.photoURL,
    };
    setUser(userData);
    clearAuthStorage();
    setAuthStorage(userData, stayLoggedIn);
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    clearAuthStorage();
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, signUp, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
