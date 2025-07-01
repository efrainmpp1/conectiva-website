export interface RegisterNewUser {
  name: string;
  email: string;
  firebase_uid: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  firebase_uid: string;
}
