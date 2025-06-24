import React, { createContext, useContext, useEffect, useState } from "react";
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

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

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
        const userData: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        };
        setUser(userData);
        if (localStorage.getItem("user")) {
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          sessionStorage.setItem("user", JSON.stringify(userData));
        }
      } else {
        setUser(null);
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
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
    const storage = stayLoggedIn ? localStorage : sessionStorage;
    storage.setItem("user", JSON.stringify(userData));
    if (stayLoggedIn) {
      sessionStorage.removeItem("user");
    } else {
      localStorage.removeItem("user");
    }
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
    const storage = stayLoggedIn ? localStorage : sessionStorage;
    storage.setItem("user", JSON.stringify(userData));
    if (stayLoggedIn) {
      sessionStorage.removeItem("user");
    } else {
      localStorage.removeItem("user");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, signUp, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
