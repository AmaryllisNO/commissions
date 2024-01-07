import { atom } from 'jotai';

type AuthState = {
  isLoggedIn: boolean;
  user: { name: string } | null;
};

export const authAtom = atom<AuthState>({
  isLoggedIn: false,
  user: null,
});
