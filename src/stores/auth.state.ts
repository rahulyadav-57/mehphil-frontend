import { atom } from "recoil";

interface AuthState {
  email: string;
  accessToken: string;
  name: string;
  address: string;
  avatar?: string;
}

const authState = atom<AuthState | undefined>({
  key: "authState",
  default: {
    email: "",
    accessToken: "",
    name: "",
    address: "",
    avatar: "",
  },
});

export { authState };
export type { AuthState };
