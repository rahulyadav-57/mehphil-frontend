import { useApiClient } from "@/hooks";
import { AxiosResponse } from "axios";

export { useUserActions };

function useUserActions() {
  const ApiClient = useApiClient();
  // const userActions = useUserActions();
  // const setAuth = useSetRecoilState(authState);

  return {
    login,
    nonce,
  };

  async function nonce(): Promise<AxiosResponse> {
    return ApiClient.get("/user/nonce");
  }

  async function login(data: {
    message: any;
    signature: string;
    address: string;
  }): Promise<AxiosResponse> {
    return ApiClient.post("/user/verify", data);
  }
}
